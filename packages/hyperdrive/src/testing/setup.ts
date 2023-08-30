import { pool, testClient } from "src/testing/utils";
import { Hash } from "viem";
import { fetchLogs } from "@viem/anvil";
import { afterEach, beforeAll } from "vitest";

let snapshot: Hash;
beforeAll(async () => {
  // get the state dump once at the very beginning
  snapshot = await testClient.request({
    method: "evm_snapshot",
  });
});

afterEach(async (context) => {
  await testClient.request({
    method: "evm_revert",
    params: [snapshot],
  });

  context.onTestFailed(async () => {
    // If a test fails, you can fetch and print the logs of your anvil instance.
    const logs = await fetchLogs("http://127.0.0.1:8546", pool);
    // Only print the 20 most recent log messages.
    console.log(...logs.slice(-20));
  });
});
