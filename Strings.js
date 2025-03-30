// Task 1: Get String Length

function getStringLenght(str){
    return str.length; 
}
console.log(getStringLenght("Hallo World"))


// Task 2: Print Each Character

function printEachCharecter (str) {

    if (typeof str !== 'string') {
        console.log("Invalid input: Please provide a string.");
        return;
      }
    
      if (str.length < 1 || str.length > 50) {
        console.log("Invalid input: String length must be between 1 and 50 characters.");
        return;
      }
    
      for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
      }
    }
    
    // Task 3: Capitalize Name and Surname


function capitalizeNameAndSurname(fullName) {
   
    if (typeof fullName !== 'string') {
      return "Please provide a valid string.";
    }
  
    
    const parts = fullName.trim().split(" ");
  
   if (parts.length !== 2) {
      return "Please provide exactly a name and surname.";
    }
  
    const name = parts[0][0].toUpperCase() + parts[0].slice(1).toLowerCase();
    const surname = parts[1][0].toUpperCase() + parts[1].slice(1).toLowerCase();
  
   
    return name + " " + surname;
  }

  console.log(capitalizeNameAndSurname("john doe"));  
console.log(capitalizeNameAndSurname("mary smith"));  
console.log(capitalizeNameAndSurname("john"));  
console.log(capitalizeNameAndSurname(12345)); 

// Task 4: Alternate Case

function alternateCase(str) {
  
    if (str.length < 10 || str.length > 20) {
        console.log("Please provide a string with a length between 10 and 20 characters.");
      return 
    }
  
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        result += str.charAt(i).toUpperCase();
      } else {
    result += str.charAt(i).toLowerCase();
      }
    }
  
    console.log (result);
  }
  

  // Task 5: Check Palindrome
  function checkPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
  }

  // Task 6: Count Specific Character in String
  function countCharacterInString(mainString, character) {
     if (character.length !== 1) {
      return "Please provide a single character.";
    }
  
    let count = 0;
  
   for (let i = 0; i < mainString.length; i++) {
      if (mainString.charAt(i) === character) {
        count++;
      }
    }
  
 return count;
  }