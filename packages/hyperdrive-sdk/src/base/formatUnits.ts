export function formatUnits(value: bigint, decimals: number): string {
  let display = value.toString();

  const negative = display.startsWith("-");
  if (negative) {
    display = display.slice(1);
  }

  display = display.padStart(decimals, "0");

  const integer = display.slice(0, display.length - decimals);
  let fraction = display.slice(display.length - decimals);
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${
    fraction ? `.${fraction}` : ""
  }`;
}
