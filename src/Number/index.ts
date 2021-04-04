import { none, some, Option } from "fp-ts/lib/Option";

export const parseInt = (radix: number) => (s: string): Option<number> => {
  const int = global.parseInt(s, radix);
  return Number.isNaN(int) ? none : some(int);
};
