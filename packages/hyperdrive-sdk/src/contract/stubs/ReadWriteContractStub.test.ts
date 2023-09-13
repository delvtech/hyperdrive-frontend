import { expect, test } from "vitest";
import { HyperdriveABI } from "@hyperdrive/core";
import { ReadWriteContractStub } from "src/contract/stubs/ReadWriteContractStub";

test("It stubs the write function", async () => {
  const contract = new ReadWriteContractStub(HyperdriveABI);

  const stubbedValue = 100n;
  contract.stubWrite("addLiquidity", stubbedValue);

  const value = await contract.write("addLiquidity", []);
  expect(value).toBe(stubbedValue);

  const stub = contract.getWriteStub("addLiquidity");
  expect(stub?.callCount).toBe(1);
});
