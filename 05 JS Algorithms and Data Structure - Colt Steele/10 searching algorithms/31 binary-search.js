function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1;

    let i = Math.floor((array.length - 1) / 2)

    while (start < end) {
        if (array[i] === value) {
            return i
        } else if (array[i] < value) {
            end = i;
            i = Math.max(Math.floor((start + end) / 2), i + 1)
        } else {
            start = i
            i = Math.min(Math.floor((end - start) / 2), i - 1)
        }
    }
    return -1
}


console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5))// 4
console.log(binarySearch([1, 2, 3, 4, 5], 6))// -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95))// 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100))// -1