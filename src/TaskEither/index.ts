import { pipe } from "fp-ts/lib/function";
import { TaskEither, fromEither } from "fp-ts/lib/TaskEither";
import { Decoder } from "io-ts";
import { decode as decodeEither } from "../Either";

export const decode = <N, M>(T: Decoder<M, N>, data: M): TaskEither<Error, N> =>
  pipe(decodeEither(T, data), fromEither);
