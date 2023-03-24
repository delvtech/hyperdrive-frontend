import { BigNumber } from "ethers";

/**
 * Create a type based on T where all BigNumber properties are changed to bigint
 */
export type Hack_BigNumberToBigInt<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends BigNumber ? bigint : T[K];
};
