
const flatten = (curArray) => {
    if (curArray.length === 1) {
        if (!Array.isArray(curArray[0])) {
            return curArray[0]
        }
    }

    if (!curArray.length) {
        return []
    }

    if (Array.isArray(curArray[0])) {
        return flatten(curArray.shift().concat(flatten(curArray)))

    } else {
        const newItem = curArray.shift()
        return [newItem].concat(flatten(curArray))
    }
}



// const flatten = (curArray) => {
//     // check if array.length === 0 => if true return (empty)
//     if (curArray.length === 1) {
//         if (!Array.isArray(curArray[0])) {
//             // console.log('End case:');
//             // console.log('CurArray:', curArray);
//             // console.log('curArray[curArray.length - 1]:', curArray[curArray.length - 1])
//             return curArray[0]
//         }
//     }

//     if (!curArray.length) {
//         return []
//     }

//     //check if last element of curArray[curArray.lenght-1] is type of array

//     if (Array.isArray(curArray[0])) {
//         // console.log('curArray[0] - array case:', curArray[0])
//         return flatten(curArray.shift().concat(flatten(curArray)))

//     } else {
//         //else push curArray.pop() to result array
//         // console.log('curArray[0] - non-array case:', curArray[0])
//         const newItem = curArray.shift()
//         // console.log('addition:', newItem)
//         return [newItem].concat(flatten(curArray))
//     }
// }


console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]


console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]