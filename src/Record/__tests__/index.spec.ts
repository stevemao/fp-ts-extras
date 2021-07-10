import { union } from "../";

describe("union", () => {
  test("should successfully union all keys of all records", () => {
    const reality = union([
      {
        foo: "foo",
      },
      {
        bar: "bar",
      },
    ]);
    const expected = {
      foo: "foo",
      bar: "bar",
    };
    expect(reality).toStrictEqual(expected);
  });

  test("the latter one should overwrite the previous one", () => {
    const reality = union([
      {
        foo: "foo",
      },
      {
        bar: "bar",
      },
      {
        baz: "baz",
      },
      {
        foo: "foo2",
      },
    ]);
    const expected = {
      foo: "foo2",
      bar: "bar",
      baz: "baz",
    };

    expect(reality).toStrictEqual(expected);
  });
});
