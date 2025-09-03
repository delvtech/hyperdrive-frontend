import { createDrift } from "@delvtech/drift";
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
const drift = createDrift({
  adapter: viemAdapter({ publicClient, walletClient }),
});

if (!drift.isReadWrite()) {
  throw new Error("No wallet client available");
}

const poolAddress = "0x324395D5d835F84a02A75Aa26814f6fD22F25698";
const epochBlock = 20180617n;
const usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const assetId: bigint =
  452312848583266388373324160190187140051835877600158453279131187532667606656n;
const maturity = 1756944000n;

const defaultOpenLongAmount = BigInt(20e18);
const defaultCloseLongAmount = BigInt(26e18);

const writePool = new ReadWriteHyperdrive({
  address: poolAddress,
  drift,
  epochBlock,
});

const readPool = new ReadHyperdrive({
  address: poolAddress,
  drift,
  zapContractAddress: zapsConfig.address,
  epochBlock,
});

const poolContract = drift.contract({
  abi: writePool.contract.abi,
  address: poolAddress,
});

export async function executeZapOpenAndClose(swapPath: `0x${string}`) {
  console.log("swapPath", swapPath);
  try {
    const account = walletClient?.account.address as Address;
    console.log("[START] Account:", account);

    // Log initial balances
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

    // Approve zap contract to manage the long position
    const approveAssetId = await writePool.contract.write("setApproval", {
      operator: zapsConfig.address,
      tokenID: assetId,
      amount: maxInt256,
    });
    await publicClient.waitForTransactionReceipt({ hash: approveAssetId });

    const revokeApproval = await writePool.contract.write("setApprovalForAll", {
      operator: zapsConfig.address,
      approved: false,
    });
    await publicClient.waitForTransactionReceipt({ hash: revokeApproval });
    console.log("Approval tx hash:", revokeApproval);

    // Preview closeLong base amount out
    const { result: previewBaseAmountOut } =
      await publicClient.simulateContract({
        abi: writePool.contract.abi,
        address: poolAddress,
        chain: publicClient.chain,
        functionName: "closeLong",
        account,
        args: [
          maturity,
          defaultCloseLongAmount,
          1n,
          {
            asBase: true,
            destination: account,
            extraData: "0x",
          },
        ],
      });
    console.log("Preview base out:", fixed(previewBaseAmountOut).format());

    // Prepare swap parameters
    const { timestamp } = await publicClient.getBlock();
    const deadline = timestamp + 60n;

    // Execute zap swap
    const swapTx = await walletClient?.writeContract({
      abi: zapAbi,
      chain: publicClient.chain,
      address: zapsConfig.address,
      functionName: "closeLongZap",
      gas: 20000000n,
      args: [
        poolAddress,
        maturity,
        defaultCloseLongAmount,
        0n,
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
    });
    if (!swapTx) throw new Error("No close position transaction hash received");
    console.log("closeLongZap tx hash:", swapTx);

    const receipt = await publicClient.waitForTransactionReceipt({
      hash: swapTx,
    });
    console.log("Receipt status after zap close:", receipt.status);

    await drift.cache.clear();

    // Log final balances
    const afterZapBalanceOfBonds = await readPool.contract.read("balanceOf", {
      owner: account,
      tokenId: assetId,
    });
    console.log(
      "afterZapBalanceOfBonds",
      fixed(afterZapBalanceOfBonds).format(),
    );

    const usdcBalanceAfterZap = await publicClient.readContract({
      address: usdcAddress,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [account],
    });
    console.log("usdcBalanceAfterZap", fixed(usdcBalanceAfterZap, 6).format());
  } catch (error) {
    console.error("Failed to execute zap open/close:", error);
    throw error;
  }
}
