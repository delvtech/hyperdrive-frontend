import { MockERC4626 } from "@delvtech/hyperdrive-artifacts/MockERC4626";
import { command } from "clide-js";
import { Address, parseUnits } from "viem";
import { adminOption } from "../../common-options/admin.js";
import { competitionModeOption } from "../../common-options/competition-mode.js";
import { maxMintAmountOption } from "../../common-options/max-mint-amount.js";
import { DeployData } from "../deploy.js";

export default command({
  description:
    "Deploy a MockERC4626 contract, a mock yield source that accrues interest at a specified rate. Every stateful interaction will accrue interest, so the interest accrual will approximate continuous compounding as the contract is called more frequently.",

  options: {
    token: {
      alias: ["erc20mintable"],
      description: "The address of the ERC20Mintable contract to use.",
      type: "string",
      required: true,
    },
    name: {
      description: "The name of the shares token.",
      type: "string",
      default: "Shares Token",
    },
    symbol: {
      description: "The symbol of the shares token.",
      type: "string",
      default: "sBASE",
    },
    rate: {
      alias: ["initial-rate"],
      description: "The initial interest rate.",
      type: "string",
      default: "0.05",
    },
    competition: competitionModeOption,
    admin: adminOption,
    max: maxMintAmountOption,
  },

  handler: async ({ data, options, next }) => {
    const { account, deployer } = data as DeployData;

    const token = await options.token({
      prompt: "Enter ERC20Mintable address",
    });

    const name = await options.name({
      prompt: "Enter shares token name",
    });

    const symbol = await options.symbol({
      prompt: "Enter shares token symbol",
    });

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
      name: "MockERC4626",
      abi: MockERC4626.abi,
      bytecode: MockERC4626.bytecode,
      args: {
        _asset: token as Address,
        _name: name,
        _symbol: symbol,
        _initialRate: BigInt(parseUnits(rate.toString(), 18)),
        _admin: (admin || account.address) as Address,
        _isCompetitionMode: isCompetitionMode,
        _maxMintAmount: BigInt(parseUnits(max, 18)),
      },
    });

    next(deployedContract);
  },
});
