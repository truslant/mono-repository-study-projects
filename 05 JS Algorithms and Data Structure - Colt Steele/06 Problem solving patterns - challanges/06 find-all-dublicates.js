const findAllDuplicates = (array) => {
    //initialize result=[]

    const result = []
    const object = {}
    //using for ..num.. of .. array loop through array

    for (let num of array) {
        //create [object] with key being the value and value being frequency.
        object[num] = (object[num] || 0) + 1
        //check if object[key] is = 2
        if (object[num] > 1) {
            //if true push [key] to [result]
            result.push(num)
        }
        //end loop
    }

    //return resu lt
    return result
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1