//Task 2: Filter Numbers and Return Object with Sum


function filterNumbers(numbers) {
    let sum = 0;
    for (let i in numbers) {
        sum += i;
    }
    return {filteredArray: numbers, sum: sum};
}

function filterNumbers2(array) {
    let sum = 0;
    let filteredArray = [];
    for (let i in array) {
        if (Number(i)) {
            sum += i;
            filteredArray.push(i);
        }
    }
    return {filteredArray: filteredArray, sum};
}


filterNumbers2([true, "hello", null, 7, 0]);


function filterNumbers3(array) {
    if (!Array.isArray(array)) {
        throw new Error("Throws Error");
    }
}

filterNumbers3();

