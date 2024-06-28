import { hyperwasm } from "src/hyperwasm";
// TODO: This is now simply a renamed, re-exported hyperwasm function. We should
// consider re-exporting all hyperwasm functions directly or not at all.
export function getHprFromApr(apr: bigint, positionDuration: bigint): bigint {
  return hyperwasm.calcHprGivenApr({ apr, positionDuration });
}
