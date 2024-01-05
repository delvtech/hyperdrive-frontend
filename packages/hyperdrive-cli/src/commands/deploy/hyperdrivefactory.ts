import { HyperdriveFactory } from "@hyperdrive/artifacts/dist/HyperdriveFactory";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredArray } from "src/options/utils/requiredArray";
import { requiredNumber } from "src/options/utils/requiredNumber";
import { requiredString } from "src/options/utils/requiredString";
import { requiredWalletKey, walletKeyOption } from "src/options/wallet-key";
import { createCommandModule } from "src/utils/createCommandModule";
import { DeployedContract, deployContract } from "src/utils/deployContract";
import { Hex, PrivateKeyAccount, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { Chain } from "viem/chains";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "hyperdrivefactory [OPTIONS]",
    aliases: ["HyperdriveFactory"],
    describe: "Deploy a HyperdriveFactory contract",

    builder: (yargs) => {
      return yargs.options({
        governance: {
          describe: "The address which can update a factory",
          type: "string",
        },
        "hyperdrive-governance": {
          describe: "The address which is set as the governor of hyperdrive",
          type: "string",
        },
        collector: {
          alias: ["fee-collector"],
          describe:
            "The address which should be set as the fee collector in new deployments",
          type: "string",
        },
        decimals: {
          describe: "The number of decimals for the token, used to scale fees",
          type: "number",
        },
        "curve-fee": {
          describe: "The LP fee applied to the curve portion of a trade",
          type: "string",
        },
        "max-curve-fee": {
          describe:
            "The maximum LP fee applied to the curve portion of a trade",
          type: "string",
        },
        "flat-fee": {
          describe: "The LP fee applied to the flat portion of a trade",
          type: "string",
        },
        "max-flat-fee": {
          describe: "The maximum LP fee applied to the flat portion of a trade",
          type: "string",
        },
        "gov-lp-fee": {
          alias: ["governance-lp-fee"],
          description: "The portion of the LP fee that goes to governance",
          type: "string",
          default: "0.01",
        },
        "max-gov-lp-fee": {
          alias: ["max-governance-lp-fee"],
          description:
            "The upper bound of the governance lp fee that governance can set",
          type: "string",
          default: "0.3",
        },
        "gov-zombie-fee": {
          alias: ["governance-zombie-fee"],
          description:
            "The portion of the zombie interest that goes to governance",
          type: "string",
          default: "0.1",
        },
        "max-gov-zombie-fee": {
          alias: ["max-governance-zombie-fee"],
          description:
            "The upper bound of the governance zombie fee that governance can set",
          type: "string",
          default: "0.3",
        },
        pausers: {
          alias: ["default-pausers"],
          describe:
            "The default addresses which will be set to have the pauser role",
          type: "array",
        },
        linker: {
          alias: ["linker-factory"],
          describe: "The linker factory",
          type: "string",
        },
        "linker-hash": {
          alias: ["linker-code-hash"],
          describe: "The admin of the token",
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

      const governance = await requiredString(args.governance, {
        name: "governance",
        message: "Enter governance address",
      });

      const hyperdriveGovernance = await requiredString(
        args.hyperdriveGovernance,
        {
          name: "hyperdrive-governance",
          message: "Enter hyperdrive governance address",
          initial: governance,
        },
      );

      const feeCollector = await requiredString(args.feeCollector, {
        name: "fee-collector",
        message: "Enter fee collector address",
        initial: governance,
      });

      const decimals = await requiredNumber(args.decimals, {
        name: "decimals",
        message: "Enter token decimals",
        initial: 18,
      });

      const curveFee = await requiredString(args.curveFee, {
        name: "curve-fee",
        message: "Enter curve fee",
      });

      const maxCurveFee = await requiredString(args.maxCurveFee, {
        name: "max-curve-fee",
        message: "Enter maximum curve fee",
      });

      const flatFee = await requiredString(args.flatFee, {
        name: "flat-fee",
        message: "Enter flat fee",
      });

      const maxFlatFee = await requiredString(args.maxFlatFee, {
        name: "max-flat-fee",
        message: "Enter maximum flat fee",
      });

      const governanceLpFee = await requiredString(args.governanceLpFee, {
        name: "governance-lp-fee",
        message: "Enter governance LP fee",
      });

      const maxGovernanceLpFee = await requiredString(args.maxGovernanceLpFee, {
        name: "max-governance-lp-fee",
        message: "Enter maximum governance LP fee",
      });

      const governanceZombieFee = await requiredString(
        args.governanceZombieFee,
        {
          name: "governance-zombie-fee",
          message: "Enter governance zombie fee",
        },
      );

      const maxGovernanceZombieFee = await requiredString(
        args.maxGovernanceZombieFee,
        {
          name: "max-governance-zombie-fee",
          message: "Enter maximum governance zombie fee",
        },
      );

      const pausers = await requiredArray(args.pausers?.map(String), {
        name: "pausers",
        message: "Enter pauser addresses",
        initial: governance,
      });

      const linker = await requiredString(args.linker, {
        name: "linker-factory",
        message: "Enter linker factory address",
      });

      const linkerCodeHash = await requiredString(args.linkerCodeHash, {
        name: "linker-code-hash",
        message: "Enter linker code hash",
      });

      signale.pending("Deploying HyperdriveFactory...");

      const { address } = await deployHyperdriveFactory({
        governance,
        hyperdriveGovernance,
        feeCollector,
        fees: {
          curve: parseUnits(curveFee.toString(), decimals),
          flat: parseUnits(flatFee.toString(), decimals),
          governanceLP: parseUnits(governanceLpFee.toString(), decimals),
          governanceZombie: parseUnits(
            governanceZombieFee.toString(),
            decimals,
          ),
        },
        maxFees: {
          curve: parseUnits(maxCurveFee.toString(), decimals),
          flat: parseUnits(maxFlatFee.toString(), decimals),
          governanceLP: parseUnits(maxGovernanceLpFee.toString(), decimals),
          governanceZombie: parseUnits(
            maxGovernanceZombieFee.toString(),
            decimals,
          ),
        },
        pausers,
        linker,
        linkerCodeHash,
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `HyperdriveFactory deployment tx submitted: ${txHash}`,
          );
        },
      });

      signale.success(`HyperdriveFactory deployed @ ${address}`);
    },
  });

export interface DeployHyperdriveFactoryOptions {
  governance: string;
  hyperdriveGovernance: string;
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
  pausers: string[];
  linker: string;
  linkerCodeHash: string;
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployHyperdriveFactory({
  governance,
  hyperdriveGovernance,
  feeCollector,
  fees,
  maxFees,
  pausers,
  linker,
  linkerCodeHash,
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployHyperdriveFactoryOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: HyperdriveFactory.abi,
    args: [
      {
        governance: governance as `0x${string}`,
        hyperdriveGovernance: hyperdriveGovernance as `0x${string}`,
        defaultPausers: pausers as `0x${string}`[],
        feeCollector: feeCollector as `0x${string}`,
        fees,
        maxFees,
        linkerFactory: linker as `0x${string}`,
        linkerCodeHash: linkerCodeHash as `0x${string}`,
      },
    ],
    bytecode: HyperdriveFactory.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
