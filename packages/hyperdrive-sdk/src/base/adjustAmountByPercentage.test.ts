import { expect, test } from "vitest";
import { adjustAmountByPercentage } from "src/base/adjustAmountByPercentage";
import { parseUnits } from "viem";
import { ALICE } from "src/testing/accounts";
import { setupMintTokensAndApproveHyperdrive } from "src/amm/testing/setupMintTokensAndApproveHyperdrive";
import { publicClient } from "src/testing/utils";
import { TestAddresses } from "src/testing/test";
import { HyperdriveABI } from "@hyperdrive/core";

test("should return adjusted amount when given a basic input", () => {
  const amount = parseUnits("100", 18);
  const expectedAmount = parseUnits("99", 18);
  expect(adjustAmountByPercentage({ amount, decimals: 18 })).toBe(
    expectedAmount,
  );
});

test("should handle precision accurately when given precise input amounts", () => {
  const preciseAmount = parseUnits("100.123456", 18);
  const expectedPreciseAmount = preciseAmount - preciseAmount / 100n;
  expect(
    adjustAmountByPercentage({ amount: preciseAmount, decimals: 18 }),
  ).toBe(expectedPreciseAmount);
});

test("should round down to zero when given the smallest possible positive value", () => {
  const roundingAmount = parseUnits("0.000000000000000001", 18);
  expect(
    adjustAmountByPercentage({ amount: roundingAmount, decimals: 18 }),
  ).toBe(0n);
});

test("should return zero when input amount is zero", () => {
  expect(adjustAmountByPercentage({ amount: 0n, decimals: 18 })).toBe(0n);
});

test("should throw an error when given a negative input amount", () => {
  const negativeAmount = parseUnits("-100", 18);
  expect(() => {
    adjustAmountByPercentage({ amount: negativeAmount, decimals: 18 });
  }).toThrow(Error("Negative amounts are not allowed"));
});

test("should simulate and execute 'open long' operation correctly when mocking an open long operation", async () => {
  await setupMintTokensAndApproveHyperdrive(ALICE);
  const baseAmountIn = parseUnits("100", 18);
  const minAmountOut = adjustAmountByPercentage({
    amount: baseAmountIn,
    decimals: 18,
  });

  const { request } = await publicClient.simulateContract({
    abi: HyperdriveABI,
    functionName: "openLong",
    account: ALICE,
    address: TestAddresses.mockHyperdrive,
    args: [baseAmountIn, minAmountOut, ALICE, true],
    value: 0n,
  });
  expect(request.args[1]).toBe(minAmountOut);

  const hash = await publicClient.writeContract({
    abi: HyperdriveABI,
    functionName: "openLong",
    account: ALICE,
    address: TestAddresses.mockHyperdrive,
    args: [baseAmountIn, minAmountOut, ALICE, true],
    value: 0n,
  });
  const { status } = await publicClient.getTransactionReceipt({ hash });
  expect(status).toEqual("success");
});
