import { expect, test } from "vitest";

import { publicClient } from "src/testing/utils";
import { HyperdriveABI, getPoolConfig } from "..";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
test("gets the fixed APR", async () => {
  const { shareReserves, bondReserves } = await publicClient.readContract({
    address: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
    abi: HyperdriveABI,
    functionName: "getMarketState",
  });
  const poolConfig = await getPoolConfig({
    publicClient,
    hyperdriveAddress: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
  });
});
