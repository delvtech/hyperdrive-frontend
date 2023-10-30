import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredBoolean } from "src/options/utils/requiredBoolean";
import { requiredNumber } from "src/options/utils/requiredNumber";
import { requiredString } from "src/options/utils/requiredString";
import { requiredWalletKey, walletKeyOption } from "src/options/wallet-key";
import { createCommandModule } from "src/utils/createCommandModule";
import { DeployedContract, deployContract } from "src/utils/deployContract";
import { Hex, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { Chain } from "viem/chains";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "erc20mintable [OPTIONS]",
    aliases: ["ERC20Mintable"],
    describe: "Deploy an ERC20Mintable contract for use during testing",

    builder: (yargs) => {
      return yargs.options({
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
        d: {
          alias: ["decimals"],
          describe: "The decimals of the token. Defaults to 18.",
          type: "number",
        },
        a: {
          alias: ["admin"],
          describe: "The admin of the token",
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

      const name = await requiredString(args.name, {
        name: "name",
        message: "Enter token name",
        initial: "Base",
      });

      const symbol = await requiredString(args.symbol, {
        name: "symbol",
        message: "Enter token symbol",
        initial: "BASE",
      });

      const decimals = await requiredNumber(args.decimals, {
        name: "decimals",
        message: "Enter token decimals",
        initial: 18,
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

      signale.pending("Deploying ERC20Mintable...");

      const { address } = await deployERC20Mintable({
        tokenName: name,
        tokenSymbol: symbol,
        decimals,
        admin,
        isCompetitionMode,
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(`ERC20Mintable deployment tx submitted: ${txHash}`);
        },
      });

      signale.success(`ERC20Mintable deployed @ ${address}`);
    },
  });

export interface DeployERC20MintableOptions {
  tokenName: string;
  tokenSymbol: string;
  decimals: number;
  admin: string;
  isCompetitionMode: boolean;
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployERC20Mintable({
  tokenName,
  tokenSymbol,
  decimals,
  isCompetitionMode,
  account,
  admin = account.address,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployERC20MintableOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC20Mintable.abi,
    args: [
      tokenName,
      tokenSymbol,
      decimals,
      admin as `0x${string}`,
      isCompetitionMode,
    ],
    bytecode: ERC20Mintable.bytecode.object,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
