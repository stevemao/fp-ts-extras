import { fold, left, map, right } from "fp-ts/lib/Either";
import { either, EitherC } from "io-ts-types";
import { constant, pipe } from "fp-ts/lib/function";
import * as t from "io-ts";

export const eitherFromUnion = <L extends t.Mixed, R extends t.Mixed>(
  leftCodec: L,
  rightCodec: R,
  name: string = `EitherFromUnion<${leftCodec.name}, ${rightCodec.name}>`
): EitherC<L, R> => {
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
    e.encode
  );
};
