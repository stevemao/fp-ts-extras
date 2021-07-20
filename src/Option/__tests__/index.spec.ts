import { partial } from "../";
import * as t from "io-ts";
import * as O from "fp-ts/lib/Option";
import { assertSuccess } from "../../test/utils";

describe("partial", () => {
  const Foo = partial({
    foo: t.string,
  });

  test("should successfully decode string", () => {
    const reality = Foo.decode({
      foo: "abc",
    });

    assertSuccess(reality, {
      foo: O.of("abc"),
    });
  });

  test("should successfully decode null", () => {
    const reality = Foo.decode({
      foo: null,
    });

    assertSuccess(reality, {
      foo: O.none,
    });
  });

  test("should successfully decode undefined", () => {
    const reality = Foo.decode({});

    assertSuccess(reality, {
      foo: O.none,
    });
  });

  test("should successfully encode to string", () => {
    const reality = Foo.encode({
      foo: O.of("abc"),
    });

    expect(reality).toStrictEqual({
      foo: "abc",
    });
  });

  test("should successfully encode to null", () => {
    const reality = Foo.encode({
      foo: O.none,
    });

    expect(reality).toStrictEqual({
      foo: null,
    });
  });
});
