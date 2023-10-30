import { expect, test } from "vitest";
import { ContractEvent } from "src/contract/ContractEvents";
import { ReadContractStub } from "src/contract/stubs/ReadContractStub/ReadContractStub";
import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";

test("It stubs the read function", async () => {
  const contract = new ReadContractStub(IHyperdrive.abi);

  expect(() => contract.read("baseToken", [])).toThrowError();

  const stubbedValue = ["0x123abc"] as const;
  contract.stubRead("baseToken", stubbedValue);

  const value = await contract.read("baseToken", []);
  expect(value).toBe(stubbedValue);

  const stub = contract.getReadStub("baseToken");
  expect(stub?.callCount).toBe(1);
});

test("It stubs the simulateWrite function", async () => {
  const contract = new ReadContractStub(IHyperdrive.abi);

  expect(() => contract.simulateWrite("addLiquidity", [])).toThrowError();

  const stubbedResult = [100n] as const;
  contract.stubWrite("addLiquidity", stubbedResult);

  const result = await contract.simulateWrite("addLiquidity", []);
  expect(result).toBe(stubbedResult);

  const stub = contract.getWriteStub("addLiquidity");
  expect(stub?.callCount).toBe(1);
});

test("It stubs the getEvents function", async () => {
  const contract = new ReadContractStub(IHyperdrive.abi);

  expect(() => contract.getEvents("addLiquidity")).toThrowError();

  const stubbedEvents: ContractEvent<typeof IHyperdrive.abi, "AddLiquidity">[] =
    [
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
