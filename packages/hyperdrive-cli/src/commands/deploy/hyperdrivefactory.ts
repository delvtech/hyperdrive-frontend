import { ERC20ForwarderFactory } from "@delvtech/hyperdrive-artifacts/ERC20ForwarderFactory";
import { HyperdriveFactory } from "@delvtech/hyperdrive-artifacts/HyperdriveFactory";
import { command } from "clide-js";
import { Address, Hex, parseUnits } from "viem";
import { DAY, HOUR } from "../../utils/constants.js";
import { DeployData } from "../deploy.js";

export default command({
  description:
    "Deploy a HyperdriveFactory contract that deploys hyperdrive instances and initializes them. It also holds a registry of all deployed hyperdrive instances.",

  options: {
    gov: {
      alias: ["governance"],
      description:
        "The address which can update a factory. Defaults to the deployer.",
      type: "string",
    },
    "hyperdrive-gov": {
      alias: ["hyperdrive-governance"],
      description:
        "The address which is set as the governor of hyperdrive. Defaults to the governance.",
      type: "string",
    },
    pausers: {
      alias: ["default-pausers"],
      description:
        "The default addresses which will be set to have the pauser role.",
      type: "array",
      string: true,
      default: [],
    },
    "fee-collector": {
      description:
        "The address which will collect fees. Defaults to the governance.",
      type: "string",
    },
    "sweep-collector": {
      description:
        "The recipient of swept tokens from new deployments. Defaults to the governance.",
      type: "string",
    },
    "checkpoint-duration-resolution": {
      description: "The resolution for the checkpoint duration. (In seconds)",
      type: "number",
      default: 8 * HOUR,
    },
    "min-checkpoint-duration": {
      description:
        "The minimum checkpoint duration that can be used in new deployments. (In seconds)",
      type: "number",
      default: 24 * HOUR,
    },
    "max-checkpoint-duration": {
      description:
        "The maximum checkpoint duration that can be used in new deployments. (In seconds)",
      type: "number",
      default: 24 * HOUR,
    },
    "min-position-duration": {
      description:
        "The minimum position duration that can be used in new deployments. (In seconds)",
      type: "number",
      default: 7 * DAY,
    },
    "max-position-duration": {
      description:
        "The maximum position duration that can be used in new deployments. (In seconds)",
      type: "number",
      default: 30 * DAY,
    },
    "min-fixed-apr": {
      description: "The minimum fixed APR that can be used in new deployments.",
      type: "string",
      default: "0.01",
    },
    "max-fixed-apr": {
      description: "The maximum fixed APR that can be used in new deployments.",
      type: "string",
      default: "0.2",
    },
    "min-time-stretch-apr": {
      description:
        "The minimum time stretch APR that can be used in new deployments.",
      type: "string",
      default: "0.01",
    },
    "max-time-stretch-apr": {
      description:
        "The maximum time stretch APR that can be used in new deployments.",
      type: "string",
      default: "0.1",
    },
    "min-curve-fee": {
      description: "The minimum curve fee that can be used in new deployments.",
      type: "string",
      default: "0.001",
    },
    "max-curve-fee": {
      description: "The maximum curve fee that can be used in new deployments.",
      type: "string",
      default: "0.01",
    },
    "min-flat-fee": {
      description:
        "The minimum flat fee that can be used in new deployments, interpreted as the minimum annualized flat fee to allow for varying terms.",
      type: "string",
      default: " 0.0001",
    },
    "max-flat-fee": {
      description:
        "The maximum flat fee that can be used in new deployments, interpreted as the maximum annualized flat fee to allow for varying terms.",
      type: "string",
      default: "0.001",
    },
    "min-gov-lp-fee": {
      alias: ["min-governance-lp-fee"],
      description:
        "The minimum governance LP fee that can be used in new deployments.",
      type: "string",
      default: "0.15",
    },
    "max-gov-lp-fee": {
      alias: ["max-governance-lp-fee"],
      description:
        "The maximum governance LP fee that can be used in new deployments.",
      type: "string",
      default: "0.15",
    },
    "min-gov-zombie-fee": {
      alias: ["min-governance-zombie-fee"],
      description:
        "The minimum governance zombie fee that can be used in new deployments.",
      type: "string",
      default: "0.03",
    },
    "max-gov-zombie-fee": {
      alias: ["max-governance-zombie-fee"],
      description:
        "The maximum governance zombie fee that can be used in new deployments.",
      type: "string",
      default: "0.03",
    },
    linker: {
      alias: ["linker-factory"],
      description: "The address of the linker factory.",
      type: "string",
      required: true,
    },
    "linker-hash": {
      alias: ["linker-code-hash"],
      description:
        "The hash of the linker contract's constructor code. Defaults to the linker-factory's ERC20LINK_HASH.",
      type: "string",
    },
    name: {
      description: "A name for the factory.",
      type: "string",
      default: "Hyperdrive",
    },
  },

  handler: async ({ data, options, next }) => {
    const { account, publicClient, deployer } = data as DeployData;

    const governance = ((await options.governance({
      prompt: {
        message: "Enter governance address",
        initial: account.address,
      },
    })) || account.address) as Address;

    const hyperdriveGovernance = ((await options.hyperdriveGovernance({
      prompt: {
        message: "Enter hyperdrive governance address",
        initial: governance,
      },
    })) || governance) as Address;

    const defaultPausers = (await options.pausers()) as Address[];

    const feeCollector = ((await options.feeCollector()) ||
      governance) as Address;

    const sweepCollector = ((await options.sweepCollector()) ||
      governance) as Address;

    const checkpointDurationResolution =
      await options.checkpointDurationResolution({
        prompt: "Enter checkpoint duration resolution",
      });

    const minCheckpointDuration = await options.minCheckpointDuration({
      prompt: "Enter minimum checkpoint duration",
    });

    const maxCheckpointDuration = await options.maxCheckpointDuration({
      prompt: "Enter maximum checkpoint duration",
    });

    const minPositionDuration = await options.minPositionDuration({
      prompt: "Enter minimum position duration",
    });

    const maxPositionDuration = await options.maxPositionDuration({
      prompt: "Enter maximum position duration",
    });

    const minFixedApr = await options.minFixedApr({
      prompt: "Enter minimum fixed APR",
    });

    const maxFixedApr = await options.maxFixedApr({
      prompt: "Enter maximum fixed APR",
    });

    const minTimeStretchApr = await options.minTimeStretchApr({
      prompt: "Enter minimum time stretch APR",
    });

    const maxTimeStretchApr = await options.maxTimeStretchApr({
      prompt: "Enter maximum time stretch APR",
    });

    const minCurveFee = await options.minCurveFee({
      prompt: "Enter minimum curve fee",
    });

    const maxCurveFee = await options.maxCurveFee({
      prompt: "Enter maximum curve fee",
    });

    const minFlatFee = await options.minFlatFee({
      prompt: "Enter minimum flat fee",
    });

    const maxFlatFee = await options.maxFlatFee({
      prompt: "Enter maximum flat fee",
    });

    const minGovLpFee = await options.minGovLpFee({
      prompt: "Enter minimum governance LP fee",
    });

    const maxGovLpFee = await options.maxGovLpFee({
      prompt: "Enter maximum governance LP fee",
    });

    const minGovZombieFee = await options.minGovZombieFee({
      prompt: "Enter minimum governance zombie fee",
    });

    const maxGovZombieFee = await options.maxGovZombieFee({
      prompt: "Enter maximum governance zombie fee",
    });

    const linker = (await options.linker({
      prompt: "Enter linker factory address",
    })) as Address;

    let linkerHash = (await options.linkerHash()) as Hex;

    if (!linkerHash) {
      linkerHash = await publicClient.readContract({
        abi: ERC20ForwarderFactory.abi,
        address: linker as Address,
        functionName: "ERC20LINK_HASH",
      });
    }

    const name = await options.name();

    const deployedContract = await deployer.deploy({
      name: "HyperdriveFactory",
      abi: HyperdriveFactory.abi,
      bytecode: HyperdriveFactory.bytecode,
      args: [
        {
          governance,
          hyperdriveGovernance,
          defaultPausers,
          feeCollector,
          sweepCollector,
          checkpointDurationResolution: BigInt(checkpointDurationResolution),
          minCheckpointDuration: BigInt(minCheckpointDuration),
          maxCheckpointDuration: BigInt(maxCheckpointDuration),
          minPositionDuration: BigInt(minPositionDuration),
          maxPositionDuration: BigInt(maxPositionDuration),
          minFixedAPR: BigInt(parseUnits(minFixedApr, 18)),
          maxFixedAPR: BigInt(parseUnits(maxFixedApr, 18)),
          minTimeStretchAPR: BigInt(parseUnits(minTimeStretchApr, 18)),
          maxTimeStretchAPR: BigInt(parseUnits(maxTimeStretchApr, 18)),
          minFees: {
            curve: BigInt(parseUnits(minCurveFee, 18)),
            flat: BigInt(parseUnits(minFlatFee, 18)),
            governanceLP: BigInt(parseUnits(minGovLpFee, 18)),
            governanceZombie: BigInt(parseUnits(minGovZombieFee, 18)),
          },
          maxFees: {
            curve: BigInt(parseUnits(maxCurveFee, 18)),
            flat: BigInt(parseUnits(maxFlatFee, 18)),
            governanceLP: BigInt(parseUnits(maxGovLpFee, 18)),
            governanceZombie: BigInt(parseUnits(maxGovZombieFee, 18)),
          },
          linkerFactory: linker,
          linkerCodeHash: linkerHash,
        },
        name,
      ],
    });

    next(deployedContract);
  },
});
