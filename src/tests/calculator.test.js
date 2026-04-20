const {
  add,
  subtract,
  multiply,
  divide,
  calculate,
  runCli,
} = require("../calculator");

describe("calculator operations", () => {
  test("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplies numbers", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("divides numbers", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("throws on division by zero", () => {
    expect(() => divide(20, 0)).toThrow("Cannot divide by zero.");
  });
});

describe("calculate dispatcher", () => {
  test("supports symbol and word aliases", () => {
    expect(calculate("+", 2, 3)).toBe(5);
    expect(calculate("add", 2, 3)).toBe(5);
    expect(calculate("-", 10, 4)).toBe(6);
    expect(calculate("subtract", 10, 4)).toBe(6);
    expect(calculate("*", 45, 2)).toBe(90);
    expect(calculate("x", 45, 2)).toBe(90);
    expect(calculate("multiply", 45, 2)).toBe(90);
    expect(calculate("/", 20, 5)).toBe(4);
    expect(calculate("divide", 20, 5)).toBe(4);
  });

  test("throws for unsupported operations", () => {
    expect(() => calculate("power", 2, 3)).toThrow("Unsupported operation.");
  });
});

describe("runCli input handling", () => {
  test("parses string args and calculates", () => {
    expect(runCli(["+", "2", "3"])).toBe(5);
  });

  test("throws for missing args", () => {
    expect(() => runCli(["+", "2"])).toThrow("Usage: node src/calculator.js");
  });

  test("throws for invalid numeric inputs", () => {
    expect(() => runCli(["+", "abc", "3"])).toThrow(
      "Both number1 and number2 must be valid numbers."
    );
  });
});
