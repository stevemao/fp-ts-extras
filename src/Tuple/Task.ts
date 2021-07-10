import { Task, sequenceArray } from "fp-ts/lib/Task";

export function sequence<A>(t: [Task<A>]): Task<[A]> {
  return sequenceArray(t as any) as any;
}

export function bisequence<A, B>(t: [Task<A>, Task<B>]): Task<[A, B]> {
  return sequenceArray(t as any) as any;
}

export function trisequence<A, B, C>(
  t: [Task<A>, Task<B>, Task<C>]
): Task<[A, B, C]> {
  return sequenceArray(t as any) as any;
}
