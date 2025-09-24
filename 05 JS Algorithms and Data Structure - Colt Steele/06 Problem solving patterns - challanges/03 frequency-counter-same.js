const sameFrequency = (num1, num2) => {

    //convert num1 & num2 to string

    const string1 = num1.toString();
    const string2 = num2.toString();


    //build object1 from num1 with key of digits and value of digit frequency
    const object1 = {}

    for (let char of string1) {
        object1[char] = (object1[char] || 0) + 1
    }

    //build object2 from num2 with key of digits and value of digit frequency
    const object2 = {}

    for (let char of string2) {
        object2[char] = (object2[char] || 0) + 1
    }

    // using for..in loop through the object1 keys:

    for (key in object1) {
        //check if key is present in object2
        // check if object1[key] value === object2[key] value
        if (!object2[key] || (object1[key] !== object2[key])) {
            //return false if false
            return false
        }
        // end loop    
    }

    // return true
    return true
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false