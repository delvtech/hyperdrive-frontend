import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ReadWriteContractStub } from "src/contract/stubs/ReadWriteContractStub/ReadWriteContractStub";
import { expect, test } from "vitest";

test("It stubs the write function", async () => {
  const contract = new ReadWriteContractStub(HyperdriveABI);

  const stubbedValue = [100n] as const;
  contract.stubWrite("addLiquidity", stubbedValue);

  const value = await contract.write("addLiquidity", []);
  expect(value).toBe(stubbedValue);

  const stub = contract.getWriteStub("addLiquidity");
  expect(stub?.callCount).toBe(1);
});
