// Task 1: Get the First and Last Elements of an Array
function getFirstAndLast(arr) {
    const first = arr[0];
    const last = arr.length > 1 ? arr[arr.length - 1] : arr[0];
    return [first, last];
  }
  
console.log(getFirstAndLast([10, 20, 30]));
console.log(getFirstAndLast([42])); 

// Task 2: Get the Second Element in an Array
function getSecondElement(arr) {
    if (arr.length < 2) {
      throw new Error("Array should have a minimum of 2 elements.");
    }
    return arr[1];
  }
  
  console.log(getSecondElement([5, 10, 15]));
// Task 3: Access the First Element That is Greater Than 10
  function getFirstGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  console.log(getFirstGreaterThanTen([3, 8, 12, 5, 20])); 
  console.log(getFirstGreaterThanTen([1, 5, 9])); 