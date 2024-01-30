import { ERC20Mintable } from "@hyperdrive/artifacts/dist/ERC20Mintable.js";
// TODO: As of contracts version 0.7.0, this no longer exists
// import { ForwarderFactory } from "@hyperdrive/artifacts/dist/ForwarderFactory.js";
import { MockERC4626 } from "@hyperdrive/artifacts/dist/MockERC4626.js";
import { command } from "clide-js";
import { ZERO_ADDRESS } from "src/constants.js";
import {
  createPublicClient,
  createWalletClient,
  encodeAbiParameters,
  http,
  parseAbiParameters,
  parseUnits,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "../../reusable-options/chain.js";
import { rpcUrlOption } from "../../reusable-options/rpc-url.js";
import { walletKeyOption } from "../../reusable-options/wallet-key.js";

export default command({
  description: "Deploy a Hyperdrive instance with a factory configuration",

  options: {
    chain: chainOption,
    rpc: rpcUrlOption,
    wallet: walletKeyOption,
    address: {
      description: "The address of the HyperdriveFactory contract",
      type: "string",
      required: true,
    },
    deployer: {
      alias: ["hyperdrive-deployer"],
      description: "The address of the hyperdrive deployer",
      type: "string",
      required: true,
    },
    vault: {
      description: "The address of the vault",
      type: "string",
      required: true,
    },
    linker: {
      alias: ["linker-factory"],
      description:
        "The address of the linker factory used by this Hyperdrive instance",
      type: "string",
      required: true,
      default: ZERO_ADDRESS,
    },
    ["min-share-reserves"]: {
      alias: ["minimum-share-reserves"],
      description: "The minimum share reserves",
      type: "string",
      required: true,
      default: "10",
    },
    ["min-tx-amount"]: {
      alias: ["minimum-transaction-amount"],
      description:
        "The minimum amount of tokens that a position can be opened or closed with",
      type: "string",
      required: true,
      default: "0.001",
    },
    ["duration"]: {
      alias: ["position-duration"],
      description: "The duration of a position prior to maturity (in seconds)",
      type: "number",
      required: true,
      default: 604800,
    },
    ["checkpoint-duration"]: {
      alias: ["checkpoint-duration"],
      description: "The duration of a checkpoint (in seconds)",
      type: "number",
      required: true,
      default: 3600,
    },
    ["time-stretch"]: {
      alias: ["time-stretch-apr"],
      description: "A parameter which decreases slippage around a target rate",
      type: "string",
      required: true,
      default: "0.05",
    },
    governance: {
      description: "The address of the governance contract",
      type: "string",
      required: true,
    },
    collector: {
      alias: ["fee-collector"],
      description: "The address which collects governance fees",
      type: "string",
      required: true,
    },
    "curve-fee": {
      description: "The LP fee applied to the curve portion of a trade",
      type: "string",
      required: true,
      default: "0.1",
    },
    "flat-fee": {
      description: "The LP fee applied to the flat portion of a trade",
      type: "string",
      required: true,
      default: "0.0005",
    },
    "gov-lp-fee": {
      alias: ["governance-lp-fee"],
      description: "The portion of the LP fee that goes to governance",
      type: "string",
      required: true,
      default: "0.01",
    },
    "gov-zombie-fee": {
      alias: ["governance-zombie-fee"],
      description: "The portion of the zombie interest that goes to governance",
      type: "string",
      required: true,
      default: "0.1",
    },
    apr: {
      description: "The apr to call init with",
      type: "string",
      required: true,
      default: "0.05",
    },
    contribution: {
      description: "The amount to supply",
      type: "string",
      required: true,
      default: "10000000.0",
    },
    ["initialize-data"]: {
      alias: ["initialize-extra-data"],
      description: "The extra data for the `initialize` call.",
      type: "string",
      default: "0x0",
    },
  },

  handler: async ({ options, next }) => {
    const chain = await getChain(options.chain);

    const rpcUrl = await options.rpc({
      prompt: "Enter RPC URL",
    });

    const walletKey = await options.wallet({
      prompt: "Enter wallet key",
    });
    const account = privateKeyToAccount(walletKey as `0x${string}`);

    const address = await options.address({
      prompt: "Enter factory address",
    });

    const hyperdriveDeployer = await options.deployer({
      prompt: "Enter deployer address",
    });

    const vault = await options.vault({
      prompt: "Enter vault address",
    });

    const linkerFactory = await options.linkerFactory({
      prompt: "Enter linker factory address",
    });

    const minShareReserves = await options.minShareReserves({
      prompt: "Enter minimum share reserves",
    });

    const minTxAmount = await options.minTxAmount({
      prompt: "Enter minimum transaction amount",
    });

    const positionDuration = await options.positionDuration({
      prompt: "Enter position duration",
    });

    const checkpointDuration = await options.checkpointDuration({
      prompt: "Enter checkpoint duration",
    });

    const timeStretchApr = await options.timeStretchApr({
      prompt: "Enter time stretch APR",
    });

    const governance = await options.governance({
      prompt: {
        message: "Enter governance address",
        initial: account.address,
      },
    });

    const feeCollector = await options.feeCollector({
      prompt: {
        message: "Enter fee collector address",
        initial: governance,
      },
    });

    const curveFee = await options.curveFee({
      prompt: "Enter curve fee",
    });

    const flatFee = await options.flatFee({
      prompt: "Enter flat fee",
    });

    const govLpFee = await options.govLpFee({
      prompt: "Enter governance fee",
    });

    const govZombieFee = await options.govZombieFee({
      prompt: "Enter governance zombie fee",
    });

    const contribution = await options.contribution({
      prompt: "Enter contribution amount",
    });

    const apr = await options.apr({
      prompt: "Enter initial apr",
    });

    const initializeExtraData = await options.initializeExtraData({
      prompt: "Enter initialize extra data",
    });

    const publicClient = createPublicClient({
      transport: http(rpcUrl),
      chain,
    });

    const baseToken = await publicClient.readContract({
      abi: MockERC4626.abi,
      address: vault as `0x${string}`,
      functionName: "asset",
    });

    const decimals = await publicClient.readContract({
      abi: ERC20Mintable.abi,
      address: baseToken as `0x${string}`,
      functionName: "decimals",
    });

    // TODO: As of contracts version 0.7.0, the ForwarderFactory no longer exists
    // const linkerCodeHash =
    //   linkerFactory === ZERO_ADDRESS
    //     ? "0x".padEnd(66, "0")
    //     : await publicClient.readContract({
    //         abi: ForwarderFactory.abi,
    //         address: linkerFactory as `0x${string}`,
    //         functionName: "ERC20LINK_HASH",
    //       });

    const extraData = encodeAbiParameters(
      parseAbiParameters("address, address[]"),
      [vault as `0x${string}`, []],
    );

    const walletClient = createWalletClient({
      account,
      transport: http(rpcUrl),
      chain,
    });

    const allowance = await publicClient.readContract({
      abi: ERC20Mintable.abi,
      address: baseToken as `0x${string}`,
      functionName: "allowance",
      args: [account.address, address as `0x${string}`],
    });

    const parsedContribution = parseUnits(contribution, decimals);

    if (allowance < parsedContribution) {
      const { request } = await publicClient.simulateContract({
        abi: ERC20Mintable.abi,
        address: baseToken as `0x${string}`,
        functionName: "approve",
        args: [address as `0x${string}`, parsedContribution - allowance],
      });

      await walletClient.writeContract(request);
    }

    // TODO: As of contracts version 0.7.0, the deployAndInitialize() method is
    // different, so this code will need to be updated.
    // const { request } = await publicClient.simulateContract({
    //   abi: HyperdriveFactory.abi,
    //   address: address as `0x${string}`,
    //   functionName: "deployAndInitialize",
    //   args: [
    //     hyperdriveDeployer as `0x${string}`,
    //     {
    //       baseToken,
    //       linkerFactory: linkerFactory as `0x${string}`,
    //       linkerCodeHash: linkerCodeHash as `0x${string}`,
    //       minimumShareReserves: parseUnits(minShareReserves, decimals),
    //       minimumTransactionAmount: parseUnits(minTxAmount, decimals),
    //       positionDuration: BigInt(positionDuration),
    //       checkpointDuration: BigInt(checkpointDuration),
    //       timeStretch: calculateTimeStretch(timeStretchApr),
    //       governance: governance as `0x${string}`,
    //       feeCollector: feeCollector as `0x${string}`,
    //       fees: {
    //         curve: parseUnits(curveFee, decimals),
    //         flat: parseUnits(flatFee, decimals),
    //         governanceLP: parseUnits(govLpFee, decimals),
    //         governanceZombie: parseUnits(govZombieFee, decimals),
    //       },
    //     },
    //     extraData,
    //     parsedContribution,
    //     parseUnits(apr, decimals),
    //     initializeExtraData as `0x${string}`,
    //   ],
    // });
    // signale.pending("Deploying and initializing Hyperdrive...");
    // const txHash = await walletClient.writeContract(request);
    // signale.pending(`Deploy and initialize tx submitted: ${txHash}`);
    // const result = await publicClient.waitForTransactionReceipt({
    //   hash: txHash,
    // });
    // let hyperdriveAddress: string | undefined;
    // for (const log of result.logs) {
    //   if (log.address === address) {
    //     hyperdriveAddress = decodeEventLog({
    //       abi: HyperdriveFactory.abi,
    //       eventName: "Deployed",
    //       topics: log.topics,
    //       data: log.data,
    //     }).args.hyperdrive;
    //     break;
    //   }
    // }
    // signale.success(
    //   `Successfully deployed and initialized Hyperdrive @ ${hyperdriveAddress}`,
    // );
    // next(txHash);
  },
});
