// TODO: As of contracts version 0.7.0, the ForwarderFactory no longer exists
// import { ForwarderFactory } from "@delvtech/hyperdrive-artifacts/ForwarderFactory";
import { command } from "clide-js";
import signale from "signale";
import { PrivateKeyAccount, createPublicClient, http } from "viem";
import { Chain } from "viem/chains";
import { DeployOptions } from "../deploy.js";
import deployForwarderFactory from "./forwarder-factory.js";

export default command({
  description: "Deploy a HyperdriveFactory contract",

  options: {
    governance: {
      description: "The address which can update a factory",
      type: "string",
      required: true,
    },
    "hyperdrive-governance": {
      description: "The address which is set as the governor of hyperdrive",
      type: "string",
      required: true,
    },
    pausers: {
      alias: ["default-pausers"],
      description:
        "The default addresses which will be set to have the pauser role",
      type: "array",
      required: true,
    },
    collector: {
      alias: ["fee-collector"],
      description:
        "The address which should be set as the fee collector in new deployments",
      type: "string",
      required: true,
    },
    decimals: {
      description: "The number of decimals for the token, used to scale fees",
      type: "number",
      required: true,
      default: 18,
    },
    "curve-fee": {
      description: "The LP fee applied to the curve portion of a trade",
      type: "string",
      required: true,
      default: "0.1",
    },
    "max-curve-fee": {
      description: "The upper bound of the curve fee that governance can set",
      type: "string",
      required: true,
      default: "0.3",
    },
    "flat-fee": {
      description: "The LP fee applied to the flat portion of a trade",
      type: "string",
      required: true,
      default: "0.0005",
    },
    "max-flat-fee": {
      description: "The upper bound of the flat fee that governance can set",
      type: "string",
      required: true,
      default: "0.0015",
    },
    "gov-lp-fee": {
      alias: ["governance-lp-fee"],
      description: "The portion of the LP fee that goes to governance",
      type: "string",
      required: true,
      default: "0.01",
    },
    "max-gov-lp-fee": {
      alias: ["max-governance-lp-fee"],
      description:
        "The upper bound of the governance lp fee that governance can set",
      type: "string",
      required: true,
      default: "0.3",
    },
    "gov-zombie-fee": {
      alias: ["governance-zombie-fee"],
      description: "The portion of the zombie interest that goes to governance",
      type: "string",
      required: true,
      default: "0.1",
    },
    "max-gov-zombie-fee": {
      alias: ["max-governance-zombie-fee"],
      description:
        "The upper bound of the governance zombie fee that governance can set",
      type: "string",
      required: true,
      default: "0.3",
    },
    linker: {
      alias: ["linker-factory"],
      description: "The address of the linker factory (leave blank to deploy)",
      type: "string",
      // required: true,
    },
    // TODO: Does this need to be manually set?
    // "linker-hash": {
    //   alias: ["linker-code-hash"],
    //   description: "The hash of the linker contract's constructor code",
    //   type: "string",
    //   required: true,
    // },
  },

  handler: async ({ context, data, options, next }) => {
    const { account, chain, rpcUrl } = data as DeployOptions;

    const governance = await options.governance({
      prompt: {
        message: "Enter governance address",
        initial: account.address,
      },
    });

    const hyperdriveGovernance = await options.hyperdriveGovernance({
      prompt: {
        message: "Enter hyperdrive governance address",
        initial: governance,
      },
    });

    const defaultPausers = await options.defaultPausers({
      prompt: {
        message: "Enter default pausers",
        initial: governance,
      },
    });

    const feeCollector = await options.feeCollector({
      prompt: {
        message: "Enter fee collector address",
        initial: governance,
      },
    });

    const decimals = await options.decimals({
      prompt: "Enter token decimals",
    });

    const curveFee = await options.curveFee({
      prompt: "Enter curve fee",
    });

    const maxCurveFee = await options.maxCurveFee({
      prompt: "Enter maximum curve fee",
    });

    const flatFee = await options.flatFee({
      prompt: "Enter flat fee",
    });

    const maxFlatFee = await options.maxFlatFee({
      prompt: "Enter maximum flat fee",
    });

    const govLpFee = await options.govLpFee({
      prompt: "Enter governance fee",
    });

    const maxGovLpFee = await options.maxGovLpFee({
      prompt: "Enter maximum governance fee",
    });

    const govZombieFee = await options.govZombieFee({
      prompt: "Enter governance zombie fee",
    });

    const maxGovZombieFee = await options.maxGovZombieFee({
      prompt: "Enter maximum governance zombie fee",
    });

    let linkerFactory = await options.linkerFactory({
      prompt: "Enter linker factory address (leave blank to deploy)",
    });

    if (!linkerFactory) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const address = await context.invokeCommands({
        commands: [deployForwarderFactory],
        initialData: data,
      });
      linkerFactory = address as string;
    }

    const publicClient = createPublicClient({
      transport: http(rpcUrl),
      chain,
    });

    // TODO: As of contracts version 0.7.0, the ForwarderFactory no longer exists
    // const linkerCodeHash = await publicClient.readContract({
    //   abi: ForwarderFactory.abi,
    //   address: linkerFactory as `0x${string}`,
    //   functionName: "ERC20LINK_HASH",
    // });

    signale.pending("Deploying HyperdriveFactory...");

    // TODO: As of contracts version 0.7.0, the `linkerCodeHash` no longer exists
    // const { address } = await deployHyperdriveFactory({
    //   governance,
    //   hyperdriveGovernance,
    //   defaultPausers,
    //   feeCollector,
    //   fees: {
    //     curve: parseUnits(curveFee, decimals),
    //     flat: parseUnits(flatFee, decimals),
    //     governanceLP: parseUnits(govLpFee, decimals),
    //     governanceZombie: parseUnits(govZombieFee, decimals),
    //   },
    //   maxFees: {
    //     curve: parseUnits(maxCurveFee, decimals),
    //     flat: parseUnits(maxFlatFee, decimals),
    //     governanceLP: parseUnits(maxGovLpFee, decimals),
    //     governanceZombie: parseUnits(maxGovZombieFee, decimals),
    //   },
    //   linkerFactory,
    //   linkerCodeHash,
    //   account,
    //   rpcUrl,
    //   chain,
    //   onSubmitted: (txHash) => {
    //     signale.pending(`HyperdriveFactory deployment tx submitted: ${txHash}`);
    //   },
    // });

    // signale.success(`HyperdriveFactory deployed @ ${address}`);
    // next(address);
  },
});

