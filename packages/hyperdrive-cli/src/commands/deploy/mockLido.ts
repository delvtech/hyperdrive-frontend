import { MockLido } from "@delvtech/hyperdrive-artifacts/MockLido";
import { command } from "clide-js";
import { Address, parseUnits } from "viem";
import { adminOption } from "../../common-options/admin.js";
import { competitionModeOption } from "../../common-options/competition-mode.js";
import { maxMintAmountOption } from "../../common-options/max-mint-amount.js";
import { DeployData } from "../deploy.js";

export default command({
  description:
    "Deploy a MockLido contract, a mock yield source that accrues interest at a specified rate. Every stateful interaction will accrue interest, so the interest accrual will approximate continuous compounding as the contract is called more frequently.",

  options: {
    rate: {
      alias: ["initial-rate"],
      description: "The initial interest rate.",
      type: "string",
      default: "0.035",
    },
    competition: competitionModeOption,
    admin: adminOption,
    max: maxMintAmountOption,
  },

  handler: async ({ data, options, next }) => {
    const { deployer, account } = data as DeployData;

    const rate = await options.rate();

    const isCompetitionMode = await options.competition({
      prompt: "Enable competition mode?",
    });

    const admin = await options.admin({
      prompt: isCompetitionMode
        ? {
            message: "Enter admin address",
            initial: account.address,
          }
        : // If competition mode is disabled, the admin address has no effect,
          // so we don't need to prompt for it.
          undefined,
    });

    const max = await options.max();

    const deployedContract = await deployer.deploy({
      name: "MockLido",
      abi: MockLido.abi,
      bytecode: MockLido.bytecode,
      args: {
        _initialRate: BigInt(parseUnits(rate, 18)),
        _admin: (admin || account.address) as Address,
        _isCompetitionMode: isCompetitionMode,
        _maxMintAmount: BigInt(parseUnits(max, 18)),
      },
    });

    next(deployedContract);
  },
});
