const {
  existPath,
  absolutePath,
  convertToAbsolute,
  validatePath,
  readFile,
  arrayLinks,
} = require("../app.js");

describe("mdLinks", () => {
  it("Is a function", () => {
    expect(typeof existPath).toBe("function");
  });
  test("Check if path exist", () => {
    expect(
      existPath("C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\test")
    ).toBe(true);
  });
  test("Check if path not exist", () => {
    expect(existPath("C:\\Users\\N15\\Desktop\\Laboratoria\\LIM01")).toBe(
      false
    );
  });
});

describe("mdLinks", () => {
  it("Is a function", () => {
    expect(typeof absolutePath).toBe("function");
  });
  test("Check if path is absolute", () => {
    expect(
      absolutePath("C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\test")
    ).toBe(true);
  });
  test("Check if path is not absolute", () => {
    expect(absolutePath("README.md")).toBe(false);
  });
});

describe("mdLinks", () => {
  test("Is a function", () => {
    expect(typeof convertToAbsolute).toBe("function");
  });
  test("Convert the relative path to absolute", () => {
    expect(convertToAbsolute("examplefile.md")).toEqual(
      "C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\examplefile.md"
    );
  });
});

describe("mdLinks", () => {
  test("Is a function", () => {
    expect(typeof validatePath).toBe("function");
  });

  test("It should return an absolute path", () => {
    expect(validatePath("examplefile.md")).toEqual(
      "C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\examplefile.md"
    );
  });
  test("Check if path not exist", () => {
    expect(validatePath("C:\\Users\\N15\\Desktop\\Laboratoria\\LIM01")).toBe(
      "no existe ruta"
    );
  });
});

describe("mdLinks", () => {
  test("Is a function", () => {
    expect(typeof readFile).toBe("function");
  });
  test("It is a markdown file", () => {
    expect(
      readFile(
        "C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\README.md"
      )
    ).toMatch("# Markdown Links");
  });
  test("It is a markdown file", () => {
    /* console.log(readFile(
      "C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\app.js"
    )); */
    expect(
      readFile(
        "C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\app.js"
      )
    ).toBe("No es archivo de extensión .md");
  })
});

describe("mdLinks", () => {
  test("Is a function", () => {
    expect(typeof arrayLinks).toBe("function");
  });
  test("Is a  function", () => {
    expect(
      Array.isArray(
        arrayLinks(
          "C:\\Users\\N15\\Desktop\\Laboratoria\\LIM014-mdlinks\\README.md"
        )
      )
    ).toBe(true);
  });
  
});
