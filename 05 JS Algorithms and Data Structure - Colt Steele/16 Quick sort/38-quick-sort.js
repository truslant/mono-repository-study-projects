function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let pivotIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (typeof comparator !== 'function') {
            if (arr[i] < pivot) {
                ++pivotIdx;
                [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]]
            }
        } else if (comparator(arr[i], pivot) < 0) {
            ++pivotIdx;
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]]
        }
    }
    if (pivotIdx !== start) {
        [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]]
    }
    return pivotIdx;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {

    if (start < end) {
        let pivotIdx = pivot(arr, comparator, start, end);

        quickSort(arr, comparator, start, pivotIdx);

        quickSort(arr, comparator, pivotIdx + 1, end)
    }
    return arr

}

// console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(quickSort([1, 2, 3])); // [1, 2, 3]
// console.log(quickSort([]));


// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//     if (a < b) { return -1; }
//     else if (a > b) { return 1; }
//     return 0;
// }

// console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

// var moarKittyData = [{
//     name: "LilBub",
//     age: 7
// }, {
//     name: "Garfield",
//     age: 40
// }, {
//     name: "Heathcliff",
//     age: 45
// }, {
//     name: "Blue",
//     age: 1
// }, {
//     name: "Grumpy",
//     age: 6
// }];

// function oldestToYoungest(a, b) {
//     return b.age - a.age;
// }

// console.log(quickSort(moarKittyData, oldestToYoungest));