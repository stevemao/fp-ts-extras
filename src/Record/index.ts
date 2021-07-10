import { pipe } from "fp-ts/lib/function";
import { reduce } from "fp-ts/lib/Array";
import { keys, upsertAt } from "fp-ts/lib/Record";

export const union = <T>(a: Array<Record<string, T>>): Record<string, T> =>
  pipe(
    a,
    reduce({}, (acc, curr) =>
      pipe(
        curr,
        keys,
        reduce(acc, (v, k) => pipe(v, upsertAt(k, curr[k])))
      )
    )
  );
