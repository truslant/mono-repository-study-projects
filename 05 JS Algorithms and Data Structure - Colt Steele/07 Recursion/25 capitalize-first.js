const capitalizeFirst = (array) => {

    // console.log(array)
    if (!Array.isArray(array)) {
        // console.log('array length - 1')
        return array.slice(0, 1).toUpperCase() + array.slice(1)
    } else if (!array.length) {
        return []
    }
    return [capitalizeFirst(array.shift())].concat(capitalizeFirst(array))
}


console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']












// const capitalizeFirst = (initialArray) => {
//     // intializes result array as empty
//     const result = []
//     // initialize recurser [capitalize] with [array] as parameter
//     const capitalize = (array) => {

//         // check if [array] is empty => return (empty) if true
//         if (!array.length) { return }

//         // initialize word to array.pop()
//         const word = array.pop()
//         result.unshift(word.slice(0, 1).toUpperCase() + word.slice(1))
//         // unshift to result the combo of word.slice(0,1).toUpperCase()+word.slice(1)
//         // call recurser with array
//         capitalize(array)
//         // end recurser

//     }
//     // call recurser with initalArray as parameter
//     capitalize(initialArray)

//     //return result
//     return result
// }