import next, { countNeighbours } from "./gol";

test("gol.next is a function", () => {
  expect(typeof next).toBe("function");
  // toBe ... ===
  // toEqual ...
});

describe("countNeighbours", () => {
  test("0", () => {
    const input = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const expectedOutput = 0;
    expect(countNeighbours(1, 1, input)).toBe(expectedOutput);
  });

  test("0", () => {
    const input = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
    const expectedOutput = 0;
    expect(countNeighbours(1, 1, input)).toBe(expectedOutput);
  });

  test("1", () => {
    const input = [[0, 1, 0], [0, 0, 0], [0, 0, 0]];
    const expectedOutput = 1;
    expect(countNeighbours(1, 1, input)).toBe(expectedOutput);
  });

  test("4", () => {
    const input = [[1, 1, 0], [0, 1, 0], [0, 1, 1]];
    const expectedOutput = 4;
    expect(countNeighbours(1, 1, input)).toBe(expectedOutput);
  });

  test("2", () => {
    const input = [[0, 1, 0], [0, 1, 0], [0, 1, 1]];
    const expectedOutput = 2;
    expect(countNeighbours(0, 0, input)).toBe(expectedOutput);
  });

  test("8", () => {
    const input = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
    const expectedOutput = 8;
    expect(countNeighbours(1, 1, input)).toBe(expectedOutput);
  });

  test("2", () => {
    const input = [[1, 1, 1], [1, 1, 1], [1, 0, 1]];
    const expectedOutput = 2;
    expect(countNeighbours(2, 2, input)).toBe(expectedOutput);
  });
});

describe("Any live cell with fewer than two live neighbours dies", () => {
  test("all die", () => {
    const input = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const expectedOutput = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    expect(next(input)).toEqual(expectedOutput);
  });
  test("will die", () => {
    const input = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
    const expectedOutput = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    expect(next(input)).toEqual(expectedOutput);
  });

  test("will die", () => {
    const input = [[1, 1, 0], [1, 1, 0], [0, 1, 0]];
    const expectedOutput = [[1, 1, 0], [0, 0, 1], [1, 1, 0]];
    expect(next(input)).toEqual(expectedOutput);
  });

  test("will not die", () => {
    const input = [[1, 0, 1], [0, 1, 0], [0, 0, 0]];
    const expectedOutput = [[0, 1, 0], [0, 1, 0], [0, 0, 0]];
    expect(next(input)).toEqual(expectedOutput);
  });
  test("will die", () => {
    const input = [[1, 1, 0], [1, 0, 0], [0, 0, 0]];
    const expectedOutput = [[1, 1, 0], [1, 1, 0], [0, 0, 0]];
    expect(next(input)).toEqual(expectedOutput);
  });
});
