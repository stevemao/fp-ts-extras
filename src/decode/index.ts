import { pipe } from "fp-ts/lib/pipeable";
import { TaskEither, fromEither } from "fp-ts/lib/TaskEither";
import { Decoder } from "io-ts";
import toError from "to-error";
import { Either, mapLeft } from "fp-ts/lib/Either";

const decode = <N, M>(T: Decoder<M, N>, data: M): TaskEither<Error, N> =>
  pipe(eitherDecode(T, data), fromEither);

export const eitherDecode = <N, M>(
  T: Decoder<M, N>,
  data: M
): Either<Error, N> => pipe(data, T.decode, mapLeft(toError));

export default decode;
