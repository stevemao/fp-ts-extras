import {filter} from "fp-ts/lib/Array";

export const split = (char: string) => (string: string) => string.split(char);

export const join = (char: string) => (strings: string[]) => strings.join(char);

export const filterEmptyString = filter((a: string) => a.length > 0);

export const startsWith = (a: string) => (b: string) => b.startsWith(a)
