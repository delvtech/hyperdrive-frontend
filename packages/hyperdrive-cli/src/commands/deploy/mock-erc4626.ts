import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable.js";
import { MockERC4626 } from "@hyperdrive/artifacts/dist/MockERC4626.js";
import { command } from "clide-js";
import signale from "signale";
import { DeployedContract, deployContract } from "src/utils/deployContract.js";
import {
  PrivateKeyAccount,
  createPublicClient,
  createWalletClient,
  http,
  parseUnits,
} from "viem";
import { Chain } from "viem/chains";
import { DeployOptions } from "../deploy.js";

export default command({
  description: "Deploy an MockERC4626 contract for use during testing",

  options: {
    t: {
      alias: ["token"],
      description: "The address of the MockERC4626 token contract",
      type: "string",
      required: true,
    },
    n: {
      alias: ["name"],
      description: "The name of the token",
      type: "string",
      required: true,
      default: "Delvnet Yield Source",
    },
    s: {
      alias: ["symbol"],
      description: "The symbol of the token",
      type: "string",
      required: true,
      default: "DELV",
    },
    i: {
      alias: ["rate", "initial-rate"],
      description: "The rate to start the contract at",
      type: "string",
      required: true,
      default: "0.05",
    },
    a: {
      alias: ["admin"],
      description: "The admin of the vault",
      type: "string",
      required: true,
    },
    m: {
      alias: ["competition-mode"],
      description: "Whether to deploy in competition mode",
      type: "boolean",
      required: true,
      default: false,
    },
  },

  handler: async ({ data, options, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    const token = await options.token({
      prompt: "Enter token address",
    });

    const name = await options.name({
      prompt: "Enter vault name",
    });

    const symbol = await options.symbol({
      prompt: "Enter vault symbol",
    });

    const rate = await options.rate({
      prompt: "Enter initial rate",
    });

    const admin = await options.admin({
      prompt: {
        message: "Enter admin address",
        type: "text",
        initial: account.address,
      },
    });

    const isCompetitionMode = await options.competitionMode({
      prompt: "Deploy in competition mode?",
    });

    const publicClient = createPublicClient({
      transport: http(rpcUrl),
      chain,
    });

    const decimals = await publicClient.readContract({
      abi: ERC20Mintable.abi,
      address: token as `0x${string}`,
      functionName: "decimals",
    });

    signale.pending("Deploying MockERC4626...");

    const { address } = await deployMockERC4626({
      token,
      vaultName: name,
      vaultSymbol: symbol,
      initialRate: parseUnits(rate.toString(), decimals),
      admin,
      isCompetitionMode,
      account,
      rpcUrl,
      chain,
      onSubmitted: (txHash) => {
        signale.pending(`MockERC4626 deployment tx submitted: ${txHash}`);
      },
    });

    if (isCompetitionMode) {
      const walletClient = createWalletClient({
        account,
        transport: http(rpcUrl),
        chain,
      });

      signale.pending("Setting vault role");
      const userRoleHash = await walletClient.writeContract({
        abi: ERC20Mintable.abi,
        address: address as `0x${string}`,
        functionName: "setUserRole",
        args: [address as `0x${string}`, 1, true],
        account,
      });
      signale.pending(`Vault role tx submitted: ${userRoleHash}`);
      await publicClient.waitForTransactionReceipt({ hash: userRoleHash });
      signale.success(`Successfully set vault role`);

      signale.pending("Giving vault mint capability");
      const mintHash = await walletClient.writeContract({
        abi: ERC20Mintable.abi,
        address: address as `0x${string}`,
        functionName: "setUserRole",
        args: [address as `0x${string}`, 1, true],
        account,
      });
      signale.pending(`Vault mint capability tx submitted: ${mintHash}`);
      await publicClient.waitForTransactionReceipt({ hash: mintHash });
      signale.success(`Successfully gave vault mint capability`);

      signale.pending("Giving vault burn capability");
      const burnHash = await walletClient.writeContract({
        abi: ERC20Mintable.abi,
        address: address as `0x${string}`,
        functionName: "setUserRole",
        args: [address as `0x${string}`, 1, true],
        account,
      });
      signale.pending(`Vault burn capability tx submitted: ${burnHash}`);
      await publicClient.waitForTransactionReceipt({ hash: burnHash });
      signale.success(`Successfully gave vault burn capability`);
    }

    signale.success(`MockERC4626 deployed @ ${address}`);
    next(address);
  },
});

export interface DeployMockERC4626Options {
  token: string;
  vaultName: string;
  vaultSymbol: string;
  initialRate: bigint;
  admin: string;
  isCompetitionMode: boolean;
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployMockERC4626({
  token,
  vaultName,
  vaultSymbol,
  initialRate,
  isCompetitionMode,
  account,
  admin = account.address,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployMockERC4626Options): Promise<DeployedContract> {
  return await deployContract({
    abi: MockERC4626.abi,
    args: [
      token as `0x${string}`,
      vaultName,
      vaultSymbol,
      initialRate,
      admin as `0x${string}`,
      isCompetitionMode,
    ],
    bytecode: MockERC4626.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
