import { ERC4626HyperdriveDeployer } from "@hyperdrive/artifacts/dist/ERC4626HyperdriveDeployer.js";
import { command } from "clide-js";
import signale from "signale";
import { Chain, PrivateKeyAccount } from "viem";
import {
  DeployedContract,
  deployContract,
} from "../../utils/deployContract.js";
import { DeployOptions } from "../deploy.js";
import { deployERC4626HyperdriveCoreDeployer } from "./erc4626-hyperdrive-core-deployer.js";
import { deployERC4626Target0Deployer } from "./erc4626-target-0-deployer.js";
import { deployERC4626Target1Deployer } from "./erc4626-target-1-deployer.js";
import { deployERC4626Target2Deployer } from "./erc4626-target-2-deployer.js";
import { deployERC4626Target3Deployer } from "./erc4626-target-3-deployer.js";

export default command({
  description: "Deploy an ERC4626HyperdriveDeployer contract",

  options: {
    core: {
      alias: ["core-deployer", "hyperdrive-core-deployer"],
      description:
        "The address of the ERC4626HyperdriveCoreDeployer contract (leave blank to deploy)",
      type: "string",
    },
    ["target-0"]: {
      alias: ["target-0-deployer"],
      description:
        "The address of the ERC4626Target0Deployer contract (leave blank to deploy)",
      type: "string",
    },
    ["target-1"]: {
      alias: ["target-1-deployer"],
      description:
        "The address of the ERC4626Target1Deployer contract (leave blank to deploy)",
      type: "string",
    },
    ["target-2"]: {
      alias: ["target-2-deployer"],
      description:
        "The address of the ERC4626Target2Deployer contract (leave blank to deploy)",
      type: "string",
    },
    ["target-3"]: {
      alias: ["target-3-deployer"],
      description:
        "The address of the ERC4626Target3Deployer contract (leave blank to deploy)",
      type: "string",
    },
  },

  handler: async ({ data, options, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    let hyperdriveCoreDeployer = await options.hyperdriveCoreDeployer({
      prompt:
        "Enter ERC4626HyperdriveCoreDeployer address (leave blank to deploy)",
    });

    if (!hyperdriveCoreDeployer) {
      signale.pending("Deploying ERC4626HyperdriveCoreDeployer contract...");
      const { address } = await deployERC4626HyperdriveCoreDeployer({
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ERC4626HyperdriveCoreDeployer deployment tx submitted: ${txHash}`,
          );
        },
      });
      hyperdriveCoreDeployer = address;
      signale.success(`ERC4626HyperdriveCoreDeployer deployed @ ${address}`);
    }

    let target0Deployer = await options.target0Deployer({
      prompt: "Enter ERC4626Target0Deployer address (leave blank to deploy)",
    });

    if (!target0Deployer) {
      signale.pending("Deploying ERC4626Target0Deployer contract...");
      const { address } = await deployERC4626Target0Deployer({
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ERC4626Target0Deployer deployment tx submitted: ${txHash}`,
          );
        },
      });
      target0Deployer = address;
      signale.success(`ERC4626Target0Deployer deployed @ ${address}`);
    }

    let target1Deployer = await options.target1Deployer({
      prompt: "Enter ERC4626Target1Deployer address (leave blank to deploy)",
    });

    if (!target1Deployer) {
      signale.pending("Deploying ERC4626Target1Deployer contract...");
      const { address } = await deployERC4626Target1Deployer({
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ERC4626Target1Deployer deployment tx submitted: ${txHash}`,
          );
        },
      });
      target1Deployer = address;
      signale.success(`ERC4626Target1Deployer deployed @ ${address}`);
    }

    let target2Deployer = await options.target2Deployer({
      prompt: "Enter ERC4626Target2Deployer address (leave blank to deploy)",
    });

    if (!target2Deployer) {
      signale.pending("Deploying ERC4626Target2Deployer contract...");
      const { address } = await deployERC4626Target2Deployer({
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ERC4626Target2Deployer deployment tx submitted: ${txHash}`,
          );
        },
      });
      target2Deployer = address;
      signale.success(`ERC4626Target2Deployer deployed @ ${address}`);
    }

    let target3Deployer = await options.target3Deployer({
      prompt: "Enter ERC4626Target3Deployer address (leave blank to deploy)",
    });

    if (!target3Deployer) {
      signale.pending("Deploying ERC4626Target3Deployer contract...");
      const { address } = await deployERC4626Target3Deployer({
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ERC4626Target3Deployer deployment tx submitted: ${txHash}`,
          );
        },
      });
      target3Deployer = address;
      signale.success(`ERC4626Target3Deployer deployed @ ${address}`);
    }

    signale.pending("Deploying ERC4626HyperdriveDeployer contract...");

    const { address } = await deployERC4626HyperdriveDeployer({
      hyperdriveCoreDeployer,
      target0Deployer,
      target1Deployer,
      target2Deployer,
      target3Deployer,
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
    next(address);
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
    bytecode: ERC4626HyperdriveDeployer.bytecode.object,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
