type PositionType = "long" | "short" | "lp";

export const LATEST_POSITION_BLOCKS_BY_CHAIN_ID: Record<
  number,
  Record<PositionType, bigint>
> = {
  1: {
    long: 22090872n,
    short: 21391567n,
    lp: 22108665n,
  },
  // Gnosis
  100: {
    long: 39086666n,
    short: 39145215n,
    lp: 39083204n,
  },
  // Linea
  59144: {
    long: 10622294n,
    short: 10621975n,
    lp: 15639198n,
  },
  // Base
  8453: {
    long: 28017409n,
    short: 26080016n,
    lp: 27852111n,
  },
};
