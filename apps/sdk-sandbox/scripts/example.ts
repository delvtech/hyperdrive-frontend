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
});

const poolContract = drift.contract({
  abi: pool.contract.abi,
  address: pool.address,
});

const zapContract = await drift.contract({
  address: zapsConfig.address,
  abi: zapAbi,
});
const block = await publicClient.getBlock();
// Open a long
const txReceipt = await new Promise(async (resolve, reject) => {
  const receipt = await pool.openLong({
    args: {
      amount: BigInt(100e18),
      asBase: true,
      destination: walletClient?.account.address as Address,
      extraData: "0x",
      minBondsOut: 1n,
      minVaultSharePrice: 1n,
    },
    options: {
      onMined: async (receipt) => {
        resolve(receipt);
      },
    },
  });
});
// console.log("txReceipt", txReceipt);
// const events = await pool.contract.getEvents("OpenLong", {
//   fromBlock: block?.number,
//   toBlock: "latest",
// });
// Get the assetId and maturity of the long (assume it's the only long we have)
const positions = await pool.getOpenLongPositions({
  account: walletClient?.account.address as Address,
  options: { block: "latest" },
});
console.log("positions", positions);
// const [{ assetId, maturity: maturityTime, value: balanceOfBonds }] = positions;
// console.log("asssetId", assetId, maturityTime, balanceOfBonds);
const assetId =
  452312848583266388373324160190187140051835877600158453279131187532663977856n;
const maturityTime = 1753315200n;
// approve zaps to spend the long
const approvalReceipt = await poolContract.write("setApproval", {
  amount: maxInt256,
  tokenID: assetId,
  operator: zapsConfig.address,
});

// use the zap contract to close the long out to a different
const bondsToClose = BigInt(100e18);
// const bondsToClose = balanceOfBonds;
// get the amount of base out if you close all the bonds directly on hyperdrive
const { result: previewBaseAmountOut } = await publicClient.simulateContract({
  abi: pool.contract.abi,
  address: pool.address,
  functionName: "closeLong",
  account: walletClient?.account.address as Address,
  args: [
    maturityTime,
    bondsToClose,
    1n,
    {
      asBase: true,
      destination: walletClient?.account.address as Address,
      extraData: "0x",
    },
  ],
});
console.log("previewBaseAmountOut", fixed(previewBaseAmountOut).format());

try {
  const swap = await walletClient?.writeContract({
    abi: zapAbi,
    address: zapsConfig.address,
    functionName: "closeLongZap",
    args: [
      "0x324395D5d835F84a02A75Aa26814f6fD22F25698",
      maturityTime,
      // Temporarily set this to 100 Dai to test
      bondsToClose,
      1n,
      {
        destination: zapsConfig.address,
        asBase: true,
        extraData: "0x",
      },
      {
        // swap params
        amountIn: previewBaseAmountOut,
        amountOutMinimum: 1n,
        deadline: block?.timestamp + 60n,
        path: encodePacked(
          ["address", "uint24", "address"],
          [
            "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
            100,
            "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC - We need to ensure this is a valid pool with enough liquidity to facilitate the swap
          ],
        ),
        recipient: walletClient?.account.address as `0x${string}`,
      },
      false,
    ],
  });

  console.log(swap, "swap");
} catch (error) {
  console.log(error);
}

const kind = await pool.getKind();
const config = await pool.getPoolConfig();

// console.log(`
//   address: ${pool.address}
//   kind: ${kind}
//   baseToken: ${config.baseToken}
//   sharesToken: ${config.vaultSharesToken}
// `);

const AssetIdPrefix = {
  LP: 0n,
  Long: 1n,
  Short: 2n,
  WithdrawalShare: 3n,
} as const;

const maxU248 = 2n ** 248n - 1n;

function encodeAssetId(
  positionType: keyof typeof AssetIdPrefix,
  timestamp: bigint,
) {
  const prefix = AssetIdPrefix[positionType];
  // Check if timestamp is too large
  if (timestamp > maxU248) {
    throw new Error("InvalidTimestamp");
  }

  // Convert prefix to BigInt and shift left by 248 bits
  const shiftedPrefix = prefix << 248n;

  // Combine prefix and timestamp using bitwise OR
  const id = shiftedPrefix | timestamp;

  return BigInt(`0x${id.toString(16).padStart(64, "0")}`);
}
