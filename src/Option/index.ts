import * as t from "io-ts";
import { map } from "fp-ts/lib/Record";
import { pipe } from "fp-ts/lib/function";
import { optionFromNullable } from "io-ts-types";
import { Option } from "fp-ts/lib/Option";
import { getInterfaceTypeName } from "../utils";

export interface PartialC<P extends t.Props>
  extends t.InterfaceType<
    P,
    { [K in keyof P]: Option<t.TypeOf<P[K]>> },
    { [K in keyof P]?: t.OutputOf<P[K]> },
    unknown
  > {}

export function partial<P extends t.Props>(
  props: P,
  name: string = getInterfaceTypeName(props)
): PartialC<P> {
  return (pipe(
    props,
    map((a) => optionFromNullable(a)),
    (ps) => t.type(ps, name)
  ) as any) as PartialC<P>;
}
