import { ERC20Mintable } from "@delvtech/hyperdrive-artifacts/ERC20Mintable";
import { command } from "clide-js";
import { Address, parseUnits } from "viem";
import { adminOption } from "../../common-options/admin.js";
import { competitionModeOption } from "../../common-options/competition-mode.js";
import { maxMintAmountOption } from "../../common-options/max-mint-amount.js";
import { DeployData } from "../deploy.js";

export default command({
  description:
    "Deploy an ERC20Mintable contract, an ERC20 token with added mint and burn functions.",

  options: {
    name: {
      alias: ["n"],
      description: "The name of the token",
      type: "string",
      default: "Mintable Token",
    },
    symbol: {
      description: "The symbol of the token",
      type: "string",
      default: "MINT",
    },
    decimals: {
      description: "The number of decimals the token uses",
      type: "number",
      default: 18,
    },
    competition: competitionModeOption,
    admin: adminOption,
    max: maxMintAmountOption,
  },

  handler: async ({ data, options, next }) => {
    const { account, deployer } = data as DeployData;

    const name = await options.name({
      prompt: "Enter token name",
    });

    const symbol = await options.symbol({
      prompt: "Enter token symbol",
    });

    const decimals = await options.decimals({
      prompt: "Enter token decimals",
    });

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
      name: "ERC20Mintable",
      abi: ERC20Mintable.abi,
      bytecode: ERC20Mintable.bytecode,
      args: {
        name,
        symbol,
        decimals,
        admin: (admin || account.address) as Address,
        isCompetitionMode_: isCompetitionMode,
        maxMintAmount_: BigInt(parseUnits(max, decimals)),
      },
    });

    next(deployedContract);
  },
});
