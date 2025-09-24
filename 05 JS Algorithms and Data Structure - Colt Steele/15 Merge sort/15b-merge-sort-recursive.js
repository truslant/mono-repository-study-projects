const mergeSort = (input) => {

    const mergeSortedArrays = (arr1, arr2) => {
        let newArray = []
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                newArray.push(arr1[i])
                ++i
            } else {
                newArray.push(arr2[j])
                ++j
            }
        }
        if (j < arr2.length) {
            newArray = newArray.concat(arr2.slice(j))
        } else {
            newArray = newArray.concat(arr1.slice(i))
        }
        return newArray
    }


    if (!Array.isArray(input[0]) && input.length > 1) {
        const midpoint = Math.floor(input.length / 2)

        return mergeSortedArrays(
            mergeSort(input.slice(0, midpoint)),
            mergeSort(input.slice(midpoint))
        )

    } else {
        // } else if (!Array.isArray(input[0]) && input.length === 1) {
        return input
    }
}

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];

console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]