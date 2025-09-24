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

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
    return a.length - b.length
}

console.log(pivot(arr1)); // 3
// console.log(arr1)
console.log(pivot(arr2)); // 4
console.log(pivot(arr3, strLength)); // 1