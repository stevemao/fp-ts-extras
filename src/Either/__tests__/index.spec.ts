import { eitherFromUnion } from "..";
import * as t from "io-ts";
import { isLeft, left, right } from "fp-ts/lib/Either";

describe("eitherFromUnion", () => {
  test("should return right string", () => {
    const T = eitherFromUnion(t.number, t.string);

    const result = T.decode("foo");

    expect(result).toEqual(right(right("foo")));
  });

  test("should return left number", () => {
    const T = eitherFromUnion(t.number, t.string);

    const result = T.decode(3);

    expect(result).toEqual(right(left(3)));
  });

  test("should fail", () => {
    const T = eitherFromUnion(t.number, t.string);

    const result = T.decode(true);

    expect(isLeft(result)).toEqual(true);
  });

  test("should return string", () => {
    const T = eitherFromUnion(t.number, t.string);

    const result = T.encode(right("foo"));

    expect(result).toEqual("foo");
  });

  test("should return number", () => {
    const T = eitherFromUnion(t.number, t.string);

    const result = T.encode(left(3));

    expect(result).toEqual(3);
  });
});
