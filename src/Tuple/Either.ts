import {
  Either,
  sequenceArray as sequenceReadonlyArray,
  Applicative,
} from "fp-ts/lib/Either";
import { sequence as arraySequence } from "fp-ts/lib/Array";

export function sequence<E, A>(e: [Either<E, A>]): Either<E, [A]> {
  return sequenceReadonlyArray(e) as any;
}

export function bisequence<E, A, B>(
  e: [Either<E, A>, Either<E, B>]
): Either<E, [A, B]> {
  return sequenceReadonlyArray(e as any) as any;
}

export function trisequence<E, A, B, C>(
  e: [Either<E, A>, Either<E, B>, Either<E, C>]
): Either<E, [A, B, C]> {
  return sequenceReadonlyArray(e as any) as any;
}

export const sequenceArray = arraySequence(Applicative);
