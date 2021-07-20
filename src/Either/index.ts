import { Either, fold, left, map, right } from "fp-ts/lib/Either";
import { either } from "io-ts-types";
import { constant, pipe, identity } from "fp-ts/lib/function";
import * as t from "io-ts";
import { Type } from "io-ts";
import { Decoder } from "io-ts";
import toError from "to-error";
import { mapLeft } from "fp-ts/lib/Either";

export const eitherFromUnion = <L extends t.Mixed, R extends t.Mixed>(
  leftCodec: L,
  rightCodec: R,
  name: string = `EitherFromUnion<${leftCodec.name}, ${rightCodec.name}>`
): Type<
  Either<t.TypeOf<L>, t.TypeOf<R>>,
  t.TypeOf<L> | t.TypeOf<R>,
  unknown
> => {
  type LType = t.TypeOf<L>;
  type RType = t.TypeOf<R>;

  const e = either(leftCodec, rightCodec);
  return new t.Type(
    name,
    e.is,
    (input, _) => {
      const rightResult = pipe(
        input,
        rightCodec.decode,
        map((a) => right<LType, RType>(a))
      );

      const leftResult = pipe(
        input,
        leftCodec.decode,
        map((a) => left<LType, RType>(a))
      );

      return pipe(rightResult, fold(constant(leftResult), t.success));
    },
    (value) =>
      pipe(value, fold<LType, RType, LType | RType>(identity, identity))
  );
};

export const decode = <I, A>(T: Decoder<I, A>, data: I): Either<Error, A> =>
  pipe(data, T.decode, mapLeft(toError));
