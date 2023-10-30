import { ForwarderFactory } from "@hyperdrive/artifacts/dist/ForwarderFactory";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredWalletKey, walletKeyOption } from "src/options/wallet-key";
import { createCommandModule } from "src/utils/createCommandModule";
import { DeployedContract, deployContract } from "src/utils/deployContract";
import { Hex, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { Chain } from "viem/chains";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "forwarderfactory [OPTIONS]",
    aliases: ["ForwarderFactory"],
    describe: "Deploy an ForwarderFactory contract",

    builder: (yargs) => {
      return yargs.options({
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

      signale.pending("Deploying ForwarderFactory...");

      const { address } = await deployForwarderFactory({
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ForwarderFactory deployment tx submitted: ${txHash}`,
          );
        },
      });

      signale.success(`ForwarderFactory deployed @ ${address}`);
    },
  });

export interface DeployForwarderFactoryOptions {
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployForwarderFactory({
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployForwarderFactoryOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ForwarderFactory.abi,
    args: undefined,
    bytecode: ForwarderFactory.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
