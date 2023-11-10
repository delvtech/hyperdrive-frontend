import { expect, test } from "vitest";

import { calculateMatureLongYieldAfterFees } from "src/longs/calculateMatureLongYieldAfterFees";

test("calculateMatureLongYieldAfterFees should return the yield a mature long has earned after fees", async () => {
  const value = calculateMatureLongYieldAfterFees({
    flatFee: 500000000000000n,
    bondAmount: 1000862573239041776123n,
    baseAmountPaid: 1000000000000000000000n,
    decimals: 18,
  });

  expect(value).toEqual(362141952422255235n);
});
