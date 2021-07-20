import { stringify, parse } from "..";
import * as t from "io-ts";
import { optionFromNullable } from "io-ts-types";
import * as O from "fp-ts/lib/Option";
import { assertSuccess } from "../../test/utils";

const T = t.type({
  foo: optionFromNullable(t.string),
});

describe("stringify", () => {
  test("should stringify some", () => {
    const result = stringify(T, {
      foo: O.of("abc"),
    });

    assertSuccess(result, '{"foo":"abc"}');
  });

  test("should stringify none", () => {
    const result = stringify(T, {
      foo: O.none,
    });

    assertSuccess(result, '{"foo":null}');
  });
});

describe("parse", () => {
  test("should parse some", () => {
    const result = parse(T, '{"foo":"abc"}');

    assertSuccess(result, {
      foo: O.of("abc"),
    });
  });

  test("should parse none", () => {
    const result = parse(T, '{"foo":null}');

    assertSuccess(result, {
      foo: O.none,
    });
  });
});
