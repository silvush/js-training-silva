//Task 1: Count Words in a Cleaned String

function countWords(input){
    if (typeof input !== 'string'){
        throw new Error('Input must be a string')
    }

const trimmedInput = input.Trim();
if (trimmedInput === ''){

    throw new Error('String is empty or contains only spaces');
}
const words = trimmedInput.split(/\s+/);
return words.length 
}