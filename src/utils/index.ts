import * as t from "io-ts";

export function getNameFromProps(props: t.Props): string {
  return Object.keys(props)
    .map((k) => `${k}: ${props[k].name}`)
    .join(", ");
}

export function getInterfaceTypeName(props: t.Props): string {
  return `{ ${getNameFromProps(props)} }`;
}
