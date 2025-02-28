// //Task 2: Grade Calculator
const { userInput } = require("./UserInput");
// const studentInput = userInput("Enter your score");

// if (studentInput >= 90 && studentInput <= 100) { 
//     console.log('A');
// } else if (studentInput >=80 && studentInput <=89){
//     console.log('B');
// } else if (studentInput >=70 && studentInput <=79){
//     console.log('C');
// } else if (studentInput >=60 && studentInput <=69){
//     console.log('D');
// } else if (studentInput < 60) {
//     console.log('F');
// }


// //Task 1: Check Positive, Negative, or Zero
// const number = userInput('Enter your positive or negative number');
// if (number > 0) {
//     console.log("Positive number");
// } else if (number < 0) {
//     console.log("Negative number");
// } else if (number == 0) {
//     console.log("Number is 0");
// }

// //Task 3: Weekend Checker
// const weekday = userInput('Enter weekday');
// if (weekday === 'Saturday' || weekday === 'Sunday') {
//     console.log("It's the weekend!")
// } else {
//     console.log ("It's a weekday")
// }

// // Task4: Game Score Adjuster
let totalScore = 10;
const question1 = userInput('1 + 1');
if (question1 == 2) {  
    totalScore++;  
} else {
    totalScore--;  
}
const question2 = userInput('10-10');
if (question2==0) {  
    totalScore++;  
} else {
    totalScore--;  
}
const question3 = userInput('15+15');
if (question3==30) {  
    totalScore++;  
} else {
    totalScore--;  
}
const question4 = userInput('5+1');
if (question4==6) {  
    totalScore++;  
} else {
    totalScore--;  
}
const question5 = userInput('8+8');
if (question5==16) {  
    totalScore++;  
} else {
    totalScore--;  
}
const question6 = userInput('9+1');
if (question6==10) {  
    totalScore++;  
} else {
    totalScore--;  
}
const question7 = userInput('1+4');
if (question7 == 5) {  
    totalScore++;  
} else {
    totalScore--;  
}
const question8 = userInput('90-10');
if (question8==80) {  
    totalScore++;  
} else {
    totalScore--;  
}
const question9 = userInput('80-10');
if (question9==70) {  
    totalScore++;  
} else {
    totalScore--;  
}

const question10 = userInput('81-10');
if (question10==71) {  
    totalScore++;  
} else {
    totalScore--;  
}

if (totalScore === 0) {
    console.log ("Game Over");
} else {
    console.log("current score" + totalScore);
} 