export interface DeployHyperdriveFactoryOptions {
  governance: string;
  hyperdriveGovernance: string;
  defaultPausers: string[];
  feeCollector: string;
  fees: {
    curve: bigint;
    flat: bigint;
    governanceLP: bigint;
    governanceZombie: bigint;
  };
  maxFees: {
    curve: bigint;
    flat: bigint;
    governanceLP: bigint;
    governanceZombie: bigint;
  };
  linkerFactory: string;
  linkerCodeHash: string;
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

// TODO: As of contracts version 0.7.0, the `fees` param no longer exists
// export async function deployHyperdriveFactory({
//   governance,
//   hyperdriveGovernance,
//   defaultPausers,
//   feeCollector,
//   fees,
//   maxFees,
//   linkerFactory,
//   linkerCodeHash,
//   account,
//   rpcUrl,
//   chain,
//   onSubmitted,
// }: DeployHyperdriveFactoryOptions): Promise<DeployedContract> {
//   return await deployContract({
//     abi: HyperdriveFactory.abi,
//     args: [
//       {
//         governance: governance as `0x${string}`,
//         hyperdriveGovernance: hyperdriveGovernance as `0x${string}`,
//         defaultPausers: defaultPausers as `0x${string}`[],
//         feeCollector: feeCollector as `0x${string}`,
//         fees,
//         maxFees,
//         linkerFactory: linkerFactory as `0x${string}`,
//         linkerCodeHash: linkerCodeHash as `0x${string}`,
//       },
//     ],
//     bytecode: HyperdriveFactory.bytecode.object as `0x${string}`,
//     account,
//     rpcUrl,
//     chain,
//     onSubmitted,
//   });
// }
