import { CurrencyAmount, Percent, Token, TradeType } from "@uniswap/sdk-core";
import { AlphaRouter, SwapType } from "@uniswap/smart-order-router";
import { ethers } from "ethers";

export async function fetchSwapPath(
  tokenIn: Token,
  tokenOut: Token,
): Promise<string | undefined> {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const router = new AlphaRouter({
    chainId: 1,
    provider,
  });

  // Swap amount: 100 tokenIn (using tokenIn decimals)
  const amountIn = ethers.utils.parseUnits("100", tokenIn.decimals.toString());
  const currencyAmountIn = CurrencyAmount.fromRawAmount(
    tokenIn,
    amountIn.toString(),
  );

  // Fetch the route for an exact input swap
  const route = await router.route(
    currencyAmountIn,
    tokenOut,
    TradeType.EXACT_INPUT,
    {
      recipient:
        process.env.RECIPIENT_ADDRESS ||
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      slippageTolerance: new Percent(50, 10000), // 0.50% tolerance
      deadline: Math.floor(Date.now() / 1000) + 1800, // 30-min deadline
      type: SwapType.SWAP_ROUTER_02,
    },
  );

  if (route) {
    const v3Route = route.route.find((r) => r.protocol === "V3");
    if (v3Route) {
      const tokenPath = v3Route.tokenPath;
      const pools = v3Route.route.pools;

      const types: string[] = [];
      const values: (string | number)[] = [];

      for (let i = 0; i < tokenPath.length; i++) {
        types.push("address");
        values.push(tokenPath[i].address);
        if (i < tokenPath.length - 1) {
          types.push("uint24");
          values.push(pools[i].fee);
        }
      }

      const encodedPath = ethers.utils.solidityPack(types, values);
      return encodedPath;
    } else {
      console.log("No V3 route found in the swap path.");
    }
  } else {
    console.log("No swap path found.");
  }
}
