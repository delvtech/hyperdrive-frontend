import { calculateAprFromPrice } from "src/hyperdrive/utils/calculateAprFromPrice";
import { expect, test } from "vitest";

test("calculateAprFromPrice should return fixed rate an open long position is currently earning", async () => {
  const rate = calculateAprFromPrice({
    positionDuration: 604800n,
    baseAmount: 100000000000000000000n,
    bondAmount: 100086217686058270990n,
  });

  expect(rate).toEqual(44956364873241333n);
});
