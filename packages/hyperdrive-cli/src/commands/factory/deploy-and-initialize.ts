import { ERC20ForwarderFactory } from "@delvtech/hyperdrive-artifacts/ERC20ForwarderFactory";
import { HyperdriveFactory } from "@delvtech/hyperdrive-artifacts/HyperdriveFactory";
import { command } from "clide-js";
import {
  Address,
  ContractFunctionArgs,
  createPublicClient,
  createWalletClient,
  Hex,
  http,
  parseUnits,
  toHex,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { chainOption, getChain } from "../../common-options/chain.js";
import { rpcUrlOption } from "../../common-options/rpc-url.js";
import { walletKeyOption } from "../../common-options/wallet-key.js";
import { DAY } from "../../utils/constants.js";

export default command({
  description: "Deploy a Hyperdrive instance with the factory's configuration.",

  options: {
    id: {
      alias: ["deployment-id"],
      description: "The deployment ID to use when deploying the pool.",
      type: "string",
      default: "0xA55555",
    },
    coordinator: {
      alias: ["deployer-coordinator"],
      description:
        "The address of the IHyperdriveDeployerCoordinator contract.",
      type: "string",
      required: true,
    },
    "base-token": {
      description: "The address of the base token.",
      type: "string",
      required: true,
    },
    "shares-token": {
      description: "The address of the vault shares token.",
      type: "string",
      required: true,
    },
    linker: {
      alias: ["linker-factory"],
      description: "The linker factory used by this Hyperdrive instance.",
      type: "string",
    },
    "linker-hash": {
      alias: ["linker-code-hash"],
      description:
        "The hash of the ERC20 linker's code. This is used to derive the create2 addresses of the ERC20 linkers used by this instance. Defaults to the linker-factory's ERC20LINK_HASH.",
      type: "string",
    },
    "min-reserves": {
      alias: ["minimum-share-reserves"],
      description: "The minimum share reserves.",
      type: "string",
      default: "10.0",
    },
    "min-transaction": {
      alias: ["minimum-transaction-amount"],
      description:
        "The minimum amount of tokens that a position can be opened or closed with.",
      type: "string",
      default: "0.001",
    },
    "position-duration": {
      description: "The duration of a position prior to maturity. (In seconds)",
      type: "number",
      default: 30 * DAY,
    },
    "checkpoint-duration": {
      description: "The duration of a checkpoint. (In seconds)",
      type: "number",
      default: 1 * DAY,
    },
    gov: {
      alias: ["governance"],
      description:
        "The address of the governance contract. Defaults to the deployer.",
      type: "string",
    },
    "fee-collector": {
      description:
        "The address which collects governance fees. Defaults to governance.",
      type: "string",
    },
    "sweep-collector": {
      description:
        "The address which collects swept tokens. Defaults to the governance.",
      type: "string",
    },
    "curve-fee": {
      description: "The LP fee applied to the curve portion of a trade.",
      type: "string",
      default: "0.01",
    },
    "flat-fee": {
      description: "The LP fee applied to the flat portion of a trade.",
      type: "string",
      // TODO: Should the value be annualized by the command?
      default: "0.0005",
    },
    "gov-lp-fee": {
      alias: ["governance-lp-fee"],
      description: "The portion of the LP fee that goes to governance.",
      type: "string",
      default: "0.15",
    },
    "gov-zombie-fee": {
      alias: ["governance-zombie-fee"],
      description:
        "The portion of the zombie interest that goes to governance.",
      type: "string",
      default: "0.03",
    },
    "extra-data": {
      description:
        "The extra data that contains data necessary for the specific deployer.",
      type: "string",
    },
    contribution: {
      description: "The contribution amount in base to the pool.",
      type: "string",
      default: "100.0",
    },
    "fixed-apr": {
      description: "The fixed APR used to initialize the pool.",
      type: "string",
      default: "0.05",
    },
    "time-stretch-apr": {
      description: "The time stretch APR used to initialize the pool.",
      type: "string",
      default: "0.05",
    },
    destination: {
      description:
        "The address that receives the proceeds of a trade or LP action. Defaults to the deployer.",
      type: "string",
    },
    "as-base": {
      description:
        "A boolean indicating that the trade or LP action should be settled in base if true and in the yield source shares if false.",
      type: "boolean",
      default: true,
    },
    "options-extra-data": {
      description:
        "Additional data that can be used to implement custom logic in implementation contracts.",
      type: "string",
    },
    salt: {
      description: "The create2 salt to use for the deployment.",
      type: "string",
      default: "0x666",
    },
    chain: chainOption,
    rpc: rpcUrlOption,
    wallet: walletKeyOption,
  },

  handler: async ({ data, options, next }) => {
    const address = data as Address;

    const chain = await getChain(options.chain);
    const rpcUrl = await options.rpc({
      prompt: "Enter RPC URL",
    });
    const walletKey = await options.wallet({
      prompt: "Enter wallet key",
    });

    const account = privateKeyToAccount(walletKey as `0x${string}`);
    const publicClient = createPublicClient({
      chain,
      transport: http(rpcUrl),
    });
    const walletClient = createWalletClient({
      account,
      chain,
      transport: http(rpcUrl),
    });

    const idString = await options.id();
    const id = toHex(BigInt(idString), { size: 32 });

    const saltString = await options.salt();
    const salt = toHex(BigInt(saltString), { size: 32 });

    const extraData = (await options.extraData()) as Hex | undefined;
    const destination = (await options.destination()) as Address | undefined;
    const asBase = await options.asBase();
    const optionsExtraData = (await options.optionsExtraData()) as
      | Hex
      | undefined;

    const coordinator = await options.coordinator({
      prompt: "Enter deployer coordinator address",
    });

    const baseToken = await options.baseToken({
      prompt: "Enter base token address",
    });

    const sharesToken = await options.sharesToken({
      prompt: "Enter shares token address",
    });

    let linkerFactory = await options.linker();
    if (!linkerFactory) {
      linkerFactory = await publicClient.readContract({
        abi: HyperdriveFactory.abi,
        address,
        functionName: "linkerFactory",
      });
    }

    let linkerCodeHash = await options.linkerHash();
    if (!linkerCodeHash) {
      linkerCodeHash = await publicClient.readContract({
        abi: ERC20ForwarderFactory.abi,
        address: linkerFactory as Address,
        functionName: "ERC20LINK_HASH",
      });
    }

    const minReserves = await options.minReserves({
      prompt: "Enter minimum share reserves",
    });

    const minTransaction = await options.minTransaction({
      prompt: "Enter minimum transaction amount",
    });

    const positionDuration = await options.positionDuration({
      prompt: "Enter position duration",
    });

    const checkpointDuration = await options.checkpointDuration({
      prompt: "Enter checkpoint duration",
    });

    const governance = (await options.gov({
      prompt: {
        message: "Enter governance address",
        initial: account.address,
      },
    })) as Address | undefined;

    const feeCollector = (await options.feeCollector({
      prompt: {
        message: "Enter fee collector address",
        initial: governance || account.address,
      },
    })) as Address | undefined;

    const sweepCollector = (await options.sweepCollector({
      prompt: {
        message: "Enter sweep collector address",
        initial: governance || account.address,
      },
    })) as Address | undefined;

    const curveFee = await options.curveFee({
      prompt: "Enter curve fee",
    });

    const flatFee = await options.flatFee({
      prompt: "Enter flat fee",
    });

    const govLpFee = await options.govLpFee({
      prompt: "Enter governance LP fee",
    });

    const govZombieFee = await options.govZombieFee({
      prompt: "Enter governance zombie fee",
    });

    const contribution = await options.contribution({
      prompt: "Enter contribution amount",
    });

    const fixedApr = await options.fixedApr({
      prompt: "Enter initial fixed APR",
    });

    const timeStretchApr = await options.timeStretchApr({
      prompt: "Enter initial time stretch APR",
    });

    const config: PoolDeployConfig = {
      baseToken: baseToken as Address,
      vaultSharesToken: sharesToken as Address,
      linkerFactory: linkerFactory as Address,
      linkerCodeHash: linkerCodeHash as Hex,
      minimumShareReserves: BigInt(parseUnits(minReserves, 18)),
      minimumTransactionAmount: BigInt(parseUnits(minTransaction, 18)),
      positionDuration: BigInt(positionDuration),
      checkpointDuration: BigInt(checkpointDuration),
      timeStretch: BigInt(0), // NOTE: Will be overwritten.
      governance: governance || account.address,
      feeCollector: feeCollector || governance || account.address,
      sweepCollector: sweepCollector || governance || account.address,
      fees: {
        curve: BigInt(parseUnits(curveFee, 18)),
        flat: BigInt(parseUnits(flatFee, 18)),
        governanceLP: BigInt(parseUnits(govLpFee, 18)),
        governanceZombie: BigInt(parseUnits(govZombieFee, 18)),
      },
    };

    const fixedAprInt = BigInt(parseUnits(fixedApr, 18));
    const timeStretchAprInt = BigInt(parseUnits(timeStretchApr, 18));

    console.log([
      id,
      coordinator as Address,
      config,
      extraData || "0x0",
      fixedAprInt,
      timeStretchAprInt,
      BigInt(0),
      salt,
    ]);

    const target0 = await walletClient.writeContract({
      address,
      abi: HyperdriveFactory.abi,
      functionName: "deployTarget",
      args: [
        id,
        coordinator as Address,
        config,
        extraData || "0x0",
        fixedAprInt,
        timeStretchAprInt,
        BigInt(0),
        salt,
      ],
    });

    const target1 = await walletClient.writeContract({
      address,
      abi: HyperdriveFactory.abi,
      functionName: "deployTarget",
      args: [
        id,
        coordinator as Address,
        config,
        extraData || "0x0",
        fixedAprInt,
        timeStretchAprInt,
        BigInt(1),
        salt,
      ],
    });

    const target2 = await walletClient.writeContract({
      address,
      abi: HyperdriveFactory.abi,
      functionName: "deployTarget",
      args: [
        id,
        coordinator as Address,
        config,
        extraData || "0x0",
        fixedAprInt,
        timeStretchAprInt,
        BigInt(2),
        salt,
      ],
    });

    const target3 = await walletClient.writeContract({
      address,
      abi: HyperdriveFactory.abi,
      functionName: "deployTarget",
      args: [
        id,
        coordinator as Address,
        config,
        extraData || "0x0",
        fixedAprInt,
        timeStretchAprInt,
        BigInt(3),
        salt,
      ],
    });

    const target4 = await walletClient.writeContract({
      address,
      abi: HyperdriveFactory.abi,
      functionName: "deployTarget",
      args: [
        id,
        coordinator as Address,
        config,
        extraData || "0x0",
        fixedAprInt,
        timeStretchAprInt,
        BigInt(4),
        salt,
      ],
    });

    const pool = await walletClient.writeContract({
      abi: HyperdriveFactory.abi,
      address,
      functionName: "deployAndInitialize",
      args: [
        id,
        coordinator as Address,
        config,
        extraData || "0x0",
        BigInt(parseUnits(contribution, 18)),
        fixedAprInt,
        timeStretchAprInt,
        {
          asBase,
          destination: destination || account.address,
          extraData: optionsExtraData || "0x0",
        },
        salt,
      ],
    });

    next({
      target0,
      target1,
      target2,
      target3,
      target4,
      pool,
    });
  },
});

type PoolDeployConfig = ContractFunctionArgs<
  typeof HyperdriveFactory.abi,
  "nonpayable",
  "deployTarget"
>[2];
