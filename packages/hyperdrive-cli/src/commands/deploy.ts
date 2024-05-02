import { command } from "clide-js";
import colors from "colors";
import {
  Account,
  Chain,
  createPublicClient,
  createWalletClient,
  http,
  PrivateKeyAccount,
  PublicClient,
  Transport,
  WalletClient,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "../common-options/chain.js";
import { rpcUrlOption } from "../common-options/rpc-url.js";
import { walletKeyOption } from "../common-options/wallet-key.js";
import { Deployer } from "../deploy/Deployer.js";
import { createCommandFactory } from "../utils/createCommandFactory.js";

const line = colors.dim("-".repeat(80));
const thickLine = colors.dim("=".repeat(80));

export default command({
  description: "Deploy a contract or combination of contracts.",
  requiresSubcommand: true,

  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    wallet: walletKeyOption,
    name: {
      description:
        "A name for the deployment. Defaults to the the contract name if a single contract is deployed, otherwise a timestamp.",
      type: "string",
    },
    "out-dir": {
      alias: ["deployments-dir"],
      description:
        "The directory to write the contract deployment information to, relative to the current working directory. Defaults to process.env.DEPLOYMENTS_DIR.",
      type: "string",
      default: process.env.DEPLOYMENTS_DIR,
    },
  },

  handler: async ({ options, next }) => {
    const chain = await getChain(options.chain);
    const rpcUrl = await options.rpc({
      prompt: "Enter RPC URL",
    });

    const walletKey = await options.wallet({
      prompt: "Enter wallet key",
    });

    const account = privateKeyToAccount(walletKey as `0x${string}`);
    const walletClient = createWalletClient({
      account,
      chain,
      transport: http(rpcUrl),
    });

    const publicClient = createPublicClient({
      chain,
      transport: http(rpcUrl),
    });

    const deployer = new Deployer({ publicClient, walletClient });

    const deployOptions: DeployData = {
      chain,
      rpcUrl,
      account,
      publicClient,
      walletClient,
      deployer,
    };

    await next(deployOptions);

    const outDir = await options.outDir();
    let name = await options.name();

    if (!name) {
      if (deployer.deployedContracts.length === 1) {
        name = deployer.deployedContracts[0].name;
      } else {
        name = new Date().toISOString().replace(/:/g, "-");
      }
    }

    await deployer.save({ name, outDir });

    console.log(`
Deployment complete!

${thickLine}
${deployer.deployedContracts
  .map(({ name, address }, i) => {
    if (i !== 0) {
      return `${line}\n${name}: ${address}`;
    }
    return `${name}: ${address}`;
  })
  .join("\n")}
${thickLine}
`);
  },
});

export interface DeployData {
  chain: Chain;
  rpcUrl: string;
  account: PrivateKeyAccount;
  publicClient: PublicClient<Transport<"http">, Chain>;
  walletClient: WalletClient<Transport<"http">, Chain, Account>;
  deployer: Deployer;
}

/**
 * Create a command module with the DeployData type.
 */
export const deployCommand = createCommandFactory<DeployData>();
