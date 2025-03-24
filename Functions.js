// Task 1: Function Declaration

function firstFunction(firstName, lastName){
 
    return firstName + " " + lastName;
}
console.log (firstFunction("Silva", "Ghazaryan"))

// Task 2: Function Expression
 const { userInput } = require("./UserInput");
 let checkEvenOrOdd = function(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
       return "odd";
    }};
console.log(checkEvenOrOdd(userInput));

// Task 3: Default Value with an Optional Parameter

function calculateDiscount (discount = 0, price) {
  
    const discountAmount = price * (discount / 100);
    const finalPrice = price - discountAmount;
    return finalPrice
}
console.log (calculateDiscount(10,300));