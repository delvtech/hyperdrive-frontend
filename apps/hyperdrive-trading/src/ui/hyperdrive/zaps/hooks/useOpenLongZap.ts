import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import {
  appConfig,
  getBaseToken,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";
import { zapAbi } from "@delvtech/hyperdrive-js";
import { useMutation } from "@tanstack/react-query";
import { FeeAmount } from "@uniswap/v3-sdk";
import { MAX_UINT256 } from "src/base/constants";

import { Address, encodePacked, WalletClient } from "viem";
import {
  useAccount,
  useBlock,
  useBlockNumber,
  usePublicClient,
  useWalletClient,
} from "wagmi";
const { VITE_CUSTOM_CHAIN_NODE_RPC_URL, VITE_CUSTOM_CHAIN_CHAIN_ID } =
  import.meta.env;

interface UseOpenLongZapOptions {
  hyperdriveAddress: Address;
  chainId: number;
  tokenIn: TokenConfig;
  minSharePrice: bigint;
  minBondsOut: bigint;
  amount: bigint;
  enabled?: boolean;
}

// TODO: Add this to appconfig under `TokenConfig`
const rebasingTokenSymbols = ["steth", "eeth", "aave"];

export function useOpenLongZap({
  hyperdriveAddress,
  chainId,
  tokenIn,
  minSharePrice,
  minBondsOut,
  amount,
  enabled = true,
}: UseOpenLongZapOptions): any {
  const { address: account } = useAccount();
  const { data: blockNumber } = useBlockNumber();

  // TODO: Need some logic to determine if base deposits are enabled on this pool.
  const asBase = true;

  // get block timestamp
  const { data: block } = useBlock({ blockNumber });
  const zapsConfig = appConfig.zaps[chainId];
  const publicClient = usePublicClient({ chainId });
  const walletClient = useWalletClient({ chainId });

  const baseToken = getBaseToken({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });
  const mutationEnabled =
    !!zapsConfig && !!account && !!publicClient && !!walletClient && !!enabled;
  const { mutate: openLongZap, status } = useMutation({
    mutationFn: async () => {
      console.log({ zapsConfig, account, publicClient, walletClient, enabled });
      if (!mutationEnabled) {
        console.log("Mutation not enabled");
        return;
      }
      const drift = new Drift(
        viemAdapter({
          publicClient,
          walletClient: walletClient as any as WalletClient,
        })
      );
      if (!block?.timestamp) {
        return;
      }
      console.log("Executing openLongZap");

      const testHash = await drift
        .write({
          abi: zapAbi,
          address: zapsConfig.address,
          fn: "openLongZap",
          args: {
            _hyperdrive: hyperdriveAddress,
            _minOutput: minBondsOut,
            _minVaultSharePrice: minSharePrice,
            _hyperdriveOptions: {
              destination: account,
              asBase,
              extraData: "0x",
            },
            _zapInOptions: {
              // TODO: Determine how to decide if a token is rebasing or not. Does
              // Uniswap V3 sdk have a way to check?
              // Only yield baring tokens will be rebasing.
              // Can put this as a tag in tokenconfig.
              isRebasing: tokenIn
                ? rebasingTokenSymbols.includes(
                    tokenIn.symbol.toLocaleLowerCase()
                  )
                : false,
              // TODO: Determine when and which tokens to wrap.
              shouldWrap: false,
              // The amount of source tokens that should be swapped. In most
              // cases, this should be equal to the `swapParams.amountIn`, but
              // in the case of wrapped tokens, this amount will supersede that
              // quantity. // Clarify with Alex.
              sourceAmount: amount,
              sourceAsset: tokenIn.address,
              swapParams: {
                amountIn: amount,

                // TODO: Adjust this for slippage
                amountOutMinimum: MAX_UINT256,

                // Deadline is 1 minute from the current block timestamp. TODO: Determine if this is correct or needs to be dynamic.
                deadline: block.timestamp + 1n * 60n,
                path: encodePacked(
                  ["address", "uint256", "address"],
                  [tokenIn.address, BigInt(FeeAmount.LOWEST), baseToken.address]
                ),
                recipient: zapsConfig.address,
              },
            },
          },
        })
        .catch((e) => {
          console.log("Drift err: ", e);
          return "0x";
          // throw e;
        });
    },
  });

  return { openLongZap, status };
}
