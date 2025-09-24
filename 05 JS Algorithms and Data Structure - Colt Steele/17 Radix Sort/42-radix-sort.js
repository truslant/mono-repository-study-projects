function getDigit(num, i) {
    // using this function may be helpful. good luck!
    return Math.floor(num / Math.pow(10, i)) % 10
}

function digitCount(num) {
    // using this function may be helpful. good luck!
    return Math.floor(Math.log10(num)) + 1
}

function mostDigits(nums) {
    // using this function may be helpful. good luck!
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num))
    }
    return maxDigits

}

function radixSort(nums) {
    // good luck!
    const maxDigits = mostDigits(nums)
    for (let k = 0; k < maxDigits; k++) {
        let radixBuff = Array.from({ length: 10 }, () => { return [] })
        for (let num of nums) {
            let index = getDigit(num, k);
            radixBuff[index].push(num)
        }
        nums = [].concat(...radixBuff)
    }
    return nums
}

console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]));
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]