export type MorphoRewardsResponse = {
  vaultByAddress: {
    state: {
      totalAssetsUsd: number;
      allocation: {
        supplyAssetsUsd: number;
        market: {
          state: {
            rewards: {
              supplyApr: number;
              asset: {
                address: string;
                name: string;
              };
            }[];
          };
        };
      }[];
      rewards: {
        supplyApr: number;
        asset: {
          name: string;
        };
      }[];
    };
  };
};
