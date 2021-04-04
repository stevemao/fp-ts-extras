import { none, some } from "fp-ts/lib/Option";
import { parseInt } from "../";

describe("parseInt", () => {
  test("should be success", () => {
    expect(parseInt("2", 10)).toEqual(some(2));
  });

  test("should be failure", () => {
    expect(parseInt("abc", 10)).toEqual(none);
  });
});
