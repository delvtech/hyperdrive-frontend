import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { appConfig, getToken } from "@delvtech/hyperdrive-appconfig";
import { UniV3Zap } from "@delvtech/hyperdrive-artifacts/UniV3Zap";
import { useMutation } from "@tanstack/react-query";
import { SwapRouter } from "@uniswap/v3-sdk";
import { getDrift } from "src/drift/getDrift";
import { wagmiConfig } from "src/network/wagmiClient";
import { Address, WalletClient } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
interface UseOpenLongZapOptions {
  hyperdriveAddress: Address;
  chainId: number;
  tokenIn: Address;
  minSharePrice: bigint;
  minBondsOut: bigint;
  amount: bigint;
  asBase?: boolean;
  enabled?: boolean;
}

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
  const zapsConfig = appConfig.zaps[chainId];
  const publicClient = usePublicClient({ chainId });
  const walletClient = useWalletClient({ chainId });
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

      // const drift = getDrift({ chainId });
      const tokenInConfig = getToken({
        chainId,
        appConfig,
        tokenAddress: tokenIn,
      });

      // const hash = drift.write({
      //   abi: UniV3Zap.abi,
      //   address: zapsConfig.address,
      //   fn: "openLongZap",
      //   args: {
      //     _zapInOptions: {
      //       // TODO: Determine how to decide if a token is rebasing or not. Does
      //       // Uniswap V3 sdk have a way to check?
      //       isRebasing: tokenInConfig
      //         ? rebasingTokenSymbols.includes(
      //             tokenInConfig.symbol.toLocaleLowerCase(),
      //           )
      //         : false,
      //       // TODO: Determine when and which tokens to wrap.
      //       shouldWrap: false,
      //       // The amount of source tokens that should be swapped. In most
      //       // cases, this should be equal to the `swapParams.amountIn`, but
      //       // in the case of wrapped tokens, this amount will supersede that
      //       // quantity.
      //       sourceAmount: amount,
      //       sourceAsset: tokenIn,
      //       swapParams: {
      //         amountIn: amount,
      //         amountOutMinimum: minBondsOut,
      //         deadline,
      //         path,
      //         recipient: account,
      //       },
      //     },
      //   },
      // });
    },
  });
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
