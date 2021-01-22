> fp-ts extra functions and utilities

## Array

```ts
import { groupBy } from "fp-ts-extras/lib/Array";

assert.deepStrictEqual(groupBy(eqNumber)([1, 1, 2, 3, 3, 4]), [
  [1, 1],
  [2],
  [3, 3],
  [4],
]);
```

## Pipeable

Problem: I have a `task` and if I call

```ts
task();
task();
```

it fires the internal promise twice. The expected behaviour is it should only fire once. The second call returns the same result as the first one.

Use case: I have 3 tasks: `t1`, `t2`, `t3`. `tA` is called once `t1` and `t2` is done. `tB` is called once `t1` and `t3` is done. `tC` is called once `t2` and `t3` is done. With raw promise I could do

```ts
Promise.all([
   Promise.all([t1, t2]).then(_ => tA)
   Promise.all([t2, t3]).then(_ => tC)
   Promise.all([t1, t3]).then(_ => tB)
]).then(...)
```

But with Task

```ts
sequence([
   pipe(sequence([t1, t2])), chain(_ => tA)),
   pipe(sequence([t2, t3]), chain(_ => tC)),
   pipe(sequence([t1, t3]), chain(_ => tB)),
])
...
```

side effects of `t1`, `t2`, `t3` will be fired twice each. `memPipe` will come in handy

```ts
import { memPipe } from "fp-ts-extras/lib/Pipeable";

const t1 = memPipe(...)
const t2 = memPipe(...)
const t3 = memPipe(...)

sequence([
   pipe(sequence([t1, t2])), chain(_ => tA)),
   pipe(sequence([t2, t3]), chain(_ => tC)),
   pipe(sequence([t1, t3]), chain(_ => tB)),
])
```

Each task only performs side effect once.

## json

> Safe json methods with fp-ts

```ts
import { stringify, parse } from "fp-ts-extras/lib/json";
import * as E from "fp-ts/lib/Either";
import * as assert from "assert";

assert.deepStrictEqual(
  stringify({
    foo: "bar",
  }),
  E.either.of(
    JSON.stringify({
      foo: "bar",
    })
  )
);

const circularReference: any = {};
circularReference.myself = circularReference;

assert(E.isLeft(stringify(circularReference)));

assert.deepStrictEqual(
  parse(
    JSON.stringify({
      foo: "bar",
    })
  ),
  E.either.of({
    foo: "bar",
  })
);

assert(E.isLeft(parse("abc")));
```

## Record

```ts
import { union } from "fp-ts-extras/lib/Record";

assert.deepStrictEqual(
  union([
    {
      foo: "foo",
    },
    {
      bar: "bar",
    },
  ]),
  {
    foo: "foo",
    bar: "bar",
  }
);
```

## String

```ts
import { split, join } from "fp-ts-extras/lib/String";
import { pipe } from "fp-ts/lib/pipeable";
import * as assert from "assert";

const result = pipe("a,b,c", split(","), join(":"));

assert.deepStrictEqual(result, "a:b:c");
```

## decode

> Decode with error to reduce boilerplate

```ts
import ioTsDecode from "fp-ts-extras/lib/decode";
import * as t from "io-ts";
import { pipe } from "fp-ts/lib/pipeable";

pipe(
  ioTsDecode(t.string, null)
  // compose with other `TaskEither`s
);
```

## heterogeneousSequence

> `sequence` that works with [heterogeneous list](https://wiki.haskell.org/Heterogenous_collections)
