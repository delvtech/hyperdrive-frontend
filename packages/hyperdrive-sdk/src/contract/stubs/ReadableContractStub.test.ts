import { expect, test } from "vitest";
import { HyperdriveABI } from "@hyperdrive/core";
import { ContractEvent } from "src/contract/Contract";
import { ReadableContractStub } from "src/contract/stubs/ReadableContractStub";

test("It stubs the read function", async () => {
  const contract = new ReadableContractStub(HyperdriveABI);

  expect(() => contract.read("baseToken", [])).toThrowError();

  const stubbedValue = "0x123abc";
  contract.stubRead("baseToken", stubbedValue);

  const value = await contract.read("baseToken", []);
  expect(value).toBe(stubbedValue);

  const stub = contract.getReadStub("baseToken");
  expect(stub?.callCount).toBe(1);
});

test("It stubs the simulateWrite function", async () => {
  const contract = new ReadableContractStub(HyperdriveABI);

  expect(() => contract.simulateWrite("addLiquidity", [])).toThrowError();

  const stubbedResult = 100n;
  contract.stubWrite("addLiquidity", stubbedResult);

  const result = await contract.simulateWrite("addLiquidity", []);
  expect(result).toBe(stubbedResult);

  const stub = contract.getWriteStub("addLiquidity");
  expect(stub?.callCount).toBe(1);
});

test("It stubs the getEvents function", async () => {
  const contract = new ReadableContractStub(HyperdriveABI);

  expect(() => contract.getEvents("addLiquidity")).toThrowError();

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

  const events = await contract.getEvents("AddLiquidity");
  expect(events).toBe(stubbedEvents);

  const stub = contract.getEventsStub("AddLiquidity");
  expect(stub?.callCount).toBe(1);
});
