import { ERC4626HyperdriveDeployer } from "@hyperdrive/artifacts/dist/ERC4626HyperdriveDeployer";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredString } from "src/options/utils/requiredString";
import { requiredWalletKey, walletKeyOption } from "src/options/wallet-key";
import { createCommandModule } from "src/utils/createCommandModule";
import { DeployedContract, deployContract } from "src/utils/deployContract";
import { Hex, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { Chain } from "viem/chains";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "forwarderfactory [OPTIONS]",
    aliases: ["ERC4626HyperdriveDeployer"],
    describe: "Deploy an ERC4626HyperdriveDeployer contract",

    builder: (yargs) => {
      return yargs.options({
        p: {
          alias: ["pool"],
          describe: "The ERC4626 pool",
          type: "string",
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

      const pool = await requiredString(args.pool, {
        name: "pool",
        message: "Enter pool address",
      });

      signale.pending("Deploying ERC4626HyperdriveDeployer...");

      const { address } = await deployForwarderFactory({
        pool,
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ERC4626HyperdriveDeployer deployment tx submitted: ${txHash}`,
          );
        },
      });

      signale.success(`ERC4626HyperdriveDeployer deployed @ ${address}`);
    },
  });

export interface DeployForwarderFactoryOptions {
  pool: string;
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployForwarderFactory({
  pool,
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployForwarderFactoryOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC4626HyperdriveDeployer.abi,
    args: [pool as `0x${string}`],
    bytecode: ERC4626HyperdriveDeployer.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
