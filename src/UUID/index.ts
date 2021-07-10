import { UUID } from "io-ts-types";
import { v4 } from "uuid";

export default () => v4() as UUID;
