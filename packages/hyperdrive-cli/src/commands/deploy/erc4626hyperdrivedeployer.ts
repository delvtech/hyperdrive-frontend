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
    command: "erc4626hyperdrivedeployer [OPTIONS]",
    aliases: ["ERC4626HyperdriveDeployer"],
    describe: "Deploy an ERC4626HyperdriveDeployer contract",

    builder: (yargs) => {
      return yargs.options({
        core: {
          alias: ["core-deployer", "hyperdrive-core-deployer"],
          describe:
            "The address of the ERC4626HyperdriveCoreDeployer contract (leave blank to deploy)",
          type: "string",
        },
        ["target-0"]: {
          alias: ["target-0-deployer"],
          describe:
            "The address of the ERC4626Target0Deployer contract (leave blank to deploy)",
          type: "string",
        },
        ["target-1"]: {
          alias: ["target-1-deployer"],
          describe:
            "The address of the ERC4626Target1Deployer contract (leave blank to deploy)",
          type: "string",
        },
        ["target-2"]: {
          alias: ["target-2-deployer"],
          describe:
            "The address of the ERC4626Target2Deployer contract (leave blank to deploy)",
          type: "string",
        },
        ["target-3"]: {
          alias: ["target-3-deployer"],
          describe:
            "The address of the ERC4626Target3Deployer contract (leave blank to deploy)",
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

      const core = await requiredString(args.core, {
        name: "deployer",
        message: "Enter deployer address",
      });

      const target0 = await requiredString(args.target0, {
        name: "target-0-deployer",
        message: "Enter target0 deployer address",
      });

      const target1 = await requiredString(args.target1, {
        name: "target-1-deployer",
        message: "Enter target1 deployer address",
      });

      const target2 = await requiredString(args.target2, {
        name: "target-2-deployer",
        message: "Enter target1 deployer address",
      });

      const target3 = await requiredString(args.target3, {
        name: "target-3-deployer",
        message: "Enter target1 deployer address",
      });

      signale.pending("Deploying ERC4626HyperdriveDeployer...");

      const { address } = await deployERC4626HyperdriveDeployer({
        hyperdriveCoreDeployer: core,
        target0Deployer: target0,
        target1Deployer: target1,
        target2Deployer: target2,
        target3Deployer: target3,
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
  hyperdriveCoreDeployer: string;
  target0Deployer: string;
  target1Deployer: string;
  target2Deployer: string;
  target3Deployer: string;
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployERC4626HyperdriveDeployer({
  hyperdriveCoreDeployer,
  target0Deployer,
  target1Deployer,
  target2Deployer,
  target3Deployer,
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployERC4626HyperdriveDeployerOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC4626HyperdriveDeployer.abi,
    args: [
      hyperdriveCoreDeployer as `0x${string}`,
      target0Deployer as `0x${string}`,
      target1Deployer as `0x${string}`,
      target2Deployer as `0x${string}`,
      target3Deployer as `0x${string}`,
    ],
    bytecode: ERC4626HyperdriveDeployer.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
