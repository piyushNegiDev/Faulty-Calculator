let a = parseInt(prompt("Enter first Number"));
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
