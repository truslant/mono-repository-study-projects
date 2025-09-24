const countZeroes = (array) => {

    let i = Math.floor(array.length / 2)

    while (i < array.length) {

        if ((array[i - 1] || !i) && (!array[i + 1])) {
            return array.length - i - (array[i] || 0)

        } else if (array[i - 1]) {
            i = Math.max(Math.floor((array.length + 1) / 2), i + 1)
        } else {
            i = Math.floor(i / 2)
        }
    }
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]))// 2
console.log(countZeroes([1, 0, 0, 0, 0]))// 4
console.log(countZeroes([0, 0, 0]))// 3
console.log(countZeroes([1, 1, 1, 1]))// 0