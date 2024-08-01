import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  findYieldSourceHyperdrives,
  sepoliaAppConfig,
} from "@hyperdrive/appconfig";
import { formatEther, maxUint256 } from "viem";
import { publicClient } from "../client";

const makerDeployments = findYieldSourceHyperdrives({
  appConfig: sepoliaAppConfig,
  yieldSourceId: "maker",
});

const hyperdrive = new ReadHyperdrive({
  address: makerDeployments[0].address,
  publicClient,
});

// const info = await hyperdrive.getPoolInfo();
// const rate = await hyperdrive.getFixedApr();

// console.log(`Current pool info for ${hyperdrive.address}:\n`, info);
// console.log(`Current Fixed Rate: ${formatEther(rate)}`);

const maxBonds = await hyperdrive.getMaxShort({
  budget: maxUint256,
});
console.log(
  "Given infinite budget, the max bonds you can short is ",
  formatEther(maxBonds.maxBondsOut),
  " which will actually cost ",
  formatEther(maxBonds.maxBaseIn),
  " base tokens",
);

const maxBudget = await hyperdrive.previewOpenShort({
  amountOfBondsToShort: maxBonds.maxBondsOut,
  asBase: true,
});

console.log(
  `This is confirmed if you take the max short and calculate the traderDeposit via "previewOpenShort". `,
  `If you try to short ${formatEther(maxBonds.maxBondsOut)} bonds, it will cost you ${formatEther(maxBudget.traderDeposit)} base tokens`,
);

const estimatedBondsOut = await hyperdrive.getMaxShort({
  budget: maxBonds.maxBaseIn,
});
console.log(
  `However, if you specify the budget (${formatEther(maxBonds.maxBaseIn)}) as the max base in, you get significantly fewer bonds out`,
  formatEther(estimatedBondsOut.maxBondsOut),
);
