// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here

function calculateSquare(n, callback) {
    callback(n*n);
}

// Task 2: Login Status (Simple Callback)

function checkLogin(username, password, callback) {
    const correctUsername = "firstUser";
    const correctPassword = "Test123#";
  
    if (correctUsername === username && correctPassword === password) {
      callback("Login success");
    } else {
      callback("Wrong Login");
    }
  }
  checkLogin("firstUser", "Test123#", (message) => {
    console.log(message);  
  });
  
  checkLogin("firstUser", "wrongPassword", (message) => {
    console.log(message);  
  });

  
// Task 3: Sum of Numbers (Using for Loop and Callback)

function sumNumbersUpTo(n, callback) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    callback(sum); 
  }