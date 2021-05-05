const { validate } = require("./../app");

jest.mock("node-fetch");

describe("mdlinks", () => {
  test("validate", () => {
    return validate("./examplefile.md").then((data) => {
      console.log(data);
      expect(Array.isArray(data)).toBe(true);
    });
  });
});
