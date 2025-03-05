import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { fixed } from "@delvtech/fixed-point-wasm";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import {
  ReadHyperdrive,
  ReadWriteHyperdrive,
  zapAbi,
} from "@delvtech/hyperdrive-js";
import { Address, erc20Abi, maxInt256 } from "viem";
import { publicClient, walletClient } from "../client";

const zapsConfig = appConfig.zaps[707];
const drift = new Drift(viemAdapter({ publicClient, walletClient }));

const poolAddress = "0x324395D5d835F84a02A75Aa26814f6fD22F25698";
const earliestBlock = 20180617n;

// SAMPLE ASSET ID AND MATURITY
const assetId: bigint =
  452312848583266388373324160190187140051835877600158453279131187532667520256n;
const maturity = 1756857600n;

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

export async function executeZapOpenAndClose(swapPath: `0x${string}`) {
  try {
    const account = walletClient?.account.address as Address;
    console.log("[START] Account:", account);

    // Get initial open long details
    const beforeDetails = await readPool.getOpenLongDetails({
      account,
      assetId,
      options: { block: "latest" },
    });
    // console.log("openLongDetails BEFORE openLong:", beforeDetails);

    const beforeBalanceOf = await readPool.contract.read("balanceOf", {
      owner: account,
      tokenId: assetId,
    });
    console.log("beforeBalanceOf", fixed(beforeBalanceOf).format());

    // Open Long
    const { result, request } = await publicClient.simulateContract({
      abi: writePool.contract.abi,
      address: poolAddress,
      chain: publicClient.chain,
      functionName: "openLong",
      account,
      gas: 16125042n,
      args: [
        BigInt(200e18), // 200 base token
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

    await drift.cache.clear();
    const afterBalanceOf = await readPool.contract.read("balanceOf", {
      owner: account,
      tokenId: assetId,
    });
    console.log("afterBalanceOf", fixed(afterBalanceOf).format());

    // Check the USDC Balance here
    const usdcBalanceOf = await publicClient.readContract({
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [account],
    });
    console.log("usdcBalance", fixed(usdcBalanceOf, 6).format());

    // console.log("openLongDetails AFTER openLong:", afterDetails);

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
          BigInt(100e18), // 100 base token (example)
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
      fixed(previewBaseAmountOut).format(),
    );

    // Prepare zap swap parameters
    const blockData = await publicClient.getBlock();
    const deadline = blockData.timestamp + 60n;

    const simulateSwap = await publicClient.simulateContract({
      abi: zapAbi,
      address: zapsConfig.address,
      account: account,
      functionName: "closeLongZap",
      gas: 16125042n,
      args: [
        poolAddress,
        maturity,
        BigInt(100e18),
        1n,
        {
          destination: zapsConfig.address,
          asBase: true,
          extraData: "0x",
        },
        {
          path: swapPath,
          recipient: account,
          deadline,
          amountIn: previewBaseAmountOut,
          amountOutMinimum: 1n,
        },
        false,
      ],
    });

    console.log("simulateSwap", simulateSwap);
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
          BigInt(100e18), // 100 base token
          1n,
          {
            // hyperdriver parameters
            destination: zapsConfig.address,
            asBase: true,
            extraData: "0x",
          },
          {
            // Swap parameters
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
    console.log("Receipt status after zap close:", receipt.status);
    await drift.cache.clear();

    // const openLongDetailsAfterZap = await readPool.getOpenLongDetails({
    //   account,
    //   assetId,
    // });
    // console.log("openLongDetails AFTER zap close:", openLongDetailsAfterZap);

    await drift.cache.clear();
    const afterZapBalanceOf = await readPool.contract.read("balanceOf", {
      owner: account,
      tokenId: assetId,
    });
    console.log("afterZapBalanceOf", fixed(afterZapBalanceOf).format());

    const usdcBalanceAfterZap = await publicClient.readContract({
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [account],
    });
    console.log("usdcBalanceAfterZap", fixed(usdcBalanceAfterZap, 6).format());

    return txReceipt;
  } catch (error) {
    console.error("Failed to execute zap open/close:", error);
    throw error;
  }
}
