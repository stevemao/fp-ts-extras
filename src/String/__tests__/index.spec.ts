import { split, join } from "..";
import { pipe } from "fp-ts/lib/pipeable";

describe("String", () => {
  test("should successfully split and join", () => {
    const reality = pipe("a,b,c", split(","), join(":"));
    const expected = "a:b:c";
    expect(reality).toStrictEqual(expected);
  });
});
