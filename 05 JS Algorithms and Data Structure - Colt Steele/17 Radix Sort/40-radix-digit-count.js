function digitCount(num) {
    // good luck!
    return Math.floor(Math.log10(num)) + 1
}


console.log(digitCount(1)); // 1
console.log(digitCount(9)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(314)); // 3
console.log(digitCount(1234)); // 4
console.log(digitCount(77777)); // 5