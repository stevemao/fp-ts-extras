import {pipe} from 'fp-ts/lib/pipeable'
import {reduce} from 'fp-ts/lib/Array'
import {keys, insertAt} from 'fp-ts/lib/Record'

export default <T>(a: Array<Record<string, T>>): Record<string, T> =>
pipe(
  a,
  reduce({}, (acc, curr) =>
    pipe(
      curr,
      keys,
      reduce(acc, (v, k) => pipe(v, insertAt(k, curr[k]))),
    ),
  ),
);
