import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import {
  appConfig,
  getBaseToken,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";
import { zapAbi } from "@delvtech/hyperdrive-js";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/query-core";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SUCCESS_TOAST_DURATION } from "src/ui/base/toasts";
import TransactionToast from "src/ui/transactions/TransactionToast";
import { Address, encodePacked, WalletClient } from "viem";
import {
  useAccount,
  useBlock,
  useBlockNumber,
  usePublicClient,
  useWalletClient,
} from "wagmi";
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
  const publicClient = usePublicClient();
  const addTransaction = useAddRecentTransaction();
  const { data: walletClient } = useWalletClient({ chainId });
  const zapsConfig = appConfig.zaps[chainId];
  const { data: blockNumber } = useBlockNumber();
  const { data: block } = useBlock({ blockNumber });
  const isMutationEnabled =
    !!zapsConfig && !!account && !!publicClient && !!walletClient && enabled;
  const baseToken = getBaseToken({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });
  const closeLongZapMutation = useMutation({
    mutationFn: async () => {
      if (!isMutationEnabled || !block?.timestamp) {
        return;
      }

      const drift = new Drift(
        viemAdapter({
          publicClient,
          walletClient: walletClient as WalletClient,
        })
      );

      try {
        const hash = await drift.write({
          abi: zapAbi,
          address: zapsConfig.address,
          fn: "closeLongZap",
          args: {
            _hyperdrive: hyperdriveAddress,
            _minOutput: minAmountOut ?? 1n,
            _maturityTime: maturityTime ?? block?.timestamp,
            _bondAmount: bondAmountIn ?? 1n,
            _options: {
              destination: destination ?? account,
              asBase,
              extraData: "0x",
            },
            _shouldWrap: false,
            _swapParams: {
              amountIn: bondAmountIn ?? 1n,
              amountOutMinimum: minAmountOut ?? 1n,
              deadline: block?.timestamp + 60n,
              path: encodePacked(
                ["address", "uint24", "address"],
                [baseToken.address, 100, tokenOut.address]
              ),
              recipient: zapsConfig.address,
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
                }
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
          { id: hash }
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
