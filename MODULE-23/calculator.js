function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
function subtract(num1, num2) {
  const difference = num1 - num2;
  return difference;
}
function multiply(num1, num2) {
  const product = num1 * num2;
  return product;
}
function divide(num1, num2) {
  const quotient = num1 / num2;
  return quotient;
}
function calculator(a, b, operator) {
  if (operator === "add") {
    const result = add(a, b);
    return result;
  } else if (operator === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operator === "multiply") {
    const result = multiply(a, b);
    return result;
  } else {
    const result = divide(a, b);
    return result;
  }
}
const output = calculator(15, 5, "divide");
console.log(output);
