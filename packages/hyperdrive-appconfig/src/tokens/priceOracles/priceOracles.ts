import { fetchDefiLlamaTokenPrice } from "src/tokens/priceOracles/defillama";
import { PriceOracleFn, PriceOracleId } from "src/tokens/types";

export const priceOracles: Record<PriceOracleId, PriceOracleFn> = {
  defillama: fetchDefiLlamaTokenPrice,
};
