const { userInput } = require("./UserInput");
const number = userInput();
// Task 1: Even or Odd Number
if (number % 2 === 0) {
    console.log("This is an even number.");
} else {
    console.log("This is an odd number.");
}
console.log(number %2 === 0 ? "This is an even number." : "This is an odd number." )

  

// Task 2: Pass or Fail
const scoreInput = userInput('Enter your score');
if (scoreInput >= 50 && scoreInput < 100) {
    console.log("pass");
} else {
    console.log("fail");
}

console.log(scoreInput >= 50 && scoreInput < 100 ? 'pass' : 'fail');
