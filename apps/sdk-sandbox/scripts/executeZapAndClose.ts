import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { fixed } from "@delvtech/fixed-point-wasm";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import {
  ReadHyperdrive,
  ReadWriteHyperdrive,
  zapAbi,
} from "@delvtech/hyperdrive-js";
import { Address, erc20Abi } from "viem";
import { publicClient, walletClient } from "../client";

const zapsConfig = appConfig.zaps[707];
const drift = new Drift(viemAdapter({ publicClient, walletClient }));

const poolAddress = "0x324395D5d835F84a02A75Aa26814f6fD22F25698";
const earliestBlock = 20180617n;
const usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

// SAMPLE ASSET ID AND MATURITY
const assetId: bigint =
  452312848583266388373324160190187140051835877600158453279131187532667520256n;
const maturity = 1756857600n;

const defaultOpenLongAmount = BigInt(20e18);
const defaultCloseLongAmount = BigInt(50e18);

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

const zapBondsBalance = await readPool.contract.read("balanceOf", {
  owner: zapsConfig.address,
  tokenId: assetId,
});
console.log("zapsBondBalance", zapBondsBalance);

const zapsUsdcBalance = await publicClient.readContract({
  address: usdcAddress,
  abi: erc20Abi,
  functionName: "balanceOf",
  args: [zapsConfig.address],
});
console.log("zapsUsdcBalance", zapsUsdcBalance);

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

    const beforeBalanceOfBonds = await readPool.contract.read("balanceOf", {
      owner: account,
      tokenId: assetId,
    });
    console.log("beforeBalanceOfBonds", fixed(beforeBalanceOfBonds).format());

    const beforeBalanceOfUsdc = await publicClient.readContract({
      address: usdcAddress,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [account],
    });
    console.log("beforeBalanceOfUsdc", fixed(beforeBalanceOfUsdc, 6).format());
    // Open Long
    // const { result, request } = await publicClient.simulateContract({
    //   abi: writePool.contract.abi,
    //   address: poolAddress,
    //   chain: publicClient.chain,
    //   functionName: "openLong",
    //   account,
    //   gas: 16125042n,
    //   args: [
    //     defaultOpenLongAmount, // 20 base token
    //     1n,
    //     1n,
    //     {
    //       asBase: true,
    //       destination: account,
    //       extraData: "0x",
    //     },
    //   ],
    // });

    // const openTxHash = await walletClient?.writeContract({
    //   ...request,
    // });
    // if (!openTxHash) throw new Error("No open transaction hash received");
    // console.log("Open Long tx hash:", openTxHash);

    // const txReceipt = await publicClient.waitForTransactionReceipt({
    //   hash: openTxHash,
    // });
    // await drift.cache.clear();

    // if (!txReceipt) throw new Error("No open transaction receipt received");
    // if (txReceipt.status !== "success") {
    //   console.error("Open Transaction failed:", txReceipt);
    //   throw new Error("Open Transaction failed");
    // }
    // console.log("Open tx receipt status:", txReceipt.status);

    // // Get open long details after opening
    // const afterDetails = await readPool.getOpenLongDetails({
    //   account,
    //   assetId,
    // });

    // await drift.cache.clear();
    // const afterBalanceOfBonds = await readPool.contract.read("balanceOf", {
    //   owner: account,
    //   tokenId: assetId,
    // });
    // console.log("afterBalanceOfBonds", fixed(afterBalanceOfBonds).format());

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
    const approvalReceipt = await writePool.contract.write(
      "setApprovalForAll",
      {
        operator: zapsConfig.address,
        approved: true,
      },
    );

    await publicClient.waitForTransactionReceipt({
      hash: approvalReceipt,
    });

    const allowanceOfZapsToSpend = await publicClient.readContract({
      address: poolAddress,
      abi: poolContract.abi,
      functionName: "isApprovedForAll",
      args: [account, zapsConfig.address],
    });
    console.log("allowanceOfZapsToSpend", allowanceOfZapsToSpend);

    // const approvalReceipt = await walletClient?.writeContract({
    //   abi: writePool.contract.abi,
    //   address: poolAddress,
    //   functionName: "setApproval",
    //   args: [maxInt256, assetId, zapsConfig.address],
    // });

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
          defaultCloseLongAmount, // 10 base token (example)
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

    const simulateReadNameFromZap = await publicClient.readContract({
      address: zapsConfig.address,
      abi: zapAbi,
      functionName: "name",
    });
    console.log("simulateReadNameFromZap", simulateReadNameFromZap);
    const swapTx = await walletClient
      ?.writeContract({
        abi: zapAbi,
        chain: publicClient.chain,
        address: zapsConfig.address,
        functionName: "closeLongZap",
        gas: 20000000n, // Increased gas limit
        args: [
          poolAddress,
          maturity,
          defaultCloseLongAmount, // 10 base token
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
    const afterZapBalanceOfBonds = await readPool.contract.read("balanceOf", {
      owner: account,
      tokenId: assetId,
    });
    console.log(
      "afterZapBalanceOfBonds",
      fixed(afterZapBalanceOfBonds).format(),
    );

    const usdcBalanceAfterZap = await publicClient.readContract({
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [account],
    });
    console.log("usdcBalanceAfterZap", fixed(usdcBalanceAfterZap, 6).format());

    return receipt;
  } catch (error) {
    console.error("Failed to execute zap open/close:", error);
    throw error;
  }
}
