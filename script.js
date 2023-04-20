const calculator = (() => {
  const sum = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const product = (a, b) => a * b;
  const quotient = (a, b) => a / b;

  return { add, sub, mul, div };
})();

console.log(calculator.sum(3, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.product(3, 3));
console.log(calculator.quotient(25, 5));
