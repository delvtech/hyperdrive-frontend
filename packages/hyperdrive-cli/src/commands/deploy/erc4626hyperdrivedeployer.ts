import { ERC4626HyperdriveDeployer } from "@hyperdrive/artifacts/dist/ERC4626HyperdriveDeployer";
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
    aliases: ["ERC4626HyperdriveDeployer"],
    describe: "Deploy an ERC4626HyperdriveDeployer contract",

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

      signale.pending("Deploying ERC4626HyperdriveDeployer...");

      const { address } = await deployERC4626HyperdriveDeployer({
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

export interface DeployERC4626HyperdriveDeployerOptions {
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployERC4626HyperdriveDeployer({
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployERC4626HyperdriveDeployerOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC4626HyperdriveDeployer.abi,
    args: [],
    bytecode: ERC4626HyperdriveDeployer.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
