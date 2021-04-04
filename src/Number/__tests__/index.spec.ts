import { none, some } from "fp-ts/lib/Option";
import { parseInt } from "../";

describe("parseInt", () => {
  test("should be success", () => {
    expect(parseInt(10)("2")).toEqual(some(2));
  });

  test("should be failure", () => {
    expect(parseInt(10)("abc")).toEqual(none);
  });
});
