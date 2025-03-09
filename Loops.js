// 1. While Loop Task – Reverse Counting

let count = 10
while(count >= 1){
console.log(count)
count --
}

// 2. Do-While Loop Task – User Input Until Negative Number
const { userInput } = require("./UserInput");
let number = userInput()
do {
    console.log(number)
    number = userInput("Enter a negative number to stop: ");
 
} while (number >=0)
    console.log("The loop has ended")*/

// 3. For Loop Task – Multiplication Table
let newNumber = 5;

for (let i = 1; i <= 10; i++) 
    { 
    console.log(`${newNumber} x ${i} = ${newNumber * i}`);
    
}

// 4. Break Statement Task – Find the First Multiple of 7
for (let y = 1; y <= 50; y++) {
    if (y % 7 === 0) {
        console.log(`The first number that is a multiple of 7 is: ${y}`);
        break;
    }
}

// 5. Continue Statement Task – Skip Multiples of 3
for (let x =1; x<=20; x++){
    if(x % 3===0){
        continue;
}
console.log(`The rest of the numbers normally: ${x}`);
}

// 6. Nested Loop Task – Print a Square of Stars

for (let j=1; j<=4; j++){
    let stars = '';
    for(let p= 1; p<=4; p++){
        stars += '* ';

    }
console.log(stars);
}
