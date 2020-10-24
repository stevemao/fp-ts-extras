> fp-ts extra functions and utilities

```ts
import {groupBy} from 'fp-ts-extras/lib/Array'

assert.deepStrictEqual(groupBy(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
```
