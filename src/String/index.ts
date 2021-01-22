import { filter } from "fp-ts/lib/Array";

export const split = (char: string) => (string: string) => string.split(char);

export const join = (char: string) => (strings: string[]) => strings.join(char);

export const filterEmptyString = filter((a: string) => a.length > 0);

export const startsWith = (a: string) => (b: string) => b.startsWith(a);

export const replace = (r: RegExp, a: string) => (b: string) => b.replace(r, a);

export const includes = (a: string) => (b: string) => b.includes(a);

export const toLower = (a: string) => a.toLowerCase();

export const toUpper = (a: string) => a.toUpperCase();
