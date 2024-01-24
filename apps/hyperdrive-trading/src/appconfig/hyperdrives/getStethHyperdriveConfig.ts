import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { HyperdriveConfig } from "src/appconfig/HyperdriveConfig";
import { TokenConfig } from "src/appconfig/TokenConfig";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";
import { Address, PublicClient } from "viem";
import { formatHyperdriveName } from "./formatHyperdriveName";

// This magic number is the baseToken for the stethHyperdrive market. It
// signifies that the base asset is actually native ETH. However, in this market
// you can deposit either native Eth or stETH. To get the stETH token, we need
// to use the stethHyperdrive.lido() address, which is the same thing as stETH.
export const ETH_MAGIC_NUMBER = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export async function getStethHyperdriveConfig({
  hyperdriveAddress,
  publicClient,
  yieldSource,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  yieldSource: keyof typeof yieldSources;
}): Promise<HyperdriveConfig> {
  const { positionDuration, baseToken: baseTokenAddress } =
    await publicClient.readContract({
      abi: IHyperdrive.abi,
      functionName: "getPoolConfig",
      address: hyperdriveAddress,
    });

  const baseToken: TokenConfig = {
    address: baseTokenAddress,
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
    iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
  };

  // This is specific to the yield source
  const sharesToken: TokenConfig = {
    name: "",
    symbol: "",
    decimals: 0,
    address: "0x",
  };

  const termLengthMS = Number(positionDuration) * 1000;
  const name = formatHyperdriveName({
    termLengthMS,
    baseTokenSymbol: baseToken.symbol,
    yieldSourceShortName: yieldSources[yieldSource].shortName,
  });

  return {
    address: hyperdriveAddress,
    termLengthMS,
    name,
    yieldSource,
    withdrawOptions: {
      // You can't withdraw ETH from the stETH hyperdrive, since converting
      // stETH back to ETH is a multi-step, multi-day process in Lido. Users of
      // stETH hyperdrive will need to withdraw as stETH (sharesToken), and
      // unwind back to ETH themselves.
      isBaseTokenWithdrawalEnabled: false,
    },
    baseToken,
    sharesToken,
  };
}
