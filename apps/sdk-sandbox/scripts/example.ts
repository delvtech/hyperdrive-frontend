import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive, ReadWriteHyperdrive } from "@delvtech/hyperdrive-js";
import { CurrencyAmount, Percent, Token, TradeType } from "@uniswap/sdk-core";
import { AlphaRouter, SwapType } from "@uniswap/smart-order-router";
import { ethers } from "ethers";
import { publicClient, walletClient } from "../client";
import { executeZapOpenAndClose } from "./executeZapAndClose";
const zapsConfig = appConfig.zaps[707];
const drift = new Drift(viemAdapter({ publicClient, walletClient }));

const poolAddress = "0x324395D5d835F84a02A75Aa26814f6fD22F25698";
const earliestBlock = 20180617n;

// Write instance for transactions
const writePool = new ReadWriteHyperdrive({
  address: poolAddress,
  drift,
  earliestBlock,
});

// Read instance (includes zapAddress)
const readPool = new ReadHyperdrive({
  address: poolAddress,
  drift,
  zapContractAddress: zapsConfig.address,
  earliestBlock,
});

const poolContract = drift.contract({
  abi: writePool.contract.abi,
  address: poolAddress,
});

async function fetchSwapPath(tokenIn: Token, tokenOut: Token) {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const router = new AlphaRouter({
    chainId: 1,
    provider,
  });

  // Swap amount: 100 DAI
  const amountIn = ethers.utils.parseUnits("100", 18);
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
      recipient: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", // replace with your address
      slippageTolerance: new Percent(50, 10000), // 0.50% tolerance
      deadline: Math.floor(Date.now() / 1000) + 1800, // 30 min deadline
      type: SwapType.SWAP_ROUTER_02,
    },
  );

  if (route) {
    // Extract the V3 route (which contains tokenPath and poolIdentifiers)
    const v3Route = route.route.find((r) => r.protocol === "V3");

    if (v3Route) {
      const tokenPath = v3Route.tokenPath;
      const pools = v3Route.route.pools; // each pool contains its fee
      console.log(
        "V3 tokenPath:",
        tokenPath.map((t) => t.address),
      );

      // Build arrays of types and values for solidityPack
      const types: string[] = [];
      const values: (string | number)[] = [];

      for (let i = 0; i < tokenPath.length; i++) {
        // Add token address
        types.push("address");
        values.push(tokenPath[i].address);
        // For every hop except the last, add the fee from the corresponding pool
        if (i < tokenPath.length - 1) {
          const fee = pools[i].fee;
          types.push("uint24");
          values.push(fee);
        }
      }
      const encodedPath = ethers.utils.solidityPack(types, values);
      console.log("EncodedPath", encodedPath);
      return encodedPath;
    } else {
      console.log("No V3 route found in the swap path.");
    }
  } else {
    console.log("No swap path found.");
  }
}

async function main() {
  const DAI = new Token(
    1,
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    18,
    "DAI",
    "Dai Stablecoin",
  );
  const USDC = new Token(
    1,
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    6,
    "USDC",
    "USD Coin",
  );
  // await executeZapOpenAndClose();
  const encodedPath = await fetchSwapPath(DAI, USDC);
  if (!encodedPath) {
    console.log("No encoded path found");
    return;
  }
  await executeZapOpenAndClose(encodedPath as `0x${string}`);
}

main().catch(console.error);
