const getDigit = (num, place) => {
    return Math.floor(Math.abs(num / Math.pow(10, place)) % 10)
}

const digitCount = (num) => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (array) => {
    let maxDigits = 0;
    for (let i = 1; i < array.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(array[i]))
    }
    return maxDigits
}


const radixSort = (array) => {
    let radixSorter = Array.from({ length: 10 }, () => []);
    let kMax = mostDigits(array);
    let slot;
    for (let k = 0; k < kMax; k++) {
        for (let num of array) {
            slot = getDigit(num, k);
            radixSorter[slot].push(num)
        }
        console.log(radixSorter)
        array = radixSorter.reduce((collector, curValue) => {
            return collector.concat(curValue)
        })
        radixSorter = Array.from({ length: 10 }, () => [])
    }
    return array
}




console.log(radixSort([12, 1345, 1234, 123456, 56, 7]));