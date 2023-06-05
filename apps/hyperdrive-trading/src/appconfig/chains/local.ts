import { HyperdriveABI } from "@hyperdrive/core";
import { AppConfig, Hyperdrive, Token } from "src/appconfig/types";
import { makerDSR } from "src/appconfig/yieldSources/yieldSources";
import { Address } from "viem";
import { PublicClient } from "wagmi";

const LOCALHOST_ADDRESSES_URL = import.meta.env.VITE_LOCALHOST_ADDRESSES_URL;

// The shape of the addresses file at LOCALHOST_ADDRESSES_URL
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
  };
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

  const daiToken: Token = {
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
    baseToken: daiToken,
    termLength: Number(poolConfig.positionDuration),
    name: "Dai Savings Rate",
    yieldSource: "Maker DSR",
  };
}
