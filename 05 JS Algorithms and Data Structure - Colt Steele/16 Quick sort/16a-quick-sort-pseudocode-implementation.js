const pivotSort = (array, start = 0, end = array.length + 1) => {
    console.log('Sorting array:', array);
    let pivot = start;
    for (let i = start + 1; i <= end; i++) {
        if (array[start] > array[i]) {
            ++pivot;
            [array[pivot], array[i]] = [array[i], array[pivot]]
        }
    }
    if (pivot !== start) {
        [array[pivot], array[start]] = [array[start], array[pivot]]
    }

    console.log('Sorting completed, array:', array);
    return pivot;
}



const quickSort = (array) => {
    if (array.length < 2) {
        return array
    } else {
        let index = pivotSort(array)
        let left = quickSort(array.slice(0, index))
        let right = quickSort(array.slice(index + 1))
        let localTotal = left.concat([array[index]]).concat(right)
        return localTotal
    }
}
// const quickSort = (array) => {
//     if (array.length < 2) {
//         console.log('Single item return triggered:', array)
//         return array
//     } else {
//         let index = pivotSort(array)
//         console.log('Split index:', index)
//         console.log('Left array:', array.slice(0, index))
//         let left = quickSort(array.slice(0, index))
//         console.log('Right array:', array.slice(index + 1))
//         let right = quickSort(array.slice(index + 1))
//         let localTotal = left.concat([array[index]]).concat(right)
//         console.log('Local concat total:', localTotal)
//         return localTotal
//     }
// }

// nums = [5, 2, 1, 8, 4, 7, 6, 3];

var nums = [43, 3, 5, 3, 4, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];

console.log(quickSort(nums))

