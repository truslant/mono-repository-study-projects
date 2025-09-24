const findLongestSubstring = (string) => {

    //initilize i=0, j=1;
    let i = 0;
    let j = 1;

    //initialize recordLength = 0;
    let recordLength = 0;

    //intialize object = {[string[0]]: 0}
    let object = {
        [string[i]]: i
    }

    //start loop - while - consition: (j < string.length)
    while (j <= string.length) {
        //  check if [object] has [key] of string[j]

        if (object.hasOwnProperty(string[j]) || j === string.length) {
            // if true
            // recordLength = Math.max((j-i), recordLength)

            recordLength = Math.max((j - i), recordLength);
            // console.log(`i:${i}, j:${j}, recordLength${recordLength}`)
            // i = object[key]
            i = object[string[j]] + 1
            // object = {[string[i]]:i}
            object = { [string[i]]: i }
            // j = i+1
            j = i + 1
            // else
        } else {
            // object[string[j]] = j
            object[string[j]] = j
            // increment j
            ++j;
        }

        //end loop
    }

    // return recordLength
    return recordLength
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6

console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1

console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6