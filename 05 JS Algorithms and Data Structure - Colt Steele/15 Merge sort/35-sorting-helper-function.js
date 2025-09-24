const merge = (arr1, arr2, comparator) => {
    let newArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {

        if (typeof comparator !== 'function') {
            if (arr1[i] < arr2[j]) {
                newArr.push(arr1[i]);
                ++i
            } else {
                newArr.push(arr2[j]);
                ++j
            }
        } else {
            if (comparator(arr1[i], arr2[j]) < 0) {
                newArr.push(arr1[i])
                i++
            } else {
                newArr.push(arr2[j])
                j++
            }
        }
    }
    if (i < arr1.length) {
        newArr = newArr.concat(arr1.slice(i))
    } else {
        newArr = newArr.concat(arr2.slice(j))
    }
    return newArr;
}


// var arr1 = [1, 3, 4, 5];
// var arr2 = [2, 4, 6, 8];
// console.log(merge(arr1, arr2)) // [1,2,3,4,4,5,6,8]

// arr1 // [1,3,4,5];
// arr2 // [2,4,6,8];

// var arr3 = [-2, -1, 0, 4, 5, 6];
// var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

// console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

// var arr5 = [3, 4, 5]
// var arr6 = [1, 2]

// console.log(merge(arr5, arr6)) // [1,2,3,4,5]


var names = ["Bob", "Ethel", "Christine"]
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]

function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]