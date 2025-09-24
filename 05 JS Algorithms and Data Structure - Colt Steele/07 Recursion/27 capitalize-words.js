// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.


function capitalizeWords(array) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 1) {
        return array[0].toUpperCase()
    }
    return [capitalizeWords([array.shift()])].concat(capitalizeWords(array))
}


let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']