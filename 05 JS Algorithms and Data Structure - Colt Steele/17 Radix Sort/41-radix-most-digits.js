function digitCount(num) {
    // using this function may be helpful. good luck!
    return Math.floor(Math.log10(num)) + 1
}

function mostDigits(nums) {
    // good luck!
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num))
    }
    return maxDigits
}


console.log(mostDigits([1, 9, 10, 100, 99])); // 3
console.log(mostDigits([100, 1010, 1, 500])); // 4
console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
console.log(mostDigits([])); // 0