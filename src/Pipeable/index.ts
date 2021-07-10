import { IO } from "fp-ts/lib/IO";
import { pipe } from "fp-ts/lib/function";
import mem from "mem";

export function memPipe<A>(a: A): A;
export function memPipe<A, B>(a: A, ab: (a: A) => B): B;
export function memPipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;

export function memPipe<A, B, C>(
  a: IO<A>,
  b?: (a: IO<A>) => IO<B>,
  c?: (b: IO<B>) => IO<C>
): unknown {
  switch (arguments.length) {
    case 1:
      return pipe(a, mem);
    case 2:
      return pipe(a, b!, mem);
    case 3:
      return pipe(a, b!, c!, mem);
  }
  return;
}
