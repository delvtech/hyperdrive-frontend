import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable";
import { MockERC4626 } from "@hyperdrive/artifacts/dist/MockERC4626";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredBoolean } from "src/options/utils/requiredBoolean";
import { requiredNumber } from "src/options/utils/requiredNumber";
import { requiredString } from "src/options/utils/requiredString";
import { requiredWalletKey, walletKeyOption } from "src/options/wallet-key";
import { createCommandModule } from "src/utils/createCommandModule";
import { DeployedContract, deployContract } from "src/utils/deployContract";
import {
  Hex,
  PrivateKeyAccount,
  createPublicClient,
  createWalletClient,
  http,
  parseUnits,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { Chain } from "viem/chains";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "mockerc4626 [OPTIONS]",
    aliases: ["MockERC4626"],
    describe: "Deploy an MockERC4626 contract for use during testing",

    builder: (yargs) => {
      return yargs.options({
        t: {
          alias: ["token"],
          describe: "The address of the MockERC4626 token contract",
          type: "string",
        },
        n: {
          alias: ["name"],
          describe: "The name of the token",
          type: "string",
        },
        s: {
          alias: ["symbol"],
          describe: "The symbol of the token",
          type: "string",
        },
        i: {
          alias: ["rate", "initial-rate"],
          describe: "The rate to start the contract at",
          type: "number",
        },
        a: {
          alias: ["admin"],
          describe: "The admin of the vault",
          type: "string",
        },
        m: {
          alias: ["competition-mode"],
          describe: "Whether to deploy in competition mode",
          type: "boolean",
          default: false,
        },
        c: chainOption,
        r: rpcUrlOption,
        w: walletKeyOption,
      });
    },

    handler: async (args) => {
      const chain = await requiredChain(args.chain);
      const rpcUrl = await requiredRpcUrl(args.rpcUrl);
      const walletKey = await requiredWalletKey(args.walletKey);

      const account = privateKeyToAccount(walletKey as Hex);

      const token = await requiredString(args.token, {
        name: "token",
        message: "Enter token address",
      });

      const name = await requiredString(args.name, {
        name: "name",
        message: "Enter vault name",
        initial: "Delvnet Yield Source",
      });

      const symbol = await requiredString(args.symbol, {
        name: "symbol",
        message: "Enter vault symbol",
        initial: "DELV",
      });

      const rate = await requiredNumber(args.rate, {
        name: "rate",
        message: "Enter initial rate",
        initial: 0.05,
      });

      const admin = await requiredString(args.admin, {
        name: "admin",
        message: "Enter admin address",
        initial: account.address,
      });

      const isCompetitionMode = await requiredBoolean(args.competitionMode, {
        name: "competition-mode",
        message: "Deploy in competition mode?",
        initial: false,
      });

      const publicClient = createPublicClient({
        transport: http(rpcUrl),
        chain,
      });

      const decimals = (await publicClient.readContract({
        abi: ERC20Mintable.abi,
        address: token as `0x${string}`,
        functionName: "decimals",
      })) as number;

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
