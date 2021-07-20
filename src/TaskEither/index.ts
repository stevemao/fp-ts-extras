import { pipe } from "fp-ts/lib/function";
import { TaskEither, fromEither } from "fp-ts/lib/TaskEither";
import { Decoder } from "io-ts";
import { decode as decodeEither } from "../Either";

export const decode = <I, A>(T: Decoder<I, A>, data: I): TaskEither<Error, A> =>
  pipe(decodeEither(T, data), fromEither);
