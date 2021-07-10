import { Either, sequenceArray } from "fp-ts/lib/Either";

export function sequence<E, A>(e: [Either<E, A>]): Either<E, [A]> {
  return sequenceArray(e) as any;
}

export function bisequence<E, A, B>(
  e: [Either<E, A>, Either<E, B>]
): Either<E, [A, B]> {
  return sequenceArray(e as any) as any;
}

export function trisequence<E, A, B, C>(
  e: [Either<E, A>, Either<E, B>, Either<E, C>]
): Either<E, [A, B, C]> {
  return sequenceArray(e as any) as any;
}
