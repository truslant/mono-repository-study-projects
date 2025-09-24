const bubbleSort = (array) => {
    const swap = (arr, index1, index2) => {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp
    }

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j + 1] < array[j]) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}

console.log(bubbleSort([9, 3, 1, 4, 7, 2]))