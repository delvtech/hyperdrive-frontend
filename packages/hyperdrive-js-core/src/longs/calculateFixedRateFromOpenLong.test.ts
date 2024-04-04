import { calculateFixedRateFromOpenLong } from "src/longs/calculateFixedRateFromOpenLong";
import { expect, test } from "vitest";

test("calculateFixedRateFromOpenLong should return fixed rate an open long position is currently earning", async () => {
  const rate = calculateFixedRateFromOpenLong({
    positionDuration: 604800n,
    baseAmount: 100000000000000000000n,
    bondAmount: 100086217686058270990n,
    decimals: 18,
  });

  expect(rate).toEqual(44956364873241305n);
});
