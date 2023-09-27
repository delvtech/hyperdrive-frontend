import { expect, test } from "vitest";
import { ReadWriteContractStub } from "src/contract/stubs/ReadWriteContractStub";
import { HyperdriveABI } from "@hyperdrive/core";

test("It stubs the write function", async () => {
  const contract = new ReadWriteContractStub(HyperdriveABI);

  const stubbedValue = [100n] as const;
  contract.stubWrite("addLiquidity", stubbedValue);

  const value = await contract.write("addLiquidity", []);
  expect(value).toBe(stubbedValue);

  const stub = contract.getWriteStub("addLiquidity");
  expect(stub?.callCount).toBe(1);
});
