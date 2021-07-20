import * as t from "io-ts";
import { isRight } from "fp-ts/lib/Either";

export function assertSuccess<T>(result: t.Validation<T>, expected: T): void {
  if (isRight(result)) {
    expect(result.right).toStrictEqual(expected);
  } else {
    throw new Error(`${result} is not a right`);
  }
}
