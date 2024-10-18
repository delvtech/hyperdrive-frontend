import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import coinsJSON from "src/token/coins.json";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Currencies, Currency, Money } from "ts-money";
import { base, gnosis, linea, mainnet } from "viem/chains";
export async function getTokenFiatPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: string;
  chainId: number;
}): Promise<bigint | undefined> {
  // Always use mainnet ETH as the reference for native ETH price, regardless of
  // the current chain.
  let defiLlamaTokenId = `${defiLlamaChainNameIdentifier[chainId]}:${tokenAddress}`;
  if (tokenAddress === ETH_MAGIC_NUMBER) {
    defiLlamaTokenId = `ethereum:${ETH_MAGIC_NUMBER}`;
  }

  const response = await fetch(
    `https://coins.llama.fi/prices/current/${defiLlamaTokenId}`
  );
  const data = await response.json();
  const price = data?.coins?.[defiLlamaTokenId]?.price ?? 0n;

  const coinGeckoId = getCoinGeckoId(tokenAddress);
  if (coinGeckoId) {
    const coinGeckoPrice = await fetchCoinGeckoPrice(
      coinGeckoId,
      Currencies.USD
    );
    return fixed(coinGeckoPrice.amount).bigint;
  }

  return parseFixed(price).bigint;
}

// NOTE: DefiLlama chain name identifier must be lower case.
export const defiLlamaChainNameIdentifier: Record<number, string> = {
  [mainnet.id]: "ethereum",
  [gnosis.id]: "gnosis",
  [linea.id]: "linea",
  [base.id]: "base",
};

export async function fetchCoinGeckoPrice(
  coinGeckoId: string,
  currency: Currency
): Promise<Money> {
  const currencyCode = currency.code.toLowerCase();
  const result = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinGeckoId}&vs_currencies=${currencyCode}`
  );

  // Result looks like:
  // { dai: { usd: 1.01 } }
  const resultJSON = (await result.json()) as Record<
    string,
    Record<string, number>
  >;

  const price = resultJSON[coinGeckoId][currencyCode];

  return Money.fromDecimal(price, currency);
}

export function getCoinGeckoId(
  address: string | undefined
): string | undefined {
  if (!address) {
    return;
  }

  return CoinGeckoIds[address];
}

const CoinGeckoIds: {
  [address: string]: string;
} = {};

coinsJSON.forEach((value) => {
  if (value.address) {
    CoinGeckoIds[value.address] = value.id;
  }
});
