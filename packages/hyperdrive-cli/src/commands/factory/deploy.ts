import signale from "signale";
import { chainOption } from "src/options/chain";
import { rpcUrlOption } from "src/options/rpc-url";
import { requiredString } from "src/options/utils/requiredString";
import { walletKeyOption } from "src/options/wallet-key";
import { calculateTimeStretch } from "src/utils/calculateTimeStretch";
import { createCommandModule } from "src/utils/createCommandModule";

export const { command, aliases, describe, builder, handler } =
  createCommandModule({
    command: "deploy [OPTIONS]",
    aliases: ["deployAndInitialize"],
    describe: "Deploy a Hyperdrive instance with the factory's configuration",

    builder: (yargs) => {
      return yargs.options({
        address: {
          alias: ["address"],
          describe: "The address of the HyperdriveFactory contract",
          type: "string",
        },
        pool: {
          describe: "The ERC4626 pool",
          type: "string",
        },
        token: {
          alias: ["base-token"],
          describe: "The address of the base token",
          type: "string",
        },
        linker: {
          alias: ["linker-factory"],
          describe: "The address of the linker factory",
          type: "string",
        },
        "linker-hash": {
          alias: ["linker-code-hash"],
          describe: "The ERC20 linker's code",
          type: "string",
        },
        "share-price": {
          alias: ["initial-share-price"],
          describe: "The initial share price",
          type: "string",
        },
        "min-reserves": {
          alias: ["minimum-share-reserves"],
          describe: "The minimum share reserves",
          type: "string",
        },
        "min-tx-amount": {
          alias: ["minimum-transaction-amount"],
          describe:
            "The minimum amount of tokens that a position can be opened/closed with",
          type: "string",
        },
        precision: {
          alias: ["precision-threshold"],
          describe:
            "The amount of precision expected to lose due to exponentiation implementation",
          type: "string",
        },
        duration: {
          alias: ["position-duration"],
          describe: "The duration of a position prior to maturity (in seconds)",
          type: "number",
        },
        checkpoint: {
          alias: ["checkpoint-duration"],
          describe: "The duration of a checkpoint (in seconds)",
          type: "number",
        },
        "time-stretch": {
          describe: "A parameter which decreases slippage around a target rate",
          type: "string",
        },
        governance: {
          describe: "The address of the governance contract",
          type: "string",
        },
        collector: {
          alias: ["fee-collector"],
          describe: "The address which collects governance fees",
          type: "string",
        },
        "curve-fee": {
          describe: "The LP fee applied to the curve portion of a trade",
          type: "string",
        },
        "flat-fee": {
          describe: "The LP fee applied to the flat portion of a trade",
          type: "string",
        },
        "governance-fee": {
          describe: "The portion of the LP fee that goes to governance",
          type: "string",
        },
        memory: {
          // TODO: Find out what this is
          describe: "The memory",
          type: "array",
        },
        contribution: {
          describe: "The contribution amount",
          type: "string",
        },
        apr: {
          describe: "The initial spot rate",
          type: "string",
        },
        "extra-data": {
          alias: ["initialize-extra-data"],
          describe: "The extra data for the `initialize` call",
          type: "array",
        },
        c: chainOption,
        r: rpcUrlOption,
        w: walletKeyOption,
      });
    },

    handler: async (args) => {
      // const chain = await requiredChain(args.chain);
      // const rpcUrl = await requiredRpcUrl(args.rpcUrl);
      // const walletKey = await requiredWalletKey(args.walletKey);

      // const account = privateKeyToAccount(walletKey as `0x${string}`);

      // const address = await requiredString(args.address, {
      //   name: "address",
      //   message: "Enter factory address",
      // });

      // const baseToken = await requiredString(args.token, {
      //   name: "token",
      //   message: "Enter base token address",
      // });

      // const linker = await requiredString(args.linker, {
      //   name: "linker-factory",
      //   message: "Enter linker factory address",
      // });

      // const linkerHash = await requiredString(args.linkerHash, {
      //   name: "linker-code-hash",
      //   message: "Enter linker code hash",
      // })

      // const initialSharePrice = await requiredString(args.sharePrice, {
      //   name: "initial-share-price",
      //   message: "Enter initial share price",
      // });

      // const minShareReserves = await requiredString(args.minReserves, {
      //   name: "minimum-share-reserves",
      //   message: "Enter minimum share reserves",
      // });

      // const minTxAmount = await requiredString(args.minTxAmount, {
      //   name: "minimum-transaction-amount",
      //   message: "Enter minimum transaction amount",
      // });

      // const precisionThreshold = await requiredString(args.precision, {
      //   name: "precision-threshold",
      //   message: "Enter precision threshold",
      // });

      // const positionDuration = await requiredNumber(args.duration, {
      //   name: "position-duration",
      //   message: "Enter position duration (in seconds)",
      // });

      // const checkpointDuration = await requiredNumber(args.checkpoint, {
      //   name: "checkpoint-duration",
      //   message: "Enter checkpoint duration (in seconds)",
      // });

      const timeStretchDecimalStr = await requiredString(args.timeStretch, {
        name: "time-stretch",
        message: "Enter time stretch",
      });

      signale.info(
        "timeStretchDecimalStr",
        calculateTimeStretch(timeStretchDecimalStr),
      );

      // const governance = await requiredString(args.governance, {
      //   name: "governance",
      //   message: "Enter governance address",
      // });

      // const feeCollector = await requiredString(args.feeCollector, {
      //   name: "fee-collector",
      //   message: "Enter fee collector address",
      //   initial: governance,
      // });

      // const curveFee = await requiredString(args.curveFee, {
      //   name: "curve-fee",
      //   message: "Enter curve fee",
      // });

      // const flatFee = await requiredString(args.flatFee, {
      //   name: "flat-fee",
      //   message: "Enter flat fee",
      // });

      // const governanceFee = await requiredString(args.governanceFee, {
      //   name: "governance-fee",
      //   message: "Enter governance fee",
      // });

      // const contribution = await requiredString(args.contribution, {
      //   name: "contribution",
      //   message: "Enter contribution",
      // });

      // const apr = await requiredString(args.apr, {
      //   name: "apr",
      //   message: "Enter APR",
      // });

      // const extraData = (
      //   await requiredArray(args.extraData?.map(String), {
      //     name: "initialize-extra-data",
      //     message: "Enter extra data",
      //     validate: () => true,
      //   })
      // ).filter(Boolean);

      // const publicClient = createPublicClient({
      //   transport: http(rpcUrl),
      //   chain,
      // });

      // const decimals = (await publicClient.readContract({
      //   abi: ERC20.abi,
      //   address: baseToken as `0x${string}`,
      //   functionName: "decimals",
      // })) as number;

      // const walletClient = createWalletClient({
      //   account,
      //   transport: http(rpcUrl),
      //   chain,
      // });

      // signale.pending("Deploying Hyperdrive...");

      // const hash = await walletClient.writeContract({
      //   abi: HyperdriveFactory.abi,
      //   address: address as `0x${string}`,
      //   functionName: "deployAndInitialize",
      //   args: [
      //     {
      //       baseToken: baseToken as `0x${string}`,
      //       linkerFactory: linker as `0x${string}`,
      //       linkerCodeHash: linkerHash as `0x${string}`,
      //       minimumShareReserves: parseUnits(minShareReserves, decimals),
      //       minimumTransactionAmount: parseUnits(minTxAmount, decimals),
      //       precisionThreshold: BigInt(precisionThreshold),
      //       positionDuration: BigInt(positionDuration),
      //       checkpointDuration: BigInt(checkpointDuration),
      //       timeStretch: calculateTimeStretch(timeStretchDecimalStr),
      //     }
      //   ]
      // })

      // const hash = await walletClient.writeContract({
      //   abi: HyperdriveFactory.abi,
      //   // abi,
      //   address: address as `0x${string}`,
      //   functionName: "deployAndInitialize",
      //   args: [
      //     {
      //       baseToken: baseToken as `0x${string}`,
      //       initialSharePrice: parseUnits(initialSharePrice, decimals),
      //       minimumShareReserves: parseUnits(minimumShareReserves, decimals),
      //       minimumTransactionAmount: parseUnits(
      //         minimumTransactionAmount,
      //         decimals,
      //       ),
      //       positionDuration: BigInt(positionDuration),
      //       checkpointDuration: BigInt(checkpointDuration),
      //       timeStretch: calculateTimeStretch(timeStretchDecimalStr, decimals),
      //       governance: governance as `0x${string}`,
      //       feeCollector: feeCollector as `0x${string}`,
      //       fees: {
      //         curve: parseUnits(curveFee, decimals),
      //         flat: parseUnits(flatFee, decimals),
      //         governance: parseUnits(governanceFee, decimals),
      //       },
      //       oracleSize: BigInt(oracleSize),
      //       updateGap: BigInt(updateGap),
      //     },
      //     extraData as `0x${string}`[],
      //     parseUnits(contribution, decimals),
      //     parseUnits(apr, decimals),
      //     // initExtraData,
      //   ],
      //   account,
      // });

      // signale.pending(`Hyperdrive deployment tx submitted: ${hash}`);

      // const receipt = await publicClient.waitForTransactionReceipt({ hash });

      // signale.success(`Hyperdrive deployed @ ${receipt}`);
    },
  });
