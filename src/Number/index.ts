import { none, some, Option } from "fp-ts/lib/Option";

export const parseInt = (s: string, radix: number): Option<number> => {
  const int = global.parseInt(s, radix);
  return Number.isNaN(int) ? none : some(int);
};
