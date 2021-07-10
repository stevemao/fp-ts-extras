import { sequenceArray, TaskEither } from "fp-ts/lib/TaskEither";

export function sequence<E, A>(te: [TaskEither<E, A>]): TaskEither<E, [A]> {
  return sequenceArray(te) as any;
}

export function bisequence<E, A, B>(
  te: [TaskEither<E, A>, TaskEither<E, B>]
): TaskEither<E, [A, B]> {
  return sequenceArray(te as any) as any;
}

export function trisequence<E, A, B, C>(
  te: [TaskEither<E, A>, TaskEither<E, B>, TaskEither<E, C>]
): TaskEither<E, [A, B, C]> {
  return sequenceArray(te as any) as any;
}

export function quadsequence<E, A, B, C, D>(
  te: [TaskEither<E, A>, TaskEither<E, B>, TaskEither<E, C>, TaskEither<E, D>]
): TaskEither<E, [A, B, C, D]> {
  return sequenceArray(te as any) as any;
}

export function quintsequence<E, A, B, C, D, F>(
  te: [
    TaskEither<E, A>,
    TaskEither<E, B>,
    TaskEither<E, C>,
    TaskEither<E, D>,
    TaskEither<E, F>
  ]
): TaskEither<E, [A, B, C, F]> {
  return sequenceArray(te as any) as any;
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
): TaskEither<E, [A, B, C, F, G]> {
  return sequenceArray(te as any) as any;
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
): TaskEither<E, [A, B, C, F, G, H]> {
  return sequenceArray(te as any) as any;
}

export function octsequence<E, A, B, C, D, F, G, H, I>(
  te: [
    TaskEither<E, A>,
    TaskEither<E, B>,
    TaskEither<E, C>,
    TaskEither<E, D>,
    TaskEither<E, F>,
    TaskEither<E, G>,
    TaskEither<E, H>,
    TaskEither<E, I>
  ]
): TaskEither<E, [A, B, C, F, G, H, I]> {
  return sequenceArray(te as any) as any;
}

export function nonsequence<E, A, B, C, D, F, G, H, I, J>(
  te: [
    TaskEither<E, A>,
    TaskEither<E, B>,
    TaskEither<E, C>,
    TaskEither<E, D>,
    TaskEither<E, F>,
    TaskEither<E, G>,
    TaskEither<E, H>,
    TaskEither<E, I>,
    TaskEither<E, J>
  ]
): TaskEither<E, [A, B, C, F, G, H, I, J]> {
  return sequenceArray(te as any) as any;
}
