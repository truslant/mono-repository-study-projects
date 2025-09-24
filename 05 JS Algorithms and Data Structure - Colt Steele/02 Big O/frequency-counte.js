const frequencyCounter = (arr1, arr2) => {
    // check the length of 2 arrays for equality, if not return false

    if (arr1.length !== arr2.length) {
        console.log('Length failure')
        return false
    }

    // for of loop for arr1 into arr1Object with key beings square of it's value and value being value

    let arr1Obje = {};
    let arr1SqSum = 0;
    let arr2SqSum = 0;

    for (let value of arr1) {
        arr1Obje[`${value * value}`] = value
        arr1SqSum += value * value;
    }

    // for of loop for arr2 to check if input.toString has a key in arr1Object
    console.log(arr1Obje);
    for (let value of arr2) {
        arr2SqSum += value
        if (!arr1Obje[value.toString()]) {
            console.log('Comparison failure for:', value.toString());
            console.log('arr1Obje[value.toString()]:', arr1Obje[value.toString()])
            return false
        }
    }

    //check if sum is squares for arr1 and arr2 are equal
    if (arr1SqSum !== arr2SqSum) {
        console.log('arr1SqSum', arr1SqSum)
        console.log('arr2SqSum', arr2SqSum)
        console.log('Sums of squares failure')
        return false
    }
    // for a missing match return false and return default as true
    return true
}

// const arr1 = [1, 2, 3]
// const arr2 = [9, 1, 4]
const arr1 = [1, 2, 3]
const arr2 = [4, 9, 1]
console.log(frequencyCounter(arr1, arr2));