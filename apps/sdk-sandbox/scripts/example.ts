import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { fixed } from "@delvtech/fixed-point-wasm";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import {
  ReadHyperdrive,
  ReadWriteHyperdrive,
  zapAbi,
} from "@delvtech/hyperdrive-js";
import { ethers } from "ethers";
import { Address, encodePacked, maxInt256 } from "viem";
import { publicClient, walletClient } from "../client";

const zapsConfig = appConfig.zaps[707];
const drift = new Drift(viemAdapter({ publicClient, walletClient }));

const poolAddress = "0x324395D5d835F84a02A75Aa26814f6fD22F25698";
const earliestBlock = 20180617n;

async function fetchSwapPath() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

  // const router = new AlphaRouter({
  //   chainId: 707,
  //   provider,
  // });

  // console.log(router, "router");
}

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

// SAMPLE ASSET ID AND MATURITY
const assetId: bigint =
  452312848583266388373324160190187140051835877600158453279131187532666397056n;
const maturity = 1755734400n;

async function executeZapOpenAndClose() {
  try {
    const account = walletClient?.account.address as Address;
    console.log("[START] Account:", account);

    // Get initial open long details
    const beforeDetails = await readPool.getOpenLongDetails({
      account,
      assetId,
      options: { block: "latest" },
    });
    console.log("openLongDetails BEFORE openLong:", beforeDetails);

    // Open Long
    const { result, request } = await publicClient.simulateContract({
      abi: writePool.contract.abi,
      address: poolAddress,
      chain: publicClient.chain,
      functionName: "openLong",
      account,
      gas: 16125042n,
      args: [
        BigInt(2e18), // 2 base token
        1n,
        1n,
        {
          asBase: true,
          destination: account,
          extraData: "0x",
        },
      ],
    });

    const openTxHash = await walletClient?.writeContract({
      ...request,
    });
    if (!openTxHash) throw new Error("No open transaction hash received");
    console.log("Open Long tx hash:", openTxHash);

    const txReceipt = await publicClient.waitForTransactionReceipt({
      hash: openTxHash,
    });
    await drift.cache.clear();

    if (!txReceipt) throw new Error("No open transaction receipt received");
    if (txReceipt.status !== "success") {
      console.error("Open Transaction failed:", txReceipt);
      throw new Error("Open Transaction failed");
    }
    console.log("Open tx receipt status:", txReceipt.status);

    // Get open long details after opening
    const afterDetails = await readPool.getOpenLongDetails({
      account,
      assetId,
    });
    console.log("openLongDetails AFTER openLong:", afterDetails);

    // Approve zap (auxiliary) contract to manage the long position
    const approvalReceipt = await writePool.contract.write("setApproval", {
      amount: maxInt256,
      tokenID: assetId,
      operator: zapsConfig.address,
    });
    console.log("Approval tx hash:", approvalReceipt);

    // Simulate closeLong to preview base amount out
    const { result: previewBaseAmountOut } =
      await publicClient.simulateContract({
        abi: writePool.contract.abi,
        address: poolAddress,
        chain: publicClient.chain,
        functionName: "closeLong",
        account,
        args: [
          maturity,
          BigInt(1e18), // 1 base token (example)
          1n,
          {
            asBase: true,
            destination: account,
            extraData: "0x",
          },
        ],
      });
    // console.log("Preview base out (raw):", previewBaseAmountOut);
    console.log(
      "Preview base out (formatted):",
      fixed(previewBaseAmountOut).format()
    );

    // Prepare zap swap parameters
    const blockData = await publicClient.getBlock();
    const deadline = blockData.timestamp + 60n;
    const swapPath = encodePacked(
      ["address", "uint24", "address"],
      [
        "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
        100, // fee tier
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
      ]
    );

    const swapTx = await walletClient
      ?.writeContract({
        abi: zapAbi,
        chain: publicClient.chain,
        address: zapsConfig.address,
        functionName: "closeLongZap",
        gas: 16125042n,
        args: [
          poolAddress,
          maturity,
          BigInt(1e18), // 1 base token
          1n,
          {
            destination: zapsConfig.address,
            asBase: true,
            extraData: "0x",
          },
          {
            amountIn: previewBaseAmountOut,
            amountOutMinimum: 1n,
            deadline,
            path: swapPath,
            recipient: account,
          },
          false,
        ],
      })
      .catch((err) => {
        console.error("closeLongZap failed:", err);
        throw err;
      });
    if (!swapTx) throw new Error("No close position transaction hash received");
    console.log("closeLongZap tx hash:", swapTx);

    const receipt = await publicClient.waitForTransactionReceipt({
      hash: swapTx,
    });
    await drift.cache.clear();

    const openLongDetailsAfterZap = await readPool.getOpenLongDetails({
      account,
      assetId,
    });
    console.log("openLongDetails AFTER zap close:", openLongDetailsAfterZap);

    return txReceipt;
  } catch (error) {
    console.error("Failed to execute zap open/close:", error);
    throw error;
  }
}

async function main() {
  // await executeZapOpenAndClose();
  await fetchSwapPath();
}

main().catch(console.error);
