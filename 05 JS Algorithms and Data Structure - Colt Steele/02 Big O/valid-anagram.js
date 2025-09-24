const validAnagram = (string1, string2) => {

    //check length of string1 vs string2 - if not - return false
    if (string1.length !== string2.length) {
        return false
    }

    // using for of convert string1 to object1 with key being the char and the value being the qty of the char in the string1

    const object1 = {}
    const object2 = {}

    for (let char of string1) {
        object1[char] = (object1[char] || 0) + 1
    }
    console.log('Object1:', object1);

    // using for of convert the string2 to object2 with key being the char and the value being the qty of the char in the string2
    for (let char of string2) {
        object2[char] = (object2[char] || 0) + 1
    }
    console.log('Object2:', object2);

    //using for .. in loop over the object1 to check:
    for (let key in object1) {
        //if key of object1[key] has a match with the same key of object2[key]
        //if object1[key] value is equal to object2[key] value
        if (!object2[key] || object1[key] !== object2[key]) {
            //return false if not
            return false
        }
    }
    return true
}

console.log(validAnagram('', ''))// true
console.log(validAnagram('aaz', 'zza'))// false
console.log(validAnagram('anagram', 'nagaram'))// true
console.log(validAnagram("rat", "car")) // false) )// false
console.log(validAnagram('awesome', 'awesom'))// false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt'))// true
console.log(validAnagram('texttwisttime', 'timetwisttext'))// true