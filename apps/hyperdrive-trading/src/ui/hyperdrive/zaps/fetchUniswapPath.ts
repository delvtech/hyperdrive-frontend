import { CurrencyAmount, Percent, Token, TradeType } from "@uniswap/sdk-core";
import { AlphaRouter, SwapType } from "@uniswap/smart-order-router";
import { ethers } from "ethers";

export async function fetchUniswapPath({
  tokenIn,
  tokenOut,
  amountIn,
  recipient,
}: {
  tokenIn: Token;
  tokenOut: Token;
  amountIn: bigint;
  recipient: `0x${string}` | undefined;
}): Promise<`0x${string}` | undefined> {
  const provider = new ethers.providers.JsonRpcProvider(
    import.meta.env.VITE_MAINNET_RPC_URL!,
  );
  const router = new AlphaRouter({
    chainId: 1,
    provider,
  });

  // Set swap amount: 1 tokenIn (adjust decimals as needed)
  // TODO: make this dynamic based on the amount of tokens in the zap
  const currencyAmountIn = CurrencyAmount.fromRawAmount(
    tokenIn,
    amountIn.toString(),
  );

  // Fetch the route for an exact input swap
  const routeResult = await router.route(
    currencyAmountIn,
    tokenOut,
    TradeType.EXACT_INPUT,
    {
      recipient: recipient ?? "0x0000000000000000000000000000000000000000",
      slippageTolerance: new Percent(50, 10000), // 0.50% tolerance
      deadline: Math.floor(Date.now() / 1000) + 1800, // 30 min deadline
      type: SwapType.SWAP_ROUTER_02,
    },
  );

  console.log(routeResult, "routeResult");

  if (!routeResult) {
    console.log("No route found");
    return undefined;
  }

  // Extract the V3 route, which includes tokenPath and pool fees
  const v3Route = routeResult.route.find((r) => r.protocol === "V3");
  if (!v3Route) {
    console.log("No V3 route found in the swap path.");
    return undefined;
  }

  const tokenPath = v3Route.tokenPath;
  const pools = v3Route.route.pools; // each pool contains its fee

  // Build dynamic arrays for solidityPack: alternate token addresses and fee values
  const types: string[] = [];
  const values: (string | number)[] = [];

  for (let i = 0; i < tokenPath.length; i++) {
    types.push("address");
    values.push(tokenPath[i].address);
    if (i < tokenPath.length - 1) {
      const fee = pools[i].fee;
      types.push("uint24");
      values.push(fee);
    }
  }

  const encodedPath = ethers.utils.solidityPack(types, values) as `0x${string}`;
  console.log(encodedPath, "Found an encoded path");
  return encodedPath;
}
