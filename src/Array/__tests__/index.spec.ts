import {groupBy} from '..'
import { eqNumber } from 'fp-ts/lib/Eq'

test('groupBy', () => {
    const reality = groupBy(eqNumber)([1, 1, 2, 3, 3, 4])
    const expected = [[1, 1], [2], [3, 3], [4]]
    expect(reality).toStrictEqual(expected);
});
