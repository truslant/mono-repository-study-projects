const pivotSort = (array, start = 0, end = array.length - 1) => {
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
    return pivot;
}



// const nums = [43, 232, 4, 34, 232, 32, 4];


var nums = [43, 3, 5, 3, 4, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(pivotSort(nums));


// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];