//Task 1: Basic Calculator
const { userInput } = require("./UserInput");
let firstNumber = Number(userInput("Enter your first number: "));
let operator = userInput("Enter the operator (+, -, *, /): ");
let secondNumber = Number(userInput("Enter your second number: "));

switch(operator)
{
    case '+': 
    console.log (firstNumber + secondNumber)
    break;

    case '-':
    console.log(firstNumber - secondNumber)
    break;

    case '*':
        console.log(firstNumber * secondNumber)
    break
    case '/':
    console.log(firstNumber / secondNumber)
    break
    default:
        console.log("Invalid operator! Please use +, -, *, or /.")
}
// Division by zero not handled – If secondNumber is 0, it should display an error instead of performing division.
// case '/':
//     if (secondNumber === 0) {
//         console.log("Error: Division by zero is not allowed.");
//     } else {
//         console.log(firstNumber / secondNumber);
//     }
//     break;

//Task 2: Season Finder
const { userInput } = require("./UserInput");
let monthName = userInput("Enter monthName: ")
switch(monthName)
{
  
        case 'december':
        case 'january':
        case 'february':
            console.log("Winter");
            break;
        
        case 'march':
        case 'april':
        case 'may':
            console.log("Spring");
            break;
    
        case 'june':
        case 'july':
        case 'august':
            console.log("Summer");
            break;
    
        case 'september':
        case 'october':
        case 'november':
            console.log("Autumn");
            break;
    
        default:
            console.log("Invalid month! Please enter a valid month name.");
    
}

// Task 3: Determine the Age Group
const { userInput } = require("./UserInput");
const userAge = +userInput("Enter user age: ")
switch (true) {
    case (isNaN(userAge) || userAge < 0):
        console.log("Please enter a valid age.");
        break;
    
    case (userAge >= 0 && userAge <= 12):
        console.log("Child");
        break;

    case (userAge >= 13 && userAge <= 17):
        console.log("Teenager");
        break;

    case (userAge >= 18 && userAge <= 64):
        console.log("Adult");
        break;

    case (userAge >= 65):
        console.log("Senior");
        break;

    default:
        console.log("Invalid age range.");
}
