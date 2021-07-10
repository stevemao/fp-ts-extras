import {
  TaskEither,
  sequenceArray as sequenceReadonlyArray,
  ApplicativePar,
} from "fp-ts/lib/TaskEither";
import { sequence as arraySequence } from "fp-ts/lib/Array";

export function sequence<E, A>(te: [TaskEither<E, A>]): TaskEither<E, [A]> {
  return sequenceReadonlyArray(te) as any;
}

export function bisequence<E, A, B>(
  te: [TaskEither<E, A>, TaskEither<E, B>]
): TaskEither<E, [A, B]> {
  return sequenceReadonlyArray(te as any) as any;
}

export function trisequence<E, A, B, C>(
  te: [TaskEither<E, A>, TaskEither<E, B>, TaskEither<E, C>]
): TaskEither<E, [A, B, C]> {
  return sequenceReadonlyArray(te as any) as any;
}

export function quadsequence<E, A, B, C, D>(
  te: [TaskEither<E, A>, TaskEither<E, B>, TaskEither<E, C>, TaskEither<E, D>]
): TaskEither<E, [A, B, C, D]> {
  return sequenceReadonlyArray(te as any) as any;
}

export function quintsequence<E, A, B, C, D, F>(
  te: [
    TaskEither<E, A>,
    TaskEither<E, B>,
    TaskEither<E, C>,
    TaskEither<E, D>,
    TaskEither<E, F>
  ]
): TaskEither<E, [A, B, C, D, F]> {
  return sequenceReadonlyArray(te as any) as any;
}

export function sexsequence<E, A, B, C, D, F, G>(
  te: [
    TaskEither<E, A>,
    TaskEither<E, B>,
    TaskEither<E, C>,
    TaskEither<E, D>,
    TaskEither<E, F>,
    TaskEither<E, G>
  ]
): TaskEither<E, [A, B, C, D, F, G]> {
  return sequenceReadonlyArray(te as any) as any;
}

export function septsequence<E, A, B, C, D, F, G, H>(
  te: [
    TaskEither<E, A>,
    TaskEither<E, B>,
    TaskEither<E, C>,
    TaskEither<E, D>,
    TaskEither<E, F>,
    TaskEither<E, G>,
    TaskEither<E, H>
  ]
): TaskEither<E, [A, B, C, D, F, G, H]> {
  return sequenceReadonlyArray(te as any) as any;
}

export const sequenceArray = arraySequence(ApplicativePar);
