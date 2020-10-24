> fp-ts extra functions and utilities

## Array

```ts
import {groupBy} from 'fp-ts-extras/lib/Array'

assert.deepStrictEqual(groupBy(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
```

## json

> Safe json methods with fp-ts

```ts
import {stringify, parse} from 'fp-ts-extras/lib/json'
import * as E from 'fp-ts/lib/Either'
import * as assert from 'assert'

assert.deepStrictEqual(stringify({
    foo: "bar"
}), E.either.of(JSON.stringify({
    foo: "bar"
})))

const circularReference: any = {};
circularReference.myself = circularReference;

assert(E.isLeft(stringify(circularReference)))

assert.deepStrictEqual(parse(
    JSON.stringify({
        foo: "bar"
    })
), E.either.of({
    foo: "bar"
}))

assert(E.isLeft(parse("abc")))
```

## Record

```ts
import {union} from 'fp-ts-extras/lib/Record'

assert.deepStrictEqual(union([{
    foo: 'foo',
}, {
    bar: 'bar'
}]), {
    foo: 'foo',
    bar: 'bar'
})
```

## String

```ts
import {split,join} from 'fp-ts-extras/lib/String'
import {pipe} from 'fp-ts/lib/pipeable'
import * as assert from 'assert'

const result = pipe(
    "a,b,c",
    split(','),
    join(':')
)

assert.deepStrictEqual(result, "a:b:c")
```
