const maxSubArraySum = (array, num) => {
    //initialize 2 varialbes: currentSum=0, firstDigitIndex =0

    let currentSum = 0;
    let firstDigitIndex = 0;
    let newSum = 0

    //for..value..of..maxSubArray:

    for (let i = 0; i <= array.length; i++) {
        // check if index is less than num
        if (i < num) {
            // add current value to current sum
            currentSum += array[i]
            // check if the current index is >= num
        } else {
            if (num === 1) {
                newSum = array[i]
            } else {
                //if true then:
                // compare currentSum to currentSum-array[firstDigitIndex]+array[loop index]
                newSum = currentSum - array[firstDigitIndex] + array[i]
            }
            // if currentSum is smaller, updated current sum to new value, 
            if (newSum > currentSum) { currentSum = newSum }
            // else - do nothing
            // increment firstDigitIndex
            ++firstDigitIndex
        }
    }
    //return currentSum
    return currentSum || null
}



console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)) //17
console.log(maxSubArraySum([4, 2, 1, 6], 1)) //6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubArraySum([], 4)) //null


//console.log(maxSubArraySum([4, 2, 1, 6], 1)) //6

