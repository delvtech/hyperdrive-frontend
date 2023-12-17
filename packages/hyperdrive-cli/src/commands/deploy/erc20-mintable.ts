import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable.js";
import { command } from "clide-js";
import signale from "signale";
import { Chain, Hex, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "../../reusable-options/chain.js";
import { getRpcUrl, rpcUrlOption } from "../../reusable-options/rpc-url.js";
import {
  getWalletKey,
  walletKeyOption,
} from "../../reusable-options/wallet-key.js";
import {
  DeployedContract,
  deployContract,
} from "../../utils/deployContract.js";

export default command({
  description: "Deploy an ERC20Mintable contract for use during testing",

  options: {
    n: {
      alias: ["name"],
      description: "The name of the token",
      type: "string",
      required: true,
      default: "Base",
    },
    s: {
      alias: ["symbol"],
      description: "The symbol of the token",
      type: "string",
      required: true,
      default: "BASE",
    },
    d: {
      alias: ["decimals"],
      description: "The decimals of the token. Defaults to 18.",
      type: "number",
      required: true,
      default: 18,
    },
    a: {
      alias: ["admin"],
      description: "The admin of the token",
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
    c: chainOption,
    r: rpcUrlOption,
    w: walletKeyOption,
  },

  handler: async ({ options, next }) => {
    const chain = await getChain(options);
    const rpcUrl = await getRpcUrl(options);
    const walletKey = await getWalletKey(options);

    const account = privateKeyToAccount(walletKey as Hex);

    const name = await options.name({
      prompt: "Enter token name",
    });

    const symbol = await options.symbol({
      prompt: "Enter token symbol",
    });

    const decimals = await options.decimals({
      prompt: "Enter token decimals",
    });

    const admin = await options.admin({
      prompt: "Enter admin address",
    });

    const isCompetitionMode = await options.competitionMode({
      prompt: "Deploy in competition mode?",
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

    next(address);
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
