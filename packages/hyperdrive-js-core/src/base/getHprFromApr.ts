import { hyperwasm } from "src/hyperwasm";
export function getHprFromApr(apr: bigint, positionDuration: bigint): bigint {
  return hyperwasm.calcHprGivenApr(apr.toString(), positionDuration.toString());
}
