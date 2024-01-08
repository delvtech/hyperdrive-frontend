import Big from "big.js";

export function calculateTimeStretch(apr: string): bigint {
  const timeStretch = Big("5.24592e18").div(
    Big("0.04665e18").mul(parseFloat(apr) * 100),
  );
  const result = Big("1e18").div(timeStretch);
  return BigInt(result.toFixed(0));
}
