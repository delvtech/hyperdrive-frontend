import { expect, test } from "vitest";
import { ContractEvent } from "src/contract/Contract";
import { ReadContractStub } from "src/contract/stubs/ReadContractStub";
import { CachedReadContract } from "src/contract/cached/CachedReadContract";
import { HyperdriveABI } from "src/abis/Hyperdrive";

test("It caches the read function", async () => {
  const contract = new ReadContractStub(HyperdriveABI);
  const cachedContract = new CachedReadContract({ contract });

  const stubbedValue = ["0x123abc"] as const;
  contract.stubRead("baseToken", stubbedValue);

  const value = await cachedContract.read("baseToken", []);
  expect(value).toBe(stubbedValue);

  const value2 = await cachedContract.read("baseToken", []);
  expect(value2).toBe(stubbedValue);

  const stub = contract.getReadStub("baseToken");
  expect(stub?.callCount).toBe(1);
});

test("It caches the getEvents function", async () => {
  const contract = new ReadContractStub(HyperdriveABI);
  const cachedContract = new CachedReadContract({ contract });

  const stubbedEvents: ContractEvent<typeof HyperdriveABI, "AddLiquidity">[] = [
    {
      eventName: "AddLiquidity",
      args: {
        baseAmount: 100n,
        lpAmount: 100n,
        provider: "0x123abc",
      },
      blockNumber: 1n,
      data: "0x123abc",
      transactionHash: "0x123abc",
    },
  ];
  contract.stubEvents("AddLiquidity", stubbedEvents);

  const events = await cachedContract.getEvents("AddLiquidity");
  expect(events).toBe(stubbedEvents);

  const events2 = await cachedContract.getEvents("AddLiquidity");
  expect(events2).toBe(stubbedEvents);

  const stub = contract.getEventsStub("AddLiquidity");
  expect(stub?.callCount).toBe(1);
});

test("The deleteRead function deletes the cached read value", async () => {
  const contract = new ReadContractStub(HyperdriveABI);
  const cachedContract = new CachedReadContract({ contract });

  const stubbedValue = [100n] as const;
  contract.stubRead("balanceOf", stubbedValue);

  const value = await cachedContract.read("balanceOf", [0n, "0x123abc"]);
  expect(value).toBe(stubbedValue);

  cachedContract.deleteRead("balanceOf", [0n, "0x123abc"]);

  const value2 = await cachedContract.read("balanceOf", [0n, "0x123abc"]);
  expect(value2).toBe(stubbedValue);

  const stub = contract.getReadStub("balanceOf");
  expect(stub?.callCount).toBe(2);
});

test("It clears the cache", async () => {
  const contract = new ReadContractStub(HyperdriveABI);
  const cachedContract = new CachedReadContract({ contract });

  contract.stubRead("balanceOf", [100n]);
  contract.stubRead("factory", ["0x123abc"]);

  await cachedContract.read("balanceOf", [0n, "0x123abc"]);
  await cachedContract.read("factory", []);

  cachedContract.clearCache();

  await cachedContract.read("balanceOf", [0n, "0x123abc"]);
  await cachedContract.read("factory", []);

  const stubA = contract.getReadStub("balanceOf");
  const stubB = contract.getReadStub("factory");
  expect(stubA?.callCount).toBe(2);
  expect(stubB?.callCount).toBe(2);
});
