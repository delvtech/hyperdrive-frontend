import { ERC20Mintable } from "@delvtech/hyperdrive-artifacts/ERC20Mintable";
import { command } from "clide-js";
import signale from "signale";
import { Address, parseUnits } from "viem";
import { deployContract } from "../../utils/deployContract.js";
import { DeployOptions } from "../deploy.js";

export default command({
  description:
    "Deploy an ERC20Mintable contract. An ERC20 token with added mint and burn functions.",

  options: {
    name: {
      description: "The name of the token",
      type: "string",
      required: true,
      default: "Base Token",
    },
    symbol: {
      description: "The symbol of the token",
      type: "string",
      required: true,
      default: "BASE",
    },
    decimals: {
      description: "The number of decimals the token uses",
      type: "number",
      required: true,
      default: 18,
    },
    admin: {
      description:
        "The address of the contract owner. When in competition mode, only the owner can call the mint and burn functions.",
      type: "string",
    },
    competition: {
      alias: ["competition-mode"],
      description:
        "Enable competition mode. This will restrict mint and burn functions to the contract owner.",
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
    const { account, chain, rpcUrl, walletKey } = data as DeployOptions;

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
        : undefined,
    });

    const max = await options.max();

    signale.pending("Deploying ERC20Mintable contract...");

    const deployedContract = await deployContract({
      abi: ERC20Mintable.abi,
      bytecode: ERC20Mintable.bytecode.object,
      account,
      rpcUrl,
      chain,
      args: [
        name,
        symbol,
        decimals,
        (admin || account.address) as Address,
        isCompetitionMode,
        BigInt(parseUnits(max, decimals)),
      ],
      onSubmitted: (txHash) => {
        signale.pending(`ERC20Mintable deployment tx submitted: ${txHash}`);
      },
    });

    signale.success(
      `ERC20Mintable contract deployed at ${deployedContract.address}`,
    );
  },
});
