import { HyperdriveABI } from "@hyperdrive/core";
import { AppConfig, Hyperdrive, Token } from "src/appconfig/types";
import { makerDSR } from "src/appconfig/yieldSources/yieldSources";
import { Address } from "viem";
import { PublicClient } from "wagmi";

const LOCALHOST_ADDRESSES_URL = import.meta.env.VITE_LOCALHOST_ADDRESSES_URL;

interface LocalHyperdriveAddresses {
  dsrHyperdrive: Address;
}

export async function getLocalAppConfig(
  publicClient: PublicClient,
): Promise<AppConfig> {
  const addresses = await fetch(LOCALHOST_ADDRESSES_URL).then(
    (res) => res.json() as Promise<LocalHyperdriveAddresses>,
  );

  const hyperdrives: Hyperdrive[] = [];

  // Add a hyperdrive for each known hyperdrive address given in the address file
  if (addresses.dsrHyperdrive) {
    const dsrHyperdrive = await getDSRHyperdrive(
      publicClient,
      addresses.dsrHyperdrive,
    );
    hyperdrives.push(dsrHyperdrive);
  }

  return {
    chainId: 31337,
    hyperdrives,
    yieldSources: {
      "Maker DSR": makerDSR,
    },
  } as AppConfig;
}

async function getDSRHyperdrive(
  publicClient: PublicClient,
  dsrHyperdriveAddress: Address,
): Promise<Hyperdrive> {
  const daiTokenAddress = await publicClient.readContract({
    abi: HyperdriveABI,
    functionName: "baseToken",
    address: dsrHyperdriveAddress,
  });

  const baseToken: Token = {
    address: daiTokenAddress,
    name: "DAI",
    decimals: 18,
    symbol: "DAI",
    iconUrl:
      "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024",
  };

  const poolConfig = await publicClient.readContract({
    abi: HyperdriveABI,
    functionName: "getPoolConfig",
    address: dsrHyperdriveAddress,
  });

  return {
    address: dsrHyperdriveAddress,
    baseToken,
    termLength: Number(poolConfig.positionDuration),
    name: "Dai Savings Rate",
    yieldSource: "Maker DSR",
  };
}
