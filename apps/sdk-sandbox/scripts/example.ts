import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { fixed } from "@delvtech/fixed-point-wasm";
import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { ReadWriteHyperdrive, zapAbi } from "@delvtech/hyperdrive-js";
import { Address, encodePacked, maxInt256 } from "viem";
import { publicClient, walletClient } from "../client";

const zapsConfig = appConfig.zaps[707];
const drift = new Drift(viemAdapter({ publicClient, walletClient }));

const pool = new ReadWriteHyperdrive({
  address: "0x324395D5d835F84a02A75Aa26814f6fD22F25698",
  drift,
  earliestBlock: 20180617n,
});

const poolContract = drift.contract({
  abi: pool.contract.abi,
  address: pool.address,
});

const zapContract = await drift.contract({
  address: zapsConfig.address,
  abi: zapAbi,
});

const assetId: bigint =
  452312848583266388373324160190187140051835877600158453279131187532665101056n;
const maturity = 1754438400n;
async function openLongPosition() {
  try {
    const beforeDetails = await pool.getOpenLongDetails({
      account: walletClient?.account.address as Address,
      assetId,
      options: { block: "latest" },
    });
    console.log("openLongDetails before", beforeDetails);

    // // Open with Viem still reverts.
    const { result, request } = await publicClient.simulateContract({
      abi: pool.contract.abi,
      address: pool.address,
      functionName: "openLong",
      account: walletClient?.account.address as Address,
      // gas: BigInt(6825329375n),
      gas: 16125042n,

      args: [
        BigInt(3e18),
        1n,
        1n,
        {
          asBase: true,
          destination: walletClient?.account.address as Address,
          extraData: "0x",
        },
      ],
    });
    // console.log("openLong simulate result:", result);
    const openTxHash = await walletClient?.writeContract(request);
    if (!openTxHash) {
      throw new Error("No open transaction hash received");
    }
    const txReceipt = await publicClient.waitForTransactionReceipt({
      hash: openTxHash,
    });
    await drift.cache.clear();

    // const txReceipt: TransactionReceipt | undefined = await new Promise(
    //   async (resolve, reject) => {
    //     const hash = await pool
    //       .openLong({
    //         args: {
    //           amount: BigInt(3e18), // 3 base tokens (DAI)
    //           asBase: true,
    //           destination: walletClient?.account.address as Address,
    //           extraData: "0x",
    //           minBondsOut: 1n, // Minimum bonds to accept
    //           minVaultSharePrice: 1n,
    //         },
    //         options: {
    //           onMined: async (receipt) => {
    //             pool.contract.cache.clear();
    //             resolve(receipt);
    //           },
    //         },
    //       })
    //       .catch((err) => {
    //         reject(err);
    //       });

    //     console.log(`Open position tx hash: ${hash}`);
    //   },
    // );

    if (!txReceipt) {
      throw new Error("No open transaction receipt received");
    }

    console.log("txReceipt status", txReceipt.status);

    if (txReceipt.status !== "success") {
      console.error("Open Transaction failed:", txReceipt);
      throw new Error("Open Transaction failed");
    }

    const afterDetails = await pool.getOpenLongDetails({
      account: walletClient?.account.address as Address,
      assetId,
    });
    console.log("openLongDetails after", afterDetails);

    // Close Long Position via Zap
    const approvalReceipt = await poolContract.write("setApproval", {
      amount: maxInt256,
      tokenID: assetId,
      operator: zapsConfig.address,
    });

    console.log(`Approval tx hash: ${approvalReceipt}`);

    // Get the amount of base out if closing directly
    const { result: previewBaseAmountOut } =
      await publicClient.simulateContract({
        abi: pool.contract.abi,
        address: pool.address,
        functionName: "closeLong",
        account: walletClient?.account.address as Address,
        args: [
          maturity,
          BigInt(4e18), // 4 base tokens (DAI)
          1n,
          {
            asBase: true,
            destination: walletClient?.account.address as Address,
            extraData: "0x",
          },
        ],
      });

    console.log(`Preview base out: ${fixed(previewBaseAmountOut).format()}`);

    // Execute the zap close
    const swapTx = await walletClient
      ?.writeContract({
        abi: zapAbi,
        address: zapsConfig.address,
        functionName: "closeLongZap",
        gas: 16125042n,
        args: [
          pool.address,
          maturity,
          BigInt(4e18), // 4 base tokens (DAI)
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
            recipient: walletClient?.account.address as `0x${string}`,
          },
          false,
        ],
      })
      .catch((err) => {
        console.error("closeLongZap failed", err);
        throw err;
      });

    if (!swapTx) {
      throw new Error("No close position transaction hash received");
    }

    const receipt = await publicClient.waitForTransactionReceipt({
      hash: swapTx,
    });
    await drift.cache.clear();

    const openLongDetails = await pool.getOpenLongDetails({
      account: walletClient?.account.address as Address,
      assetId,
    });

    console.log("openLongDetails after zap close", openLongDetails);

    return txReceipt;
  } catch (error) {
    console.error("Failed to open long position:", error);
    throw error;
  }
}

