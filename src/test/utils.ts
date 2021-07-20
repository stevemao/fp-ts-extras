import { Either, isRight } from "fp-ts/lib/Either";

export function assertSuccess<T>(
  result: Either<unknown, T>,
  expected: T
): void {
  if (isRight(result)) {
    expect(result.right).toStrictEqual(expected);
  } else {
    throw new Error(`${result} is not a right`);
  }
}
