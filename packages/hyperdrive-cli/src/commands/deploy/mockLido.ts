import { MockLido } from "@delvtech/hyperdrive-artifacts/MockLido";
import { command } from "clide-js";
import signale from "signale";
import { Address, parseUnits } from "viem";
import { deployContract } from "../../utils/deployContract.js";
import { DeployOptions } from "../deploy.js";

export default command({
  description:
    "Deploy a MockLido contract, a mock yield source that accrues interest at a specified rate. Every stateful interaction will accrue interest, so the interest accrual will approximate continuous compounding as the contract is called more frequently.",

  options: {
    rate: {
      alias: ["initial-rate"],
      description: "The initial interest rate. (In token units, not wei)",
      type: "string",
      required: true,
      default: "0.05",
    },
    admin: {
      description:
        "The address of the contract owner. When in competition mode, only the owner can call the mint, burn, and setRate functions.",
      type: "string",
    },
    competition: {
      alias: ["competition-mode"],
      description:
        "Enable competition mode. This will restrict mint, burn, and setRate functions to the contract owner.",
      type: "boolean",
      default: false,
    },
    max: {
      alias: ["max-mint-amount"],
      description:
        "The maximum amount that can be minted at once. (In token units, not wei)",
      type: "string",
      default: "1000000",
    },
  },

  handler: async ({ data, options }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

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
        : undefined,
    });

    const max = await options.max();

    signale.pending("Deploying MockLido...");

    const deployedContract = await deployContract({
      abi: MockLido.abi,
      bytecode: MockLido.bytecode.object,
      account,
      rpcUrl,
      chain,
      args: [
        BigInt(parseUnits(rate, 18)),
        (admin || account.address) as Address,
        isCompetitionMode,
        BigInt(parseUnits(max, 18)),
      ],
      onSubmitted: (txHash) => {
        signale.pending(`MockLido deployment tx submitted: ${txHash}`);
      },
    });

    signale.success(`MockLido contract deployed: ${deployedContract.address}`);
  },
});
