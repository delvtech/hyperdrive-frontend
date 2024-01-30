import { command } from "clide-js";
import signale from "signale";
import { Chain, PrivateKeyAccount } from "viem";
import { DeployOptions } from "../deploy.js";
import deployERC4626HyperdriveCoreDeployer from "./erc4626-hyperdrive-core-deployer.js";
import deployERC4626Target0Deployer from "./erc4626-target-0-deployer.js";
import deployERC4626Target1Deployer from "./erc4626-target-1-deployer.js";
import deployERC4626Target2Deployer from "./erc4626-target-2-deployer.js";
import deployERC4626Target3Deployer from "./erc4626-target-3-deployer.js";

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

  handler: async ({ context, data, options, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    let hyperdriveCoreDeployer = await options.hyperdriveCoreDeployer({
      prompt:
        "Enter ERC4626HyperdriveCoreDeployer address (leave blank to deploy)",
    });

    if (!hyperdriveCoreDeployer) {
      const address = await context.invokeCommands({
        commands: [deployERC4626HyperdriveCoreDeployer],
        initialData: data,
      });
      hyperdriveCoreDeployer = address as string;
    }

    let target0Deployer = await options.target0Deployer({
      prompt: "Enter ERC4626Target0Deployer address (leave blank to deploy)",
    });

    if (!target0Deployer) {
      const address = await context.invokeCommands({
        commands: [deployERC4626Target0Deployer],
        initialData: data,
      });
      target0Deployer = address as string;
    }

    let target1Deployer = await options.target1Deployer({
      prompt: "Enter ERC4626Target1Deployer address (leave blank to deploy)",
    });

    if (!target1Deployer) {
      const address = await context.invokeCommands({
        commands: [deployERC4626Target1Deployer],
        initialData: data,
      });
      target1Deployer = address as string;
    }

    let target2Deployer = await options.target2Deployer({
      prompt: "Enter ERC4626Target2Deployer address (leave blank to deploy)",
    });

    if (!target2Deployer) {
      const address = await context.invokeCommands({
        commands: [deployERC4626Target2Deployer],
        initialData: data,
      });
      target2Deployer = address as string;
    }

    let target3Deployer = await options.target3Deployer({
      prompt: "Enter ERC4626Target3Deployer address (leave blank to deploy)",
    });

    if (!target3Deployer) {
      const address = await context.invokeCommands({
        commands: [deployERC4626Target3Deployer],
        initialData: data,
      });
      target3Deployer = address as string;
    }

    signale.pending("Deploying ERC4626HyperdriveDeployer contract...");

    // TODO: As of 0.7.0, the hyperdriveCoreDeployer requires 6 arguments, not 5.
    // const deployedDeployer = await deployERC4626HyperdriveDeployer({
    //   hyperdriveCoreDeployer: hyperdriveCoreDeployer as string,
    //   target0Deployer,
    //   target1Deployer,
    //   target2Deployer,
    //   target3Deployer,
    //   account,
    //   rpcUrl,
    //   chain,
    //   onSubmitted: (txHash) => {
    //     signale.pending(
    //       `ERC4626HyperdriveDeployer deployment tx submitted: ${txHash}`,
    //     );
    //   },
    // });

    // signale.success(
    //   `ERC4626HyperdriveDeployer deployed @ ${deployedDeployer.address}`,
    // );
    // next(deployedDeployer.address);
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

// TODO: As of 0.7.0, the hyperdriveCoreDeployer requires 6 arguments, not 5.
// export async function deployERC4626HyperdriveDeployer({
//   hyperdriveCoreDeployer,
//   target0Deployer,
//   target1Deployer,
//   target2Deployer,
//   target3Deployer,
//   account,
//   rpcUrl,
//   chain,
//   onSubmitted,
// }: DeployERC4626HyperdriveDeployerOptions): Promise<DeployedContract> {
//   return await deployContract({
//     abi: ERC4626HyperdriveDeployerCoordinator.abi,
//     args: [
//       hyperdriveCoreDeployer as `0x${string}`,
//       target0Deployer as `0x${string}`,
//       target1Deployer as `0x${string}`,
//       target2Deployer as `0x${string}`,
//       target3Deployer as `0x${string}`,
//     ],
//     bytecode: ERC4626HyperdriveDeployerCoordinator.bytecode.object,
//     account,
//     rpcUrl,
//     chain,
//     onSubmitted,
//   });
// }
