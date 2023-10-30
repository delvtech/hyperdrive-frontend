import ERC4626HyperdriveFactory from "@hyperdrive/artifacts/dist/ERC4626HyperdriveFactory.json";
import signale from "signale";
import { chainOption, requiredChain } from "src/options/chain";
import { requiredRpcUrl, rpcUrlOption } from "src/options/rpc-url";
import { requiredArray } from "src/options/utils/requiredArray";
import { requiredString } from "src/options/utils/requiredString";
import { requiredWalletKey, walletKeyOption } from "src/options/wallet-key";
import { createCommandModule } from "src/utils/createCommandModule";
import { DeployedContract, deployContract } from "src/utils/deployContract";
import { Hex, PrivateKeyAccount } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { Chain } from "viem/chains";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "erc4626hyperdrivefactory [OPTIONS]",
    aliases: ["ERC4626HyperdriveFactory"],
    describe: "Deploy an ERC4626HyperdriveFactory contract",

    builder: (yargs) => {
      return yargs.options({
        g: {
          alias: ["governance"],
          describe: "The address which can update a factory",
          type: "string",
        },
        h: {
          alias: ["hyperdrive-governance"],
          describe: "The address which is set as the governor of hyperdrive",
          type: "string",
        },
        o: {
          alias: ["collector", "fee-collector"],
          describe:
            "The address which should be set as the fee collector in new deployments",
          type: "string",
        },
        u: {
          alias: ["curve-fee"],
          describe: "The LP fee applied to the curve portion of a trade",
          type: "string",
        },
        "max-curve": {
          alias: ["max-curve-fee"],
          describe:
            "The maximum LP fee applied to the curve portion of a trade",
          type: "string",
        },
        f: {
          alias: ["flat-fee"],
          describe: "The LP fee applied to the flat portion of a trade",
          type: "string",
        },
        "max-flat": {
          alias: ["max-flat-fee"],
          describe: "The maximum LP fee applied to the flat portion of a trade",
          type: "string",
        },
        v: {
          alias: ["governance-fee"],
          describe: "The portion of the LP fee that goes to governance",
          type: "string",
        },
        "max-governance": {
          alias: ["max-governance-fee"],
          describe: "The maximum portion of the LP fee that goes to governance",
          type: "string",
        },
        e: {
          alias: ["pausers", "default-pausers"],
          describe:
            "The default addresses which will be set to have the pauser role",
          type: "array",
        },
        d: {
          alias: ["deployer"],
          describe: "The contract that deploys new hyperdrive instances",
          type: "string",
        },
        l: {
          alias: ["linker", "linker-factory"],
          describe: "The linker factory",
          type: "string",
        },
        s: {
          alias: ["linker-code-hash"],
          describe: "The admin of the token",
          type: "string",
        },
        p: {
          alias: ["pool"],
          describe: "The ERC4626 pool",
          type: "string",
        },
        t: {
          alias: ["targets", "sweep-targets"],
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

      const pool = await requiredString(args.pool, {
        name: "pool",
        message: "Enter pool address",
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
          curve: BigInt(curveFee),
          flat: BigInt(flatFee),
          governance: BigInt(governanceFee),
        },
        maxFees: {
          curve: BigInt(maxCurveFee),
          flat: BigInt(maxFlatFee),
          governance: BigInt(maxGovernanceFee),
        },
        pausers,
        deployer,
        linker,
        linkerCodeHash,
        pool,
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
  linker: string;
  linkerCodeHash: string;
  pool: string;
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
  linker,
  linkerCodeHash,
  pool,
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
        defaultPausers: pausers as any[],
      },
      deployer as `0x${string}`,
      linker as `0x${string}`,
      linkerCodeHash as `0x${string}`,
      pool as `0x${string}`,
      sweepTargets as any[],
    ],
    bytecode: ERC4626HyperdriveFactory.bytecode.object as `0x${string}`,
    account,
    rpcUrl,
    chain,
    onSubmitted,
  });
}
