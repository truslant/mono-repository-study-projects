const areThereDublicates = (...array) => {

    //check if array length is less than 2
    // return false if true
    if (array.length < 2) { return false }

    //sort the array
    array.sort();

    //using for...of loop through [array] with index starting from 1 and >=array.length
    
    for (let i = 1; i <= array.length; i++) {
        //compare array[index] with array[index-1]
        if (array[i] === array[i - 1]) {
            //if comparable - return true
            return true
        }
    //end loop
    }

    //return false
    return false
}


console.log(areThereDublicates(1, 2, 3)); //false
console.log(areThereDublicates(1, 2, 2)); //true
console.log(areThereDublicates('a', 'b', 'c', 'a')); //true