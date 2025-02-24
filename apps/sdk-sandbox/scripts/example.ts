import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive, ReadWriteHyperdrive } from "@delvtech/hyperdrive-js";
import { CurrencyAmount, Percent, Token, TradeType } from "@uniswap/sdk-core";
import { AlphaRouter, SwapType } from "@uniswap/smart-order-router";
import { ethers } from "ethers";
import { publicClient, walletClient } from "../client";

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

async function fetchSwapPath() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const router = new AlphaRouter({
    chainId: 1,
    provider,
  });

  // Define tokens
  const DAI = new Token(
    1,
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    18,
    "DAI",
    "Dai Stablecoin"
  );
  const USDC = new Token(
    1,
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    6,
    "USDC",
    "USD Coin"
  );
  // Swap amount: 1 DAI
  const amountIn = ethers.utils.parseUnits("1", 18);
  const currencyAmountIn = CurrencyAmount.fromRawAmount(
    DAI,
    amountIn.toString()
  );

  // Fetch the route for an exact input swap
  const route = await router.route(
    currencyAmountIn,
    USDC,
    TradeType.EXACT_INPUT,
    {
      recipient: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", // replace with your address
      slippageTolerance: new Percent(50, 10000), // 0.50% tolerance
      deadline: Math.floor(Date.now() / 1000) + 1800, // 30 min deadline
      type: SwapType.SWAP_ROUTER_02,
    }
  );

  if (route) {
    console.log("Swap path found:");
    console.log(route.route[0]);
  } else {
    console.log("No swap path found.");
  }
}

async function main() {
  // await executeZapOpenAndClose();
  await fetchSwapPath();
}

main().catch(console.error);
