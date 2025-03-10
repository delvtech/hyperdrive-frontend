import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive, ReadWriteHyperdrive } from "@delvtech/hyperdrive-js";
import { Token } from "@uniswap/sdk-core";
import { publicClient, walletClient } from "../client";
import { executeZapOpenAndClose } from "./executeZapAndClose";
import { fetchSwapPath } from "./fetchSwapPath";

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

drift.contract({
  abi: writePool.contract.abi,
  address: poolAddress,
});

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

  const encodedPath = await fetchSwapPath(DAI, USDC);
  if (!encodedPath) {
    console.log("No encoded path found");
    return;
  }
  await executeZapOpenAndClose(encodedPath as `0x${string}`);
}

main().catch(console.error);
