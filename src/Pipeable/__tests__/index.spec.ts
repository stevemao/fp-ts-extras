import { pipe } from "fp-ts/lib/function";
import { memPipe } from "../";

describe("memPipe", () => {
  test("pipe should run side effect twice if called twice", () => {
    let a = 0;
    const task = pipe(() => a++);
    task();
    task();

    expect(a).toEqual(2);
  });

  test("memPipe should only run side effect once", () => {
    let a = 0;
    const task = memPipe(() => a++);
    task();
    task();

    expect(a).toEqual(1);
  });
});
