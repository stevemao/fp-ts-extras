import { tryCatch, Either } from 'fp-ts/lib/Either'
import { fromEither } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import toError from 'to-error'

export const stringify = (a: unknown): Either<Error, string> =>
  tryCatch(() => JSON.stringify(a), toError);

export const parse = (a: string): Either<Error, unknown> =>
  tryCatch(() => JSON.parse(a), toError);

export const stringifyMay = (a: unknown) => pipe(
  a,
  stringify,
  fromEither
)

export const parseMay = (a: string) => pipe(
  a,
  parse,
  fromEither
)
