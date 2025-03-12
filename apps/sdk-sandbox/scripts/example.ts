import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { appConfig, getBaseToken } from "@delvtech/hyperdrive-appconfig";
import {
  ReadHyperdrive,
  ReadWriteHyperdrive,
  zapAbi,
} from "@delvtech/hyperdrive-js";
import { Token } from "@uniswap/sdk-core";
import { Address, encodePacked, erc20Abi, maxInt256 } from "viem";
import { publicClient, walletClient } from "../client";
import { fetchSwapPath } from "./fetchSwapPath";

const zapsConfig = appConfig.zaps[707];
const drift = new Drift(viemAdapter({ publicClient, walletClient }));

const poolAddress = "0x324395D5d835F84a02A75Aa26814f6fD22F25698";
const earliestBlock = 20180617n;

const writePool = new ReadWriteHyperdrive({
  address: poolAddress,
  drift,
  earliestBlock,
});
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

async function executeAddLiquidityZap(swapPath: `0x${string}`) {
  // Define tokens – using DAI as the source and USDC as the pool asset.
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

  const account = walletClient?.account.address as Address;
  if (!account) throw new Error("No account found");
  console.log("[START] Account:", account);

  const baseToken = getBaseToken({
    hyperdriveChainId: publicClient.chain?.id ?? 0,
    hyperdriveAddress: poolAddress,
    appConfig,
  });

  // Amount you want to zap into liquidity.
  const liquidityAmount = BigInt(20e18);

  // Approve DAI for the zap contract.
  const approveTx = await walletClient?.writeContract({
    abi: erc20Abi,
    chain: publicClient.chain,
    address: DAI.address as `0x${string}`,
    functionName: "approve",
    args: [zapsConfig.address, liquidityAmount],
  });
  if (!approveTx) throw new Error("No approve transaction hash received");
  const approveReceipt = await publicClient.waitForTransactionReceipt({
    hash: approveTx,
  });
  console.log("APPROVE TX STATUS:", approveReceipt.status);

  // Set a swap deadline.
  const { timestamp } = await publicClient.getBlock();
  const deadline = timestamp + 60n;

  // Define liquidity parameters.
  const minLpSharePrice = 1n; // set your desired minimum LP share price
  const minApr = 0n; // set your desired minimum APR
  const maxApr = maxInt256; // allow maximum APR

  // Execute the addLiquidityZap call.

  const swapTx = await drift.write({
    abi: zapAbi,
    address: zapsConfig.address,
    fn: "addLiquidityZap",
    gas: 20000000n,
    args: {
      _hyperdrive: poolAddress,
      _minLpSharePrice: minLpSharePrice,
      _minApr: minApr,
      _maxApr: maxApr,
      _hyperdriveOptions: {
        destination: account as `0x${string}`,
        asBase: true,
        extraData: "0x",
      },
      _zapInOptions: {
        swapParams: {
          path: encodePacked(
            ["address", "uint24", "address"],
            [
              // USDC
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              100,
              // Base token
              baseToken.address,
            ],
          ),
          recipient: zapsConfig.address as `0x${string}`,
          deadline,
          amountIn: BigInt(50e18),
          amountOutMinimum: 1n,
        },
        sourceAsset:
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as `0x${string}`,
        sourceAmount: BigInt(50e18),
        shouldWrap: false,
        isRebasing: false,
      },
    },
  });

  // const swapTx = await walletClient?.writeContract({
  //   abi: zapAbi,
  //   chain: publicClient.chain,
  //   address: zapsConfig.address,
  //   functionName: "addLiquidityZap",
  //   gas: 20000000n,
  //   args: [
  //     poolAddress,
  //     minLpSharePrice,
  //     minApr,
  //     maxApr,
  //     hyperdriveOptions,
  //     zapInOptions,
  //   ],
  // });
  if (!swapTx)
    throw new Error("No add liquidity zap transaction hash received");
  console.log("addLiquidityZap tx hash:", swapTx);

  const receipt = await publicClient.waitForTransactionReceipt({
    hash: swapTx,
  });
  console.log("Receipt status after add liquidity zap:", receipt.status);

  // Optionally, you can query for LP share balances here.
}

async function main() {
  // Fetch the encoded swap path (from DAI to USDC).
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
  await executeAddLiquidityZap(encodedPath as `0x${string}`);
}

main().catch(console.error);
