import { expect, test } from "vitest";
import { ContractEvent } from "src/contract/ContractEvents";
import { ReadContractStub } from "src/contract/stubs/ReadContractStub/ReadContractStub";
import { ERC20 } from "@hyperdrive/artifacts/dist/ERC20";
import { ALICE, BOB } from "src/base/testing/accounts";
import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";

test("It stubs the read function", async () => {
  const contract = new ReadContractStub(ERC20.abi);

  expect(() => contract.read("balanceOf", [])).toThrowError();

  // Stub bob and alice's balances first
  const bobArgs = [BOB] as const;
  const bobValue = [10n] as const;
  contract.stubRead({
    functionName: "balanceOf",
    args: bobArgs,
    value: bobValue,
  });

  const aliceArgs = [ALICE] as const;
  const aliceValue = [20n] as const;
  contract.stubRead({
    functionName: "balanceOf",
    args: aliceArgs,
    value: aliceValue,
  });

  // Now try and read them based on their args
  const bobResult = await contract.read("balanceOf", [BOB]);
  const aliceResult = await contract.read("balanceOf", [ALICE]);
  expect(bobResult).toBe(bobValue);
  expect(aliceResult).toBe(aliceValue);

  const stub = contract.getReadStub("balanceOf");
  expect(stub?.callCount).toBe(2);
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
