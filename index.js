/*let a = parseInt(prompt("Enter first Number"));
let b = parseInt(prompt("Enter second Number"));

let random = Math.random();
console.log(random);

// + -
// * +
// - /
// / **

let operation = prompt("Which operation you want to perform : + , - , * , /");

if (operation === "+") {
  if (random < 0.1) {
    console.log("Wrong calculation : ", a - b);
  } else {
    console.log("Right calculation : ", a + b);
  }
} else if (operation === "-") {
  if (random < 0.1) {
    console.log("Wrong calculation : ", a / b);
  } else {
    console.log("Right calculation : ", a - b);
  }
} else if (operation === "*") {
  if (random < 0.1) {
    console.log("Wrong calculation : ", a + b);
  } else {
    console.log("Right calculation : ", a * b);
  }
} else if (operation === "/") {
  if (random < 0.1) {
    console.log("Wrong calculation : ", a ** b);
  } else {
    console.log("Right calculation : ", a / b);
  }
} else {
  console.log("Wrong Operation Choice");
}
*/

// Harry Solution

let no1 = prompt("Enter first number");
let no2 = prompt("Enter second number");
let operation = prompt("Enter operation");

let falseOp = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

let random = Math.random();

if (random > 0.1) {
  alert(`The result is ${eval(`${no1} ${operation} ${no2}`)}`);
} else {
  console.log(falseOp[operation]);
  operation = falseOp[operation];
  console.log(operation);

  alert(`The result is ${eval(`${no1} ${operation} ${no2}`)}`);
}
