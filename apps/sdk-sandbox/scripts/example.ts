import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { fixed } from "@delvtech/fixed-point-wasm";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import {
  ReadHyperdrive,
  ReadWriteHyperdrive,
  zapAbi,
} from "@delvtech/hyperdrive-js";
import { Address, encodePacked, maxInt256 } from "viem";
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
  zapAddress: zapsConfig.address,
  earliestBlock,
});

const poolContract = drift.contract({
  abi: writePool.contract.abi,
  address: poolAddress,
});

// SAMPLE ASSET ID AND MATURITY
const assetId: bigint =
  452312848583266388373324160190187140051835877600158453279131187532665187456n;
const maturity = 1754524800n;

async function openLongPosition() {
  try {
    const account = walletClient?.account.address as Address;

    const beforeDetails = await readPool.getOpenLongDetails({
      account,
      assetId,
      options: { block: "latest" },
    });
    console.log("openLongDetails before:", beforeDetails);

    const { result, request } = await publicClient.simulateContract({
      abi: writePool.contract.abi,
      address: poolAddress,
      functionName: "openLong",
      account,
      gas: 16125042n,
      args: [
        BigInt(30e18), // 30 base tokens (DAI)
        1n,
        1n,
        {
          asBase: true,
          destination: account,
          extraData: "0x",
        },
      ],
    });

    const openTxHash = await walletClient?.writeContract(request);
    if (!openTxHash) throw new Error("No open transaction hash received");

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

    const afterDetails = await readPool.getOpenLongDetails({
      account,
      assetId,
    });
    console.log("openLongDetails after:", afterDetails);

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
        functionName: "closeLong",
        account,
        args: [
          maturity,
          BigInt(40e18), // 40 base tokens (DAI)
          1n,
          {
            asBase: true,
            destination: account,
            extraData: "0x",
          },
        ],
      });
    console.log("Preview base out:", fixed(previewBaseAmountOut).format());

    // Execute the zap close operation
    const swapTx = await walletClient
      ?.writeContract({
        abi: zapAbi,
        address: zapsConfig.address,
        functionName: "closeLongZap",
        gas: 16125042n,
        args: [
          poolAddress,
          maturity,
          BigInt(40e18),
          1n,
          {
            destination: zapsConfig.address,
            asBase: true,
            extraData: "0x",
          },
          {
            amountIn: previewBaseAmountOut,
            amountOutMinimum: 1n,
            deadline: (await publicClient.getBlock()).timestamp + 60n,
            path: encodePacked(
              ["address", "uint24", "address"],
              [
                "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
                100, // 0.01% fee tier
                "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
              ],
            ),
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

    const receipt = await publicClient.waitForTransactionReceipt({
      hash: swapTx,
    });
    await drift.cache.clear();

    const openLongDetailsAfterZap = await readPool.getOpenLongDetails({
      account,
      assetId,
    });
    console.log("openLongDetails after zap close:", openLongDetailsAfterZap);

    return txReceipt;
  } catch (error) {
    console.error("Failed to open long position:", error);
    throw error;
  }
}

async function closeAllPositions() {
  const account = walletClient?.account.address as Address;
  const block = await publicClient.getBlock();

  // Example: manually defined positions
  const manualPositions = [
    {
      assetId:
        452312848583266388373324160190187140051835877600158453279131187532664323456n,
      maturity: 1753660800n,
      bondAmount: 93219890613508425843n, // Example: 100 bonds
    },
    // Add more positions as needed
  ];

  for (const position of manualPositions) {
    try {
      console.log("\nProcessing position:", position);

      // Approve zap contract to manage the position
      const approvalReceipt = await poolContract.write("setApproval", {
        amount: maxInt256,
        tokenID: position.assetId,
        operator: zapsConfig.address,
      });
      console.log("Approval tx hash:", approvalReceipt);

      // Preview base out from closeLong
      const { result: previewBaseAmountOut } =
        await publicClient.simulateContract({
          abi: writePool.contract.abi,
          address: poolAddress,
          functionName: "closeLong",
          account,
          args: [
            position.maturity,
            position.bondAmount,
            1n,
            {
              asBase: true,
              destination: account,
              extraData: "0x",
            },
          ],
        });
      console.log("Preview base out:", fixed(previewBaseAmountOut).format());

      // Execute zap close for the position
      const swapTx = await walletClient?.writeContract({
        abi: zapAbi,
        address: zapsConfig.address,
        functionName: "closeLongZap",
        args: [
          poolAddress,
          position.maturity,
          position.bondAmount,
          1n,
          {
            destination: zapsConfig.address,
            asBase: true,
            extraData: "0x",
          },
          {
            amountIn: previewBaseAmountOut,
            amountOutMinimum: 1n,
            deadline: (await publicClient.getBlock()).timestamp + 60n,
            path: encodePacked(
              ["address", "uint24", "address"],
              [
                "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                100,
                "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              ],
            ),
            recipient: account,
          },
          false,
        ],
      });
      const openLongDetails = await writePool.getOpenLongDetails({
        account,
        assetId: position.assetId,
      });
      console.log("openLongDetails:", openLongDetails);
      console.log("Closed position tx hash:", swapTx);
    } catch (error) {
      console.error(`Failed to close position ${position.assetId}:`, error);
    }
  }
}

async function main() {
  // Uncomment the function call you need
  await openLongPosition();
  // await closeAllPositions();
}

main().catch(console.error);
