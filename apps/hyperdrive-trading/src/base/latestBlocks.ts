type PositionType = "long" | "short" | "lp";

export const POSITION_BLOCK_BOUNDARIES_BY_CHAIN_ID: Record<
  number,
  Record<
    PositionType,
    {
      fromBlock: bigint;
      toBlock: bigint;
    }
  >
> = {
  1: {
    long: {
      fromBlock: 20402093n,
      toBlock: 22090872n,
    },
    short: {
      fromBlock: 20630203n,
      toBlock: 21391567n,
    },
    lp: {
      fromBlock: 20471623n,
      toBlock: 22108665n,
    },
  },
  // Gnosis
  100: {
    long: {
      fromBlock: 37974814n,
      toBlock: 39086666n,
    },
    short: {
      fromBlock: 35855083n,
      toBlock: 39145215n,
    },
    lp: {
      fromBlock: 37745479n,
      toBlock: 39083204n,
    },
  },
  // Linea
  59144: {
    long: {
      fromBlock: 9282349n,
      toBlock: 10622294n,
    },
    short: {
      fromBlock: 10621975n,
      toBlock: 10621975n,
    },
    lp: {
      fromBlock: 10622476n,
      toBlock: 15639198n,
    },
  },
  // Base
  8453: {
    long: {
      fromBlock: 21412173n,
      toBlock: 28017409n,
    },
    short: {
      fromBlock: 26006959n,
      toBlock: 26080016n,
    },
    lp: {
      fromBlock: 21410728n,
      toBlock: 27852111n,
    },
  },
};
