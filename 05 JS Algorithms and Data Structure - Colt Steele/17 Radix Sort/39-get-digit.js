const getDigit = (num, pos) => {
    return Math.floor(num / Math.pow(10, pos)) % 10
}











// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 3)); // 2
// console.log(getDigit(12345, 4)); // 1
// console.log(getDigit(12345, 5)); // 0

// console.log(getDigit(8987, 0)); // 7
// console.log(getDigit(8987, 1)); // 8
// console.log(getDigit(8987, 2)); // 9
// console.log(getDigit(8987, 3)); // 8
// console.log(getDigit(8987, 4)); // 0