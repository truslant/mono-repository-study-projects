const selectionSort = (array, comparator) => {

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (typeof comparator === 'function') {
                if (comparator(array[min], array[j]) > 0) {
                    min = j
                }
            } else {
                if (array[min] > array[j])
                    min = j
            }
        }
        swap(array, min, i)
    }
    return array
}




// selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// selectionSort([1, 2, 3]); // [1, 2, 3]
// selectionSort([]);

// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//     if (a < b) { return -1; }
//     else if (a > b) { return 1; }
//     return 0;
// }

// selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [{
    name: "LilBub",
    age: 7
}, {
    name: "Garfield",
    age: 40
}, {
    name: "Heathcliff",
    age: 45
}, {
    name: "Blue",
    age: 1
}, {
    name: "Grumpy",
    age: 6
}];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

const newArr = selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

console.log(newArr)