function collectStrings(input) {

    if (typeof input === 'object' && !Array.isArray(input)) {
        return collectStrings(Object.values(input))
    } if (Array.isArray(input)) {
        if (input.length===1) {
            return collectStrings(input[0])
        }
        return [collectStrings(input.shift())].concat(collectStrings(input))
    } else {
        return input
    }
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// const obj = {
//     a: {
//         b: 'cat',
//         c: 'mouse'
//     },
//     d: '1'
// }




console.log(collectStrings(obj)) // ["foo", "bar", "baz"])


// function collectStrings(obj) {
//     if (Array.isArray(obj)) {
//         if (obj.length === 1) {
//             return obj[0]
//         } else {
//             return [collectStrings(obj.shift())].concat(collectStrings(obj))
//         }
//     } else if (typeof obj === 'object') {
//         return collectStrings(Object.values(obj))
//     } else {
//         return obj
//     }
// }