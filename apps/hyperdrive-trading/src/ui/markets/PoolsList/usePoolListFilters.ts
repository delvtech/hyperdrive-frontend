import {
  appConfig,
  ChainConfig,
  HyperdriveConfig,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useMemo } from "react";
import { getDepositAssets } from "src/hyperdrive/getDepositAssets";

export interface PoolListFilters {
  chains: {
    chain: ChainConfig;
    count: number;
  }[];
  assets: {
    asset: TokenConfig;
    count: number;
  }[];
}

/**
 * Parses a list of hyperdrives into a dictionary containing all chains and
 * assets with their counts
 */
export function usePoolListFilters({
  hyperdrives,
}: {
  hyperdrives: HyperdriveConfig[] | undefined;
}): PoolListFilters | undefined {
  return useMemo(() => {
    if (!hyperdrives) {
      return;
    }

    const chainsById: {
      [id: number]: {
        chain: ChainConfig;
        count: number;
      };
    } = {};
    const assetsBySymbol: {
      [symbol: string]: {
        asset: TokenConfig;
        count: number;
      };
    } = {};

    for (const hyperdrive of hyperdrives) {
      const depositAssets = getDepositAssets(hyperdrive);
      chainsById[hyperdrive.chainId] ||= {
        chain: appConfig.chains[hyperdrive.chainId],
        count: 0,
      };
      chainsById[hyperdrive.chainId].count += 1;

      for (const asset of depositAssets) {
        assetsBySymbol[asset.symbol] ||= {
          asset,
          count: 0,
        };
        assetsBySymbol[asset.symbol].count += 1;
      }
    }

    return {
      chains: Object.values(chainsById).sort((a, b) =>
        a.chain.name.localeCompare(b.chain.name),
      ),
      assets: Object.values(assetsBySymbol).sort((a, b) =>
        a.asset.symbol.localeCompare(b.asset.symbol),
      ),
    };
  }, [hyperdrives]);
}
