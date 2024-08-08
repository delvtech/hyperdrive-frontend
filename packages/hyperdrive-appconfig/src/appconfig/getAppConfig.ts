import { ReadRegistry } from "@delvtech/hyperdrive-viem";
import uniqBy from "lodash.uniqby";
import { AppConfig } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getCustomHyperdrive } from "src/hyperdrives/custom/getCustomHyperdrive";
import { getMorphoHyperdrive } from "src/hyperdrives/morpho/getMorphoHyperdrive";
import { getStethHyperdrive } from "src/hyperdrives/steth/getStethHyperdrive";
import { protocols } from "src/protocols";
import { TokenConfig } from "src/tokens/getTokenConfig";
import {
  DAI_ICON_URL,
  ETH_ICON_URL,
  EZETH_ICON_URL,
  RETH_ICON_URL,
  SDAI_ICON_URL,
} from "src/tokens/tokenIconsUrls";
import { yieldSources } from "src/yieldSources";
import { Address, PublicClient } from "viem";

export async function getAppConfig({
  chainId,
  registryAddress,
  publicClient,
}: {
  chainId: number;
  registryAddress: Address;
  publicClient: PublicClient;
}): Promise<AppConfig> {
  const tokens: TokenConfig[] = [];

  // Get ReadHyperdrive instances from the registry to ensure
  // that only registered pools are delivered to the frontend
  const registry = new ReadRegistry({
    address: registryAddress,
    publicClient,
  });
  const hyperdrives = await registry.getInstances();

  const configs: HyperdriveConfig[] = await Promise.all(
    hyperdrives.map(async (hyperdrive) => {
      // TODO: Replace this with a call to hyperdrive.getKind()
      const hackName = await publicClient.readContract({
        address: hyperdrive.address,
        abi: hyperdrive.contract.abi,
        functionName: "name",
      });

      if (
        [
          "MORPHO_BLUE_DAI_14_DAY", // sepolia
          "ElementDAO 182 Day sUSDe/DAI Hyperdrive", // mainnet
        ].includes(hackName)
      ) {
        const { baseToken, hyperdriveConfig } = await getMorphoHyperdrive({
          hyperdrive,
          baseTokenTags: ["stablecoin"],
          baseTokenIconUrl: DAI_ICON_URL,
          baseTokenPlaces: 2,
          yieldSourceId: "morphoBlueSusdeDai",
        });

        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      const token = await hyperdrive.getSharesToken();
      const tokenSymbol = (
        await token.getSymbol()
      ).toUpperCase() as Uppercase<string>;

      if (
        [
          "DELV", // cloudchain
          "SDAI", // sepolia and mainnet
        ].includes(tokenSymbol)
      ) {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getCustomHyperdrive({
            hyperdrive,
            yieldSource: "makerDsr",
            depositOptions: {
              isBaseTokenDepositEnabled: true,
              isShareTokenDepositsEnabled: true,
            },
            withdrawalOptions: {
              isBaseTokenWithdrawalEnabled: true,
              isShareTokenWithdrawalEnabled: true,
            },
            baseTokenIconUrl: DAI_ICON_URL,
            baseTokenTags: ["stablecoin"],
            sharesTokenIconUrl: SDAI_ICON_URL,
            tokenPlaces: 2,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      // Lido stETH
      if (tokenSymbol === "STETH") {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getStethHyperdrive({
            hyperdrive,
            chainId,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      // Rocket Pool
      if (tokenSymbol === "RETH") {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getCustomHyperdrive({
            hyperdrive,
            yieldSource: "reth",
            depositOptions: {
              // don't let users deposit sepolia eth into the testnet
              isBaseTokenDepositEnabled: false,
              isShareTokenDepositsEnabled: true,
            },
            withdrawalOptions: {
              // you can't withdraw eth from staking protocols
              isBaseTokenWithdrawalEnabled: false,
              isShareTokenWithdrawalEnabled: true,
            },
            baseTokenIconUrl: ETH_ICON_URL,
            sharesTokenIconUrl: RETH_ICON_URL,
            sharesTokenTags: ["liquidStakingToken"],
            tokenPlaces: 4,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      // Renzo ezETH
      if (tokenSymbol === "EZETH") {
        const { sharesToken, baseToken, hyperdriveConfig } =
          await getCustomHyperdrive({
            hyperdrive,
            yieldSource: "ezEth",
            depositOptions: {
              // don't let users deposit sepolia eth into the testnet
              isBaseTokenDepositEnabled: false,
              isShareTokenDepositsEnabled: true,
            },
            withdrawalOptions: {
              // you can't withdraw eth from staking protocols
              isBaseTokenWithdrawalEnabled: false,
              isShareTokenWithdrawalEnabled: true,
            },
            baseTokenIconUrl: ETH_ICON_URL,
            sharesTokenIconUrl: EZETH_ICON_URL,
            sharesTokenTags: ["liquidStakingToken"],
            tokenPlaces: 4,
          });

        tokens.push(sharesToken);
        tokens.push(baseToken);

        return hyperdriveConfig;
      }

      throw new Error(
        `Missing Hyperdrive config implementation for address: ${hyperdrive.address}`,
      );
    }),
  );

  const config: AppConfig = {
    chainId,
    tokens: uniqBy(tokens, "address"),
    registryAddress,
    hyperdrives: configs,
    protocols,
    yieldSources,
  };

  return config;
}
