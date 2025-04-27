// Task 1: Check for a Forbidden Word (Using includes)
function containsForbiddenWord(text, forbiddenWord) {
    return text.toLowerCase().includes(forbiddenWord.toLowerCase());
  }
  
  console.log(containsForbiddenWord("This is a clean sentence.", "bad")); 
  console.log(containsForbiddenWord("Beware of BAD behavior!", "bad"));   

// Task 2: Get Last N Characters of a String (Using slice)
  function getLastNCharacters(text, n) {
    if (n >= text.length) {
      return text;
    }
    return text.slice(-n);
  }
  
 console.log(getLastNCharacters("JavaScript", 4));
 console.log(getLastNCharacters("Hi", 5));    


 // Task 3: Extract the Middle Part of a String (Using substring)
 function extractMiddle(text) {
    const length = text.length;
    const middle = Math.floor(length / 2);
  
    if (length % 2 === 0) {
    
      return text.substring(middle - 1, middle + 1);
    } else {
      
      return text.substring(middle, middle + 1);
    }
  }
  

  console.log(extractMiddle("coding")); 
  console.log(extractMiddle("hello"));