import { Eq, eqStrict } from 'fp-ts/lib/Eq'
import { chop, spanLeft } from 'fp-ts/lib/Array'

export const groupBy = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
  return chop(as => {
    const { init, rest } = spanLeft((a: A) => S.equals(a, as[0]))(as)
    return [init, rest]
  })
}

export const group = groupBy(eqStrict)
