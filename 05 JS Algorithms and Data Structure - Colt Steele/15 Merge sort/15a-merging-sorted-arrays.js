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

// console.log(mergeSortedArrays([3, 20, 42], [4, 7, 27, 51, 56, 67]));
console.log(mergeSortedArrays([3, 20, 42], []));
console.log(mergeSortedArrays([], [4, 7, 27, 51, 56, 67]));