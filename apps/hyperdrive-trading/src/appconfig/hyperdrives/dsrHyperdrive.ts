import { HyperdriveABI } from "@hyperdrive/core";
import { Hyperdrive } from "src/appconfig/types";
import { Address, PublicClient } from "viem";

export async function getDSRHyperdrive(
  dsrHyperdriveAddress: Address,
  publicClient: PublicClient,
): Promise<Hyperdrive> {
  // We know the baseToken is Dai because it's the dai savings rate hyperdrive
  const daiTokenAddress = await publicClient.readContract({
    abi: HyperdriveABI,
    functionName: "baseToken",
    address: dsrHyperdriveAddress,
  });

  const { positionDuration } = await publicClient.readContract({
    abi: HyperdriveABI,
    functionName: "getPoolConfig",
    address: dsrHyperdriveAddress,
  });

  return {
    address: dsrHyperdriveAddress,
    termLength: Number(positionDuration),
    name: "Dai Savings Rate",
    yieldSource: "Maker DSR",
    baseToken: {
      address: daiTokenAddress,
      decimals: 18, // No need to fetch this, Dai is always 18 decimals
      name: "DAI", // No need to fetch this, Dai is always called DAI
      symbol: "DAI",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024",
    },
  };
}
