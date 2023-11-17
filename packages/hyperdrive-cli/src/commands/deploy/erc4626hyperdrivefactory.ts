import { ERC4626HyperdriveFactory } from "@hyperdrive/artifacts/dist/ERC4626HyperdriveFactory";
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
    command: "erc4626hyperdrivefactory [OPTIONS]",
    aliases: ["ERC4626HyperdriveFactory"],
    describe: "Deploy an ERC4626HyperdriveFactory contract",

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
        "gov-fee": {
          alias: ["governance-fee"],
          describe: "The portion of the LP fee that goes to governance",
          type: "string",
        },
        "max-gov-fee": {
          alias: ["max-governance-fee"],
          describe: "The maximum portion of the LP fee that goes to governance",
          type: "string",
        },
        pausers: {
          alias: ["default-pausers"],
          describe:
            "The default addresses which will be set to have the pauser role",
          type: "array",
        },
        deployer: {
          describe: "The Hyperdrive deployer",
          type: "string",
        },
        target0: {
          alias: ["target0-deployer"],
          describe: "The Hyperdrive target0 deployer",
          type: "string",
        },
        target1: {
          alias: ["target1-deployer"],
          describe: "The Hyperdrive target1 deployer",
          type: "string",
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
        pool: {
          describe: "The ERC4626 pool",
          type: "string",
        },
        targets: {
          alias: ["sweep-targets"],
          describe: "The addresses that can be swept by the fee collector",
          type: "array",
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

      const governanceFee = await requiredString(args.governanceFee, {
        name: "governance-fee",
        message: "Enter governance fee",
      });

      const maxGovernanceFee = await requiredString(args.maxGovernanceFee, {
        name: "max-governance-fee",
        message: "Enter maximum governance fee",
      });

      const pausers = await requiredArray(args.pausers?.map(String), {
        name: "pausers",
        message: "Enter pauser addresses",
        initial: governance,
      });

      const deployer = await requiredString(args.deployer, {
        name: "deployer",
        message: "Enter deployer address",
      });

      const target0 = await requiredString(args.target0, {
        name: "target0-deployer",
        message: "Enter target0 deployer address",
      });

      const target1 = await requiredString(args.target1, {
        name: "target1-deployer",
        message: "Enter target1 deployer address",
      });

      const linker = await requiredString(args.linker, {
        name: "linker-factory",
        message: "Enter linker factory address",
      });

      const linkerCodeHash = await requiredString(args.linkerCodeHash, {
        name: "linker-code-hash",
        message: "Enter linker code hash",
      });

      const sweepTargets = (
        await requiredArray(args.targets?.map(String), {
          name: "sweep-targets",
          message: "Enter sweep targets",
          validate: () => true,
        })
      ).filter(Boolean);

      signale.pending("Deploying ERC4626HyperdriveFactory...");

      const { address } = await deployERC4626HyperdriveFactory({
        governance,
        hyperdriveGovernance,
        feeCollector,
        fees: {
          curve: parseUnits(curveFee.toString(), decimals),
          flat: parseUnits(flatFee.toString(), decimals),
          governance: parseUnits(governanceFee.toString(), decimals),
        },
        maxFees: {
          curve: parseUnits(maxCurveFee.toString(), decimals),
          flat: parseUnits(maxFlatFee.toString(), decimals),
          governance: parseUnits(maxGovernanceFee.toString(), decimals),
        },
        pausers,
        deployer,
        target0,
        target1,
        linker,
        linkerCodeHash,
        sweepTargets,
        account,
        rpcUrl,
        chain,
        onSubmitted: (txHash) => {
          signale.pending(
            `ERC4626HyperdriveFactory deployment tx submitted: ${txHash}`,
          );
        },
      });

      signale.success(`ERC4626HyperdriveFactory deployed @ ${address}`);
    },
  });

export interface DeployERC4626HyperdriveFactoryOptions {
  governance: string;
  hyperdriveGovernance: string;
  feeCollector: string;
  fees: {
    curve: bigint;
    flat: bigint;
    governance: bigint;
  };
  maxFees: {
    curve: bigint;
    flat: bigint;
    governance: bigint;
  };
  pausers: string[];
  deployer: string;
  target0: string;
  target1: string;
  linker: string;
  linkerCodeHash: string;
  sweepTargets: string[];
  account: PrivateKeyAccount;
  rpcUrl: string;
  chain: Chain;
  onSubmitted?: (txHash: string) => void;
}

export async function deployERC4626HyperdriveFactory({
  governance,
  hyperdriveGovernance,
  feeCollector,
  fees,
  maxFees,
  pausers,
  deployer,
  target0,
  target1,
  linker,
  linkerCodeHash,
  sweepTargets,
  account,
  rpcUrl,
  chain,
  onSubmitted,
}: DeployERC4626HyperdriveFactoryOptions): Promise<DeployedContract> {
  return await deployContract({
    abi: ERC4626HyperdriveFactory.abi,
    args: [
      {
        governance: governance as `0x${string}`,
        hyperdriveGovernance: hyperdriveGovernance as `0x${string}`,
        feeCollector: feeCollector as `0x${string}`,
        fees,
        maxFees,
        defaultPausers: pausers as `0x${string}`[],
        hyperdriveDeployer: deployer as `0x${string}`,
        target0Deployer: target0 as `0x${string}`,
        target1Deployer: target1 as `0x${string}`,
        linkerFactory: linker as `0x${string}`,
        linkerCodeHash: linkerCodeHash as `0x${string}`,
      },
      sweepTargets as `0x${string}`[],
    ],
    bytecode: ERC4626HyperdriveFactory.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
