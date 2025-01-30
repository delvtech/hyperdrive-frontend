import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { getBaseToken, TokenConfig } from "@delvtech/hyperdrive-appconfig";
import { zapAbi } from "@delvtech/hyperdrive-js";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
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
interface UseOpenLongZapOptions {
  hyperdriveAddress: Address;
  chainId: number;
  tokenIn: TokenConfig;
  minSharePrice: bigint;
  minBondsOut: bigint;
  amount: bigint;
  enabled?: boolean;
}

const REBASING_TOKEN_SYMBOLS = ["steth", "eeth", "aave"];

interface UseOpenLongZapResult {
  openLongZap: () => void;
  status: MutationStatus;
}

export function useOpenLongZap({
  hyperdriveAddress,
  chainId,
  tokenIn,
  minSharePrice,
  minBondsOut,
  amount,
  enabled = true,
}: UseOpenLongZapOptions): UseOpenLongZapResult {
  const { address: account } = useAccount();
  const { data: blockNumber } = useBlockNumber();
  const { data: block } = useBlock({ blockNumber });
  const appConfig = useAppConfigForConnectedChain();
  const zapsConfig = appConfig.zaps[chainId];
  const publicClient = usePublicClient({ chainId });
  const { data: walletClient } = useWalletClient({ chainId });
  const addTransaction = useAddRecentTransaction();
  const baseToken = getBaseToken({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });

  const isMutationEnabled =
    !!zapsConfig && !!account && !!publicClient && !!walletClient && enabled;

  const openLongZapMutation = useMutation({
    mutationFn: async () => {
      if (!isMutationEnabled || !block?.timestamp) {
        return;
      }

      const drift = new Drift(
        viemAdapter({
          publicClient,
          walletClient: walletClient as WalletClient,
        }),
      );

      try {
        const hash = await drift.write({
          abi: zapAbi,
          address: zapsConfig.address,
          fn: "openLongZap",
          args: {
            _hyperdrive: hyperdriveAddress,
            _minOutput: minBondsOut,
            _minVaultSharePrice: minSharePrice,
            _hyperdriveOptions: {
              destination: account,
              asBase: true,
              extraData: "0x",
            },
            _zapInOptions: {
              isRebasing: tokenIn
                ? REBASING_TOKEN_SYMBOLS.includes(tokenIn.symbol.toLowerCase())
                : false,
              shouldWrap: false,
              sourceAmount: amount,
              sourceAsset: tokenIn.address,
              swapParams: {
                amountIn: amount,
                amountOutMinimum: 1n, // TODO: Adjust for slippage
                deadline: block.timestamp + 60n, // 1 minute from block timestamp
                path: encodePacked(
                  ["address", "uint24", "address"],
                  [tokenIn.address, 100, baseToken.address],
                ),
                recipient: zapsConfig.address,
              },
            },
          },
          onMined(receipt) {
            if (receipt?.status === "success") {
              toast.success(
                <TransactionToast
                  chainId={chainId}
                  message="Long opened"
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
            message="Opening a Long..."
          />,
          { id: hash },
        );

        addTransaction({
          hash: hash,
          description: "Open Long",
        });

        window.plausible("transactionSubmit", {
          props: {
            transactionHash: hash,
            transactionType: "open",
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
    openLongZap: openLongZapMutation.mutate,
    status: openLongZapMutation.status,
  };
}
