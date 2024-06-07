import { hyperwasm } from "src/hyperwasm";
export function getHprFromApr(apr: bigint, positionDuration: bigint): bigint {
  const result = hyperwasm.calcHprGivenApr(
    apr.toString(),
    positionDuration.toString(),
  );
  return BigInt(result);
}
