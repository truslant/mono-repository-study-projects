// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.



function nestedEvenSum(object) {
    // add whatever parameters you deem necessary - good luck!

    if (typeof object === "object" && !Array.isArray(object)) {
        return nestedEvenSum(Object.values(object))
    } else if (Array.isArray(object)) {
        if (object.length === 0) { return 0 }
        return nestedEvenSum(object.shift()) + nestedEvenSum(object)
    } else if (typeof object === 'number' && (object % 2 === 0)) {
        return object
    } else {
        return 0
    }
}

// console.log(nestedEvenSum({
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }))



var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

// console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10