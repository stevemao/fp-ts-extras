import { pipe } from "fp-ts/lib/function";
import * as J from "fp-ts/lib/Json";
import { mapLeft, chain, Either } from "fp-ts/lib/Either";
import { Decoder, Encoder } from "io-ts";
import toError from "to-error";
import { decode } from "../Either";

export const stringify = <A, O>(
  T: Encoder<A, O>,
  data: A
): Either<unknown, string> => pipe(data, T.encode, J.stringify);

export const parse = <A>(T: Decoder<J.Json, A>, j: string): Either<Error, A> =>
  pipe(
    J.parse(j),
    mapLeft(toError),
    chain((o) => decode(T, o))
  );
