import coinsJSON from "src/token/coin-gecko.json";

/**
 * Lookup object for getting the CoinGecko coin id from the coin or token's
 * symbol.
 *
 *  Eg:
 *  CoinGeckoIds.eth === 'ethereum' // true
 *
 * This can then be used to make calls to CoinGecko apis about ethereum, ie: price apis.
 *
 * TODO: This can be auto-generated instead of created at runtime.
 */
const CoinGeckoIds: {
  [symbol: string]: string;
  // eslint-disable-next-line unicorn/no-array-reduce
} = coinsJSON.reduce(
  (memo, value) => ({ ...memo, [value.symbol]: value.id }),
  {},
);

function getCoinGeckoId(symbol: string): string | undefined {
  if (!symbol) {
    return;
  }

  return CoinGeckoIds[symbol.toLowerCase()];
}
export async function fetchCoinGeckoPrice(
  tokenSymbol: string,
): Promise<number> {
  const coinGeckoId = getCoinGeckoId(tokenSymbol);
  const result = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinGeckoId}&vs_currencies=usd`,
  );

  // Result looks like:
  // { dai: { usd: 1.01 } }
  const resultJSON = (await result.json()) as Record<
    string,
    Record<string, number>
  >;

  if (!coinGeckoId) {
    return 0;
  }
  const price = resultJSON[coinGeckoId].usd;
  return price;
}
