import { ReadContract } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/base/ReadHyperdrive";

// See: https://www.notion.so/delv-tech/Testnet-Addresses-911a0f422f374059afa5c40d76373de6
const SEPOLIA_METAMORPHO_SNIPPETS_ADDRESS =
  "0xf5461A30b3723085F8E702fCc7461db85481c173";

export class ReadMetaMorphoHyperdrive extends readMetaMorphoHyperdriveMixin(
  ReadHyperdrive
) {}

/**
 * @internal
 */
export interface ReadMetaMorphoHyperdriveMixin {
  metaMorphoContract: ReadContract<MetaMorphoSnippetsABI>;
}

/**
 * @internal
 */
export function readMetaMorphoHyperdriveMixin<
  T extends Constructor<ReadHyperdrive>
>(Base: T): Constructor<ReadMetaMorphoHyperdriveMixin> & T {
  return class extends Base {
    metaMorphoContract: ReadContract<MetaMorphoSnippetsABI>;

    constructor(...[options]: any[]) {
      const {
        debugName = "MetaMorpho Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadHyperdriveOptions;
      super({ address, contractFactory, network, cache, debugName, namespace });

      this.metaMorphoContract = this.contractFactory({
        abi: metaMorphoSnippetsABI,
        // TODO: Refactor to a switch/case on chainId once evm-client has chainId
        // support on the Network interface
        address: SEPOLIA_METAMORPHO_SNIPPETS_ADDRESS,
        cache,
        namespace,
      });
    }
  };
}

type MetaMorphoSnippetsABI = typeof metaMorphoSnippetsABI;
const metaMorphoSnippetsABI = [
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "loanToken", type: "address" },
          { internalType: "address", name: "collateralToken", type: "address" },
          { internalType: "address", name: "oracle", type: "address" },
          { internalType: "address", name: "irm", type: "address" },
          { internalType: "uint256", name: "lltv", type: "uint256" },
        ],
        internalType: "struct MarketParams",
        name: "marketParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "totalSupplyAssets",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalSupplyShares",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalBorrowAssets",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalBorrowShares",
            type: "uint128",
          },
          { internalType: "uint128", name: "lastUpdate", type: "uint128" },
          { internalType: "uint128", name: "fee", type: "uint128" },
        ],
        internalType: "struct Market",
        name: "market",
        type: "tuple",
      },
    ],
    name: "supplyAPYMarket",
    outputs: [{ internalType: "uint256", name: "supplyApy", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "vault", type: "address" }],
    name: "supplyAPYVault",
    outputs: [
      { internalType: "uint256", name: "avgSupplyApy", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
