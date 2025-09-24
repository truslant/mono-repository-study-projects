const findRotatedIndex = (array, num) => {

    let i = Math.floor(array.length / 2)

    while (i < array.length && !!i) {

        // success case:
        if (array[i] === num) {
            return i

        } else if (array[i] < num) {
            // failure case
            if (Math.min(array[i - 1], num, array[i + 1]) === num) {
                return -1
            }
            //jump right case array[i] < num < array[last item]
            if (num < array[array.length - 1]) {
                i = Math.max(Math.floor((array.length + i) / 2), i + 1)
                // jump left
            } else {
                i = Math.min(Math.floor(i / 2), i - 1)
            }
        } else {
            //jump left case
            if (num > array[0]) {
                i = Math.min(Math.floor(i / 2), i - 1)

                //jump right case
            } else {
                i = Math.max(Math.floor((array.length + i) / 2), i + 1)
            }
        }

    }
    return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14))// -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12))// -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5