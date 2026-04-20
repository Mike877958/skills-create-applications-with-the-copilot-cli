const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

describe("calculator basic operations", () => {
  test("addition adds two numbers", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("subtraction subtracts two numbers", () => {
    expect(subtraction(8, 3)).toBe(5);
  });

  test("multiplication multiplies two numbers", () => {
    expect(multiplication(4, 5)).toBe(20);
  });

  test("division divides two numbers", () => {
    expect(division(20, 4)).toBe(5);
  });

  test("division by zero throws an error", () => {
    expect(() => division(8, 0)).toThrow("Division by zero is not allowed.");
  });
});

describe("calculator extended operations", () => {
  test("modulo returns remainder (example: 5 % 2)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("power returns exponentiation result (example: 2 ^ 3)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("square root returns root value (example: sqrt(16))", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("square root of a negative number throws an error", () => {
    expect(() => squareRoot(-16)).toThrow(
      "Square root is not defined for negative numbers.",
    );
  });
});
