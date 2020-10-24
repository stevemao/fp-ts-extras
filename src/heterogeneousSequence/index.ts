import * as Either from "fp-ts/lib/Either";
import * as T from "fp-ts/lib/Task";
import * as TE from "fp-ts/lib/TaskEither";
import sequence, { sequence as esequence, tsequence } from "./sequence";

function hsequence<E, A, B>(
  ta: [TE.TaskEither<E, A>, TE.TaskEither<E, B>]
): TE.TaskEither<E, [A, B]>;

function hsequence<E, A, B, C>(
  ta: [TE.TaskEither<E, A>, TE.TaskEither<E, B>, TE.TaskEither<E, C>]
): TE.TaskEither<E, [A, B, C]>;

function hsequence<E, A, B, C, D>(
  ta: [
    TE.TaskEither<E, A>,
    TE.TaskEither<E, B>,
    TE.TaskEither<E, C>,
    TE.TaskEither<E, D>
  ]
): TE.TaskEither<E, [A, B, C]>;

function hsequence<E, A, B, C, D, F>(
  ta: [
    TE.TaskEither<E, A>,
    TE.TaskEither<E, B>,
    TE.TaskEither<E, C>,
    TE.TaskEither<E, D>,
    TE.TaskEither<E, F>
  ]
): TE.TaskEither<E, [A, B, C, F]>;

function hsequence<E, A, B, C, D, F, G>(
  ta: [
    TE.TaskEither<E, A>,
    TE.TaskEither<E, B>,
    TE.TaskEither<E, C>,
    TE.TaskEither<E, D>,
    TE.TaskEither<E, F>,
    TE.TaskEither<E, G>
  ]
): TE.TaskEither<E, [A, B, C, D, F, G]>;

function hsequence<E, A, B, C, D, F, G, H>(
  ta: [
    TE.TaskEither<E, A>,
    TE.TaskEither<E, B>,
    TE.TaskEither<E, C>,
    TE.TaskEither<E, D>,
    TE.TaskEither<E, F>,
    TE.TaskEither<E, G>,
    TE.TaskEither<E, H>
  ]
): TE.TaskEither<E, [A, B, C, D, F, G, H]>;

function hsequence<E, A, B, C, D, F, G, H, I>(
  ta: [
    TE.TaskEither<E, A>,
    TE.TaskEither<E, B>,
    TE.TaskEither<E, C>,
    TE.TaskEither<E, D>,
    TE.TaskEither<E, F>,
    TE.TaskEither<E, G>,
    TE.TaskEither<E, H>,
    TE.TaskEither<E, I>
  ]
): TE.TaskEither<E, [A, B, C, D, F, G, H, I]>;

function hsequence<E, A, B, C, D, F, G, H, I, J>(
  ta: [
    TE.TaskEither<E, A>,
    TE.TaskEither<E, B>,
    TE.TaskEither<E, C>,
    TE.TaskEither<E, D>,
    TE.TaskEither<E, F>,
    TE.TaskEither<E, G>,
    TE.TaskEither<E, H>,
    TE.TaskEither<E, I>,
    TE.TaskEither<E, J>
  ]
): TE.TaskEither<E, [A, B, C, D, F, G, H, I, J]>;

function hsequence(
  ta: Array<TE.TaskEither<unknown, unknown>>
): TE.TaskEither<unknown, unknown> {
  return sequence(ta);
}

export default hsequence;

function htsequence<E, A, B>(
  ta: [Either.Either<E, A>, Either.Either<E, B>]
): Either.Either<E, [A, B]>;

function htsequence<E, A, B, C>(
  ta: [Either.Either<E, A>, Either.Either<E, B>, Either.Either<E, C>]
): Either.Either<E, [A, B, C]>;

function htsequence(
  e: Array<Either.Either<unknown, unknown>>
): Either.Either<unknown, unknown> {
  return esequence(e);
}

export { htsequence };

function httsequence<A, B>(ta: [T.Task<A>, T.Task<B>]): T.Task<[A, B]>;

function httsequence<A, B, C>(
  ta: [T.Task<A>, T.Task<B>, T.Task<C>]
): T.Task<[A, B, C]>;

function httsequence(e: Array<T.Task<unknown>>): T.Task<unknown> {
  return tsequence(e);
}

export { httsequence };
