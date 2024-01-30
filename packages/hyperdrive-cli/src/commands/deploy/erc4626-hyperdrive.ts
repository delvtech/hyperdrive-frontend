import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable.js";
import { command } from "clide-js";
import { supportedChainNames, supportedChains } from "src/utils/chains.js";
import { createPublicClient, createWalletClient, http, parseUnits } from "viem";
import { DeployOptions } from "../deploy.js";
import deployAndInitialize from "../factory/deploy-and-initialize.js";
import deployERC20Mintable from "./erc20-mintable.js";
import deployERC4626HyperdriveDeployer from "./erc4626-hyperdrive-deployer.js";
import deployHyperdriveFactory from "./hyperdrive-factory.js";
import deployMockERC4626 from "./mock-erc4626.js";

export default command({
  description:
    "Deploy an ERC4626 Hyperdrive instance and all of its associated contracts",

  options: {
    factory: {
      description: "The address of the HyperdriveFactory contract",
      type: "string",
    },
    deployer: {
      alias: ["hyperdrive-deployer"],
      description: "The address of the ERC4626HyperdriveDeployer contract",
      type: "string",
    },
    vault: {
      description: "The address of the erc4626 vault",
      type: "string",
    },
  },

  handler: async ({ context, data, options, next }) => {
    const { account, chain, rpcUrl, walletKey } = data as DeployOptions;

    const publicClient = await createPublicClient({
      transport: http(rpcUrl),
      chain,
    });

    const walletClient = createWalletClient({
      transport: http(rpcUrl),
      chain,
      account,
    });

    let factory = await options.factory({
      prompt: "Enter factory address (leave blank to deploy)",
    });

    if (!factory) {
      const address = await context.invokeCommands({
        commands: [deployHyperdriveFactory],
        initialData: data,
      });
      factory = address as string;
    }

    let hyperdriveDeployer = await options.deployer({
      prompt: "Enter deployer address (leave blank to deploy)",
    });

    if (!hyperdriveDeployer) {
      const address = await context.invokeCommands({
        commands: [deployERC4626HyperdriveDeployer],
        initialData: data,
      });
      hyperdriveDeployer = address as string;

      // TODO: As of contracts version 0.7.0, `addHyperdriveDeployer` no longer exists
      // const { request } = await publicClient.simulateContract({
      //   abi: HyperdriveFactory.abi,
      //   address: factory as `0x${string}`,
      //   functionName: "addHyperdriveDeployer",
      //   args: [address as `0x${string}`],
      // });
      // await walletClient.writeContract(request);
    }

    let vault = await options.vault({
      prompt: "Enter vault address (leave blank to deploy MockERC4626)",
    });

    const defaultContribution =
      deployAndInitialize.options?.contribution.default || "10000000.0";

    if (!vault) {
      const tokenAddress = await context.invokeCommands({
        commands: [deployERC20Mintable],
        initialData: data,
      });

      const decimals = await publicClient.readContract({
        abi: ERC20Mintable.abi,
        address: tokenAddress as `0x${string}`,
        functionName: "decimals",
      });

      const { request } = await publicClient.simulateContract({
        abi: ERC20Mintable.abi,
        address: tokenAddress as `0x${string}`,
        functionName: "mint",
        args: [parseUnits(defaultContribution, decimals)],
        chain,
      });
      await walletClient.writeContract(request);

      const address = await context.invokeCommands({
        commands: [deployMockERC4626],
        initialData: data,
        optionValues: {
          token: tokenAddress,
        },
      });
      vault = address as string;
    }

    const result = await context.invokeCommands({
      commands: [deployAndInitialize],
      optionValues: {
        address: factory,
        deployer: hyperdriveDeployer,
        vault,
        rpc: rpcUrl,
        chain: supportedChainNames.find(
          (name) => supportedChains[name].id === chain.id,
        ),
        wallet: walletKey,
      },
    });

    next(result);
  },
});
