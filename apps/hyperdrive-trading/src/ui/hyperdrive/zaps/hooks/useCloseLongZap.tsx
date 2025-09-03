import { fixed } from "@delvtech/fixed-point-wasm";
import { getBaseToken, TokenConfig } from "@delvtech/hyperdrive-appconfig";
import { zapAbi } from "@delvtech/hyperdrive-js";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import { useReadWriteDrift } from "src/ui/drift/useDrift";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address, encodePacked } from "viem";
import { useAccount, useBlock, useBlockNumber } from "wagmi";

interface UseCloseLongOptions {
  hyperdriveAddress: Address;
  chainId: number;
  maturityTime: bigint | undefined;
  tokenOut: TokenConfig;
  bondAmountIn: bigint | undefined;
  minAmountOut: bigint | undefined;
  destination: Address | undefined;
  asBase?: boolean;
  enabled?: boolean;
}

export function useCloseLongZap({
  hyperdriveAddress,
  chainId,
  maturityTime,
  tokenOut,
  bondAmountIn,
  minAmountOut,
  destination,
  asBase = true,
  enabled = true,
}: UseCloseLongOptions): {
  closeLongZap: () => void;
  status: MutationStatus;
} {
  const { address: account } = useAccount();
  const addTransaction = useAddRecentTransaction();
  const appConfig = useAppConfigForConnectedChain();
  const zapsConfig = appConfig.zaps[chainId];
  const { data: blockNumber } = useBlockNumber();
  const { data: block } = useBlock({ blockNumber });
  const drift = useReadWriteDrift();

  const isMutationEnabled = !!zapsConfig && !!account && !!drift && enabled;
  const baseToken = getBaseToken({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig: appConfig,
  });

  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    tokenAddress: baseToken.address,
    chainId,
  });

  // Convert bondAmountIn to base token
  const bondAmountInAsBase =
    bondAmountIn && baseTokenPrice
      ? fixed(bondAmountIn).div(baseTokenPrice).bigint
      : undefined;

  const { amountOut: previewBaseTokenAmountOut } = usePreviewCloseLong({
    hyperdriveAddress,
    chainId,
    tokenOutAddress: baseToken.address,
    maturityTime,
    bondAmountIn: bondAmountInAsBase ?? 0n,
    asBase: true,
  });

  const closeLongZapMutation = useMutation({
    mutationFn: async () => {
      if (
        !isMutationEnabled ||
        !block?.timestamp ||
        !maturityTime ||
        !bondAmountIn ||
        !minAmountOut ||
        !previewBaseTokenAmountOut
      ) {
        return;
      }

      try {
        const hash = await drift.write({
          abi: zapAbi,
          address: zapsConfig.address,
          fn: "closeLongZap",
          from: account,
          args: {
            _hyperdrive: hyperdriveAddress,
            _minOutput: minAmountOut ?? 1n,
            _maturityTime: maturityTime,
            _bondAmount: bondAmountInAsBase ?? 0n,
            // zap contract should receive the tokens from closing the long,
            // because it will then zap them to whatever the user wants
            _options: {
              destination: zapsConfig.address,
              asBase,
              extraData: "0x",
            },
            _shouldWrap: false,
            // NOTE: _swapParams only knows about uniswap, so this will be a
            // swap for base tokens -> zap token
            _swapParams: {
              amountIn: previewBaseTokenAmountOut, // amount of base token
              amountOutMinimum: minAmountOut ?? 1n,
              deadline: block.timestamp + 60n,
              // Use the fetched Uniswap path if available, otherwise fall back to direct path
              path: encodePacked(
                // Direct path between tokens with 1% fee
                ["address", "uint24", "address"],
                [baseToken.address, 100, tokenOut.address],
              ),
              recipient: destination ?? account,
            },
          },
          onMined(receipt) {
            if (receipt?.status === "success") {
              toast.success(
                <TransactionToast
                  chainId={chainId}
                  message="Long closed"
                  txHash={receipt.transactionHash}
                />,
                {
                  id: receipt.transactionHash,
                  duration: SUCCESS_TOAST_DURATION,
                },
              );
            }
          },
        });
        toast.loading(
          <TransactionToast
            chainId={chainId}
            txHash={hash}
            message="Closing a Long..."
          />,
          { id: hash },
        );

        addTransaction({
          hash: hash,
          description: "Close Long",
        });

        window.plausible("transactionSubmit", {
          props: {
            transactionHash: hash,
            transactionType: "close",
            positionType: "long",
            poolAddress: hyperdriveAddress,
            chainId,
            connectedWallet: account,
          },
        });
        return hash;
      } catch (error) {
        console.error("Drift error:", error);
        return "0x";
      }
    },
  });

  return {
    closeLongZap: closeLongZapMutation.mutate,
    status: closeLongZapMutation.status,
  };
}