async function closeAllPositions() {
  const block = await publicClient.getBlock();

  // Get all open positions
  // Add this section instead of querying positions
  const manualPositions = [
    {
      assetId:
        452312848583266388373324160190187140051835877600158453279131187532664323456n,
      maturity: 1753660800n,
      bondAmount: 93219890613508425843n, // 100 bonds (adjust this to your actual position size)
    },
    // Add other positions manually here
  ];

  // Then process them:
  for (const position of manualPositions) {
    try {
      console.log("\nProcessing manual position:", position);

      // Approve zaps to spend this specific long position
      const approvalReceipt = await poolContract.write("setApproval", {
        amount: maxInt256,
        tokenID: position.assetId,
        operator: zapsConfig.address,
      });
      console.log(`Approval tx hash: ${approvalReceipt}`);

      // Get the amount of base out if closing directly
      const { result: previewBaseAmountOut } =
        await publicClient.simulateContract({
          abi: pool.contract.abi,
          address: pool.address,
          functionName: "closeLong",
          account: walletClient?.account.address as Address,
          args: [
            position.maturity,
            position.bondAmount,
            1n,
            {
              asBase: true,
              destination: walletClient?.account.address as Address,
              extraData: "0x",
            },
          ],
        });

      console.log(`Preview base out: ${fixed(previewBaseAmountOut).format()}`);

      // Execute the zap close
      const swapTx = await walletClient?.writeContract({
        abi: zapAbi,
        address: zapsConfig.address,
        functionName: "closeLongZap",
        args: [
          pool.address,
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
                "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
                100, // 0.01% fee tier
                "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
              ],
            ),
            recipient: walletClient?.account.address as `0x${string}`,
          },
          false,
        ],
      });

      const openLongDetails = await pool.getOpenLongDetails({
        account: walletClient?.account.address as Address,
        assetId,
      });
      console.log("openLongDetails", openLongDetails);
      console.log(`Closed position tx hash: ${swapTx}`);
    } catch (error) {
      console.error(`Failed to close position ${position.assetId}:`, error);
    }
  }
}

// Main execution flow
async function main() {
  // Enable/disable these function calls as needed
  await openLongPosition(); // Turn this off when not needed
  // await closeAllPositions(); // Turn this off when not needed
}

main().catch(console.error);

/*
Restarting 'scripts/example.ts'
transfersReceived 96
openLongDetails before {
  assetId: 452312848583266388373324160190187140051835877600158453279131187532665101056n,
  maturity: 1754438400n,
  baseAmountPaid: 118000000000000000000n,
  bondAmount: 121879719632238431723n
}
txReceipt status success
transfersReceived 97
openLongDetails after {
  assetId: 452312848583266388373324160190187140051835877600158453279131187532665101056n,
  maturity: 1754438400n,
  baseAmountPaid: 121000000000000000000n,
  bondAmount: 124977388484359446326n
}
Approval tx hash: 0x19ad6bd981198c208eec628f7bf9b446cbf62b075c49a93a3a3006131fc93d7d
Preview base out: 3.871364705390474
transfersReceived 97
openLongDetails after zap close {
  assetId: 452312848583266388373324160190187140051835877600158453279131187532665101056n,
  maturity: 1754438400n,
  baseAmountPaid: 121000000000000000000n,
  bondAmount: 124977388484359446326n
}
*/
