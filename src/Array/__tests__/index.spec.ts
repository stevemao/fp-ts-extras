import { group, groupBy } from "..";
import { Eq } from "fp-ts/lib/number";

describe("groupBy", () => {
  test("should group by number", () => {
    const reality = groupBy(Eq)([1, 1, 2, 3, 3, 4]);
    const expected = [[1, 1], [2], [3, 3], [4]];
    expect(reality).toStrictEqual(expected);
  });

  test("should group", () => {
    const reality = group([1, 1, 2, 3, 3, 4]);
    const expected = [[1, 1], [2], [3, 3], [4]];
    expect(reality).toStrictEqual(expected);
  });
});
