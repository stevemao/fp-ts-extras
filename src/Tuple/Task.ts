import {
  Task,
  sequenceArray as sequenceReadonlyArray,
  ApplicativePar,
} from "fp-ts/lib/Task";
import { sequence as arraySequence } from "fp-ts/lib/Array";

export function sequence<A>(t: [Task<A>]): Task<[A]> {
  return sequenceReadonlyArray(t as any) as any;
}

export function bisequence<A, B>(t: [Task<A>, Task<B>]): Task<[A, B]> {
  return sequenceReadonlyArray(t as any) as any;
}

export function trisequence<A, B, C>(
  t: [Task<A>, Task<B>, Task<C>]
): Task<[A, B, C]> {
  return sequenceReadonlyArray(t as any) as any;
}

export const sequenceArray = arraySequence(ApplicativePar);
