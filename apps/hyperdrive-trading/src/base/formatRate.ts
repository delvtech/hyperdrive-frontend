import { format } from "d3-format";
import { formatUnits } from "viem";

export function formatRate(rate: bigint, decimals = 18): string {
  // APR is stored in 18 decimals, so to avoid rounding errors, eg:
  // 0.049999999999999996 * 100 = 5, we just take the first 10 characters after
  // the decimal, and format those to a percent, eg: 0.0499999999 * 100 = 4.99.
  const truncatedAPR = +formatUnits(rate, decimals).slice(0, 10);

  function formatter(value: number) {
    const formatter = format(",.2f");
    let formattedNumber = formatter(value);

    if (value < 0) {
      // Replace the minus character with the hyphen-minus character.
      // D3-format returns negative numbers with a minus character,
      // which matches what Number.prototype.toString() returns.
      // However, the minus sign on your keyboard maps to the hyphen-minus
      // character, and is more useful in tests.
      formattedNumber = formattedNumber.replace("−", "-");
    }
    return formattedNumber;
  }
  return formatter(truncatedAPR * 100);
}
