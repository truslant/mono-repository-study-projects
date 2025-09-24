function insertionSort(array, sortFn) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j;
        if (typeof sortFn !== 'function') {
            for (j = i - 1; j >= 0 && array[j] > current; j--) {
                array[j + 1] = array[j]
            }
        } else {
            for (j = i - 1; j >= 0 && sortFn(array[j], current) > 0; j--) {
                array[j + 1] = array[j]
            }
        }
        array[j + 1] = current
    }
    return array
}

// console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
// console.log(insertionSort([]));

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//     if (a < b) { return -1; }
//     else if (a > b) { return 1; }
//     return 0;
// }

// console.log(insertionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]


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

console.log(insertionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order