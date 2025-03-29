// Task 1. Convert to Arrow Functions

function multiply(a, b) {
    return a * b;
  }

  const multiply = (a, b) => a * b;

 
  function cube(n) {
    return n * n * n;
  }

  const cube = (n) => n* n * n;


  function sayHello(name) {
    return "Hello, " + name + "!";
  }

let sayHello = (name) => `Hello, ${name}!`;

// Task 2. Arrow Function with Default Parameters

const greet = (name = Guest) => `Hello, ${name}!`;

// Task 3. Calculate Percentage

const calculatePercentage =(total, percentage) => (total * percentage) / 100;
