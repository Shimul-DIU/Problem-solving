const num1 = 20;
const num2 = 5;
const operator = "*";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log("Cannot divide by zero");
    }
    break;

  default:
    console.log("Invalid operator");
}