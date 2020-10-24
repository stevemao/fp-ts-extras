import { groupBy } from "..";
import { eqNumber } from "fp-ts/lib/Eq";

describe("groupBy", () => {
  test("should group by number", () => {
    const reality = groupBy(eqNumber)([1, 1, 2, 3, 3, 4]);
    const expected = [[1, 1], [2], [3, 3], [4]];
    expect(reality).toStrictEqual(expected);
  });
});
