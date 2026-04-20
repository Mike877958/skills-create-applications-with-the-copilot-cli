#!/usr/bin/env node

/**
 * CLI calculator that supports four basic operations:
 * - addition (+ or add)
 * - subtraction (- or subtract)
 * - multiplication (*, x, or multiply)
 * - division (/ or divide)
 */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

function calculate(op, a, b) {
  const normalized = op.toLowerCase();

  switch (normalized) {
    case "add":
    case "+":
      return add(a, b);
    case "subtract":
    case "-":
      return subtract(a, b);
    case "multiply":
    case "*":
    case "x":
      return multiply(a, b);
    case "divide":
    case "/":
      return divide(a, b);
    default:
      throw new Error(
        "Unsupported operation. Use add(+), subtract(-), multiply(*), or divide(/)."
      );
  }
}

function runCli(args = process.argv.slice(2)) {
  const [operation, leftRaw, rightRaw] = args;

  if (!operation || leftRaw === undefined || rightRaw === undefined) {
    throw new Error("Usage: node src/calculator.js <operation> <number1> <number2>");
  }

  const left = Number(leftRaw);
  const right = Number(rightRaw);

  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new Error("Both number1 and number2 must be valid numbers.");
  }

  return calculate(operation, left, right);
}

if (require.main === module) {
  try {
    const result = runCli();
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, calculate, runCli };
