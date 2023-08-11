import { expect, test } from "vitest";
import { adjustAmountByPercentage } from "./adjustAmountByPercentage";
import { parseUnits } from "viem";
import { ALICE } from "src/testing/accounts";
import { setupMintTokensAndApproveHyperdrive } from "src/amm/testing/setupMintTokensAndApproveHyperdrive";
import { publicClient } from "src/testing/utils";
import { HyperdriveABI } from "..";
import { TestAddresses } from "src/addresses/test";

test("adjustAmountByPercentage - basic functionality", () => {
  const amount = parseUnits("100", 18);
  const expectedAmount = parseUnits("99", 18);
  expect(adjustAmountByPercentage({ amount, decimals: 18 })).toBe(
    expectedAmount,
  );
});

test("adjustAmountByPercentage - precision", () => {
  const preciseAmount = parseUnits("100.123456", 18);
  const expectedPreciseAmount = preciseAmount - preciseAmount / 100n;
  expect(
    adjustAmountByPercentage({ amount: preciseAmount, decimals: 18 }),
  ).toBe(expectedPreciseAmount);
});

test("adjustAmountByPercentage - rounding", () => {
  const roundingAmount = parseUnits("0.000000000000000001", 18); // smallest possible value greater than zero with 18 decimals
  expect(
    adjustAmountByPercentage({ amount: roundingAmount, decimals: 18 }),
  ).toBe(0n); // Adjusting such a small amount by 1% should effectively round down to 0
});

test("adjustAmountByPercentage - zero amount", () => {
  expect(adjustAmountByPercentage({ amount: 0n, decimals: 18 })).toBe(0n);
});

test("adjustAmountByPercentage - negative amount", () => {
  const negativeAmount = parseUnits("-100", 18);

  // Throw an error if the input amount is negative
  expect(() => {
    adjustAmountByPercentage({ amount: negativeAmount, decimals: 18 });
  }).toThrow(Error("Negative amounts are not allowed"));
});

// Test the `adjustAmountByPercentage` function within the context of an "open long" operation.
test("adjustAmountByPercentage - mock open long", async () => {
  // Setup
  await setupMintTokensAndApproveHyperdrive(ALICE);

  // Define the initial amount of tokens for the long operation.
  const baseAmountIn = parseUnits("100", 18);

  // Calculate the minimum output amount after accounting for a 1% slippage.
  const minAmountOut = adjustAmountByPercentage({
    amount: baseAmountIn,
    decimals: 18,
  });

  // Simulate an "open long" operation
  const { request } = await publicClient.simulateContract({
    abi: HyperdriveABI,
    functionName: "openLong",
    account: ALICE,
    address: TestAddresses.mockHyperdrive,
    args: [baseAmountIn, minAmountOut, ALICE, true],
    value: 0n,
  });

  // Ensure that the minimum output amount from the simulation matches the calculated amount.
  expect(request.args[1]).toBe(minAmountOut);

  // Execute the "open long" and retrieve the transaction hash.
  const hash = await publicClient.writeContract({
    abi: HyperdriveABI,
    functionName: "openLong",
    account: ALICE,
    address: TestAddresses.mockHyperdrive,
    args: [baseAmountIn, minAmountOut, ALICE, true],
    value: 0n, // Ensure no Ethereum is sent with this transaction.
  });

  // Retrieve the receipt for the transaction and verify that the transaction was successful.
  const { status } = await publicClient.getTransactionReceipt({ hash });
  expect(status).toEqual("success");
});
