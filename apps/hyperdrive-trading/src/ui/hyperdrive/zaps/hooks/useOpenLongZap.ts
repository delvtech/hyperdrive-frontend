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
  asBase?: boolean;
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
  asBase,
  enabled,
}: UseOpenLongZapOptions): any {
  const { address: account } = useAccount();
  const { data: blockNumber } = useBlockNumber();
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
    !!zapsConfig && !!account && !!publicClient && !!walletClient;
  const { mutate: openLongZap, status } = useMutation({
    mutationFn: async () => {
      if (!mutationEnabled) {
        return;
      }
      const drift = new Drift(
        viemAdapter({
          publicClient,
          walletClient: walletClient as any as WalletClient,
        })
      );
      if (!block?.timestamp || !asBase) {
        return;
      }

      const hash = drift.write({
        abi: zapAbi,
        address: zapsConfig.address,
        fn: "openLongZap",
        args: {
          _hyperdrive: hyperdriveAddress,
          _minOutput: minBondsOut,
          _minVaultSharePrice: minSharePrice,
          _hyperdriveOptions: {
            destination: account,
            asBase: asBase,
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
      });
    },
  });

  return { openLongZap, status };
}

/*
zap.openLongZap(
    SDAI_HYPERDRIVE,
    0, // minimum output
    0, // minimum vault share price
    IHyperdrive.Options({
        destination: alice,
        asBase: true,
        extraData: ""
    }),
    IUniV3Zap.ZapInOptions({
        swapParams: ISwapRouter.ExactInputParams({
            path: abi.encodePacked(
                USDC,
                LOW_FEE_TIER,
                WETH,
                LOW_FEE_TIER,
                SDAI
            ),
            recipient: address(zap),
            deadline: block.timestamp + 1 minutes,
            amountIn: 1_000e6,
            amountOutMinimum: 850e18
        }),
        sourceAsset: USDC,
        sourceAmount: 1_000e6,
        shouldWrap: false,
        isRebasing: false
    })
);
*/

// Example for config from uniswap. Probably not needed.
// const CurrentConfig: ExampleConfig = {
//   rpc: {
//     local: "http://localhost:5173",
//     mainnet: VITE_CUSTOM_CHAIN_NODE_RPC_URL,
//   },
//   tokens: {
//     in: tokenInToken,
//     amountIn: 1000,
//     out: tokenOutToken,
//     poolFee: FeeAmount.MEDIUM,
//   },
// };

// interface ExampleConfig {
//   rpc: {
//     local: string;
//     mainnet: string;
//   };
//   tokens: {
//     in: Token;
//     amountIn: number;
//     out: Token;
//     poolFee: number;
//   };
// }
// const POOL_FACTORY_CONTRACT_ADDRESS =
//         "0x1F98431c8aD98523631AE4a59f267346ea31F984";
//       const QUOTER_CONTRACT_ADDRESS =
//         "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

//       const tokenInToken = new Token(
//         chainId,
//         tokenIn.address,
//         tokenIn.decimals,
//         tokenIn.symbol,
//         tokenIn.name,
//       );

//       const tokenOutToken = new Token(
//         chainId,
//         baseToken.address,
//         baseToken.decimals,
//         baseToken.symbol,
//         baseToken.name,
//       );
