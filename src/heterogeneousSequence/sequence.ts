import * as A from "fp-ts/lib/Array";
import * as E from "fp-ts/lib/Either";
import * as T from "fp-ts/lib/Task";
import * as TE from "fp-ts/lib/TaskEither";

export default A.array.sequence(TE.taskEither);

export const sequence = A.array.sequence(E.either);

export const tsequence = A.array.sequence(T.task);
