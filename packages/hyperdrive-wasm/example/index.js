import * as hyperdriveWasm from "@delvtech/hyperdrive-wasm";

const ZERO_ADDRESS = "0x".padEnd(42, "0");
const MAX_U256 = "0x".padEnd(66, "F");
const MAX_BUDGET = BigInt(MAX_U256).toString();

const examplePoolInfo = {
  shareReserves: "39605393550422258379839",
  shareAdjustment: "0",
  zombieBaseProceeds: "0",
  zombieShareReserves: "0",
  bondReserves: "216240033593466292652040",
  lpTotalSupply: "29083740224819862157755",
  vaultSharePrice: "1000315442100140342",
  sharePrice: "1000000000000000000",
  longsOutstanding: "23368466217594253645760",
  longAverageMaturityTime: "1713916800000000000000000000",
  shortsOutstanding: "12829000000000000000000",
  shortAverageMaturityTime: "1713916800000000000000000000",
  withdrawalSharesReadyToWithdraw: "0",
  withdrawalSharesProceeds: "0",
  lpSharePrice: "1000652907614394176",
  longExposure: "10539466217594253645760",
};
const examplePoolConfig = {
  baseToken: ZERO_ADDRESS,
  governance: ZERO_ADDRESS,
  feeCollector: ZERO_ADDRESS,
  fees: {
    curve: "10000000000000000",
    flat: "19178082191780",
    governanceLP: "150000000000000000",
    governanceZombie: "30000000000000000",
  },
  initialVaultSharePrice: "1000000000000000000",
  minimumShareReserves: "10000000000000000000",
  minimumTransactionAmount: "1000000000000000",
  timeStretch: "1746050381163618",
  positionDuration: "604800",
  checkpointDuration: "1209600",
  linkerCodeHash: "0x".padEnd(66, "0"),
  linkerFactory: ZERO_ADDRESS,
  sweepCollector: ZERO_ADDRESS,
  vaultSharesToken: ZERO_ADDRESS,
};

async function main() {
  hyperdriveWasm.initSync(hyperdriveWasm.wasmBuffer);

  const spotRate = hyperdriveWasm.spotRate(examplePoolInfo, examplePoolConfig);
  console.log("spotRate:", spotRate);

  const maxLong = hyperdriveWasm.maxLong(
    examplePoolInfo,
    examplePoolConfig,
    MAX_BUDGET,
    "90844806244066488",
  );
  console.log("maxLong:", maxLong);

  const baseForMaxLong = hyperdriveWasm.calcOpenLong(
    examplePoolInfo,
    examplePoolConfig,
    maxLong,
  );
  console.log("baseForMaxLong:", baseForMaxLong);

  const spotPrice = hyperdriveWasm.spotPrice(
    examplePoolInfo,
    examplePoolConfig,
  );
  console.log("spotPrice:", spotPrice);

  const shortAmount = 10_000n * 10n ** 18n;
  const openShortPreview = hyperdriveWasm.calcOpenShort(
    examplePoolInfo,
    examplePoolConfig,
    shortAmount.toString(),
    examplePoolInfo.vaultSharePrice,
  );
  console.log("openShortPreview", openShortPreview);

  const feeArgs = [
    examplePoolInfo,
    examplePoolConfig,
    shortAmount.toString(),
    examplePoolConfig.positionDuration.toString(),
    examplePoolInfo.shortAverageMaturityTime.toString(),
  ];
  const closeShortCurveFee = hyperdriveWasm.closeShortCurveFee(...feeArgs);
  console.log("closeShortCurveFee:", closeShortCurveFee);

  const closeShortFlatFee = hyperdriveWasm.closeShortFlatFee(...feeArgs);
  console.log("closeShortFlatFee:", closeShortFlatFee);

  const openShortCurveFee = hyperdriveWasm.openShortCurveFee(...feeArgs);
  console.log("openShortCurveFee:", openShortCurveFee);

  const lpShares = hyperdriveWasm.calcAddLiquidity(
    examplePoolInfo,
    examplePoolConfig,
    examplePoolInfo.shortAverageMaturityTime,
    shortAmount.toString(),
  );
  console.log("lpShares:", lpShares);
  console.log('earned lp share price:', Number(shortAmount) / parseInt(lpShares))
}

main();
