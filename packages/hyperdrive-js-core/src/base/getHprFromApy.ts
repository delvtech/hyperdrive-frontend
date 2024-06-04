import { hyperwasm } from "src/hyperwasm";
export function getHprFromApy(apy: bigint, positionDuration: bigint): bigint {
  return BigInt(hyperwasm.calcHprGivenApy(apy.toString(), positionDuration.toString()));
}
