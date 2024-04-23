import { AppConfig } from "@hyperdrive/appconfig";
import { ReadHyperdriveModel } from "src/hyperdrive/model/ReadHyperdriveModel";
import { Address, PublicClient } from "viem";

const MetaMorphoSnippetsABI = [
  {
    inputs: [
      { internalType: "address", name: "morphoAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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

export class ReadMetaMorphoHyperdriveModel extends ReadHyperdriveModel {
  constructor({
    hyperdriveAddress,
    appConfig,
    publicClient,
  }: {
    publicClient: PublicClient;
    hyperdriveAddress: Address;
    appConfig: AppConfig;
  }) {
    super({ hyperdriveAddress, appConfig, publicClient });
  }

  async getYieldSourceRate(): Promise<bigint> {
    const chainId = await this.publicClient.getChainId();
    switch (chainId) {
      case 11155111:
        const rate = await this.publicClient.readContract({
          address: "0xf5461A30b3723085F8E702fCc7461db85481c173",
          abi: MetaMorphoSnippetsABI,
          functionName: "supplyAPYVault",
          args: [this.sharesToken.address],
        });
        console.log(rate);

        return rate;
      case 31337:
      case 42069:
      default:
        throw new Error("Not reachable.");
    }
  }
}
