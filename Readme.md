> fp-ts extra functions and utilities

## Array

### groupBy

```ts
import { groupBy } from "fp-ts-extras/lib/Array";

assert.deepStrictEqual(groupBy(eqNumber)([1, 1, 2, 3, 3, 4]), [
  [1, 1],
  [2],
  [3, 3],
  [4],
]);
```

## Option

### partial

> Drop-in replacement of `t.partial`

Instead of returning `A | undefined`, it returns `Option<A>`

```ts
import { partial } from "fp-ts-extras/lib/Option";

const B = partial({
  bar: t.number,
});
```

```ts
import * as t from "io-ts";

const User = t.type({
  userId: t.number,
  name: t.string,
});

const PartialUser = t.partial(User.props);

type PartialUser = t.TypeOf<typeof PartialUser>;

// same as
type PartialUser = {
  name: Option<string>;
  age: Option<number>;
};
```

## Function

### memPipe

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
import { memPipe } from "fp-ts-extras/lib/Function";

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

## JSON

> encode/decode automatically when you stringify/parse

Why? You can use your preferred algebraic data types in your business logic, and can be converted to traditional json automatically when you do http request or save stuff to db, and vice versa.

```ts
const T = t.type({
  foo: optionFromNullable(t.string),
});

const result = stringify(T, {
  foo: O.of("abc"),
});
// right '{"foo":"abc"}'

const result = parse(T, '{"foo":"abc"}');
/*
right {
  foo: O.of("abc"),
}
*/
```

## Record

### union

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
import { pipe } from "fp-ts/lib/Function";
import * as assert from "assert";

const result = pipe("a,b,c", split(","), join(":"));

assert.deepStrictEqual(result, "a:b:c");
```

## TaskEither

### decode

> Decode with error to reduce boilerplate

```ts
import { decode } from "fp-ts-extras/lib/TaskEither";
import * as t from "io-ts";
import { pipe } from "fp-ts/lib/Function";

pipe(
  decode(t.string, null)
  // compose with other `TaskEither`s
);
```

## Tuple

> Various useful functions on tuples, overloaded on tuple size.

## UUID

> UUID generator that returns type `UUID`

# Related projects

- https://github.com/gcanti/fp-ts-contrib
- https://github.com/samhh/fp-ts-std
