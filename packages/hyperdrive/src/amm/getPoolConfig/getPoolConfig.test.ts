/**
 * @vitest-environment jsdom
 */
import { getPoolConfig } from "src/amm/getPoolConfig/getPoolConfig";
import { createTestClient, http, publicActions } from "viem";
import { foundry } from "viem/chains";
import { expect, test } from "vitest";

const testClient = createTestClient({
  chain: foundry,
  mode: "anvil",
  transport: http(),
}).extend(publicActions);

test("multiplyBigInt: simple multiplication", async () => {
  const result = await getPoolConfig({
    hyperdriveAddress: "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81",
    publicClient: testClient,
  });
  expect(result).toEqual(250n);
});
