const isSubsequence = (string, sub) => {

    // check if sting.length <= sub
    // if false return false
    if (string.length > sub.length) { return false }

    //initialize i=0 and j=0
    let i = 0;
    let j = 0;

    // start while loop - condition: i<=sting.length && j<=sub.length
    while (i < string.length && j < sub.length) {

        //check if string[i]===sub[j]
        if (string[i] === sub[j]) {
            //if true increment i and increment j
            ++i;
        }

        //else increment j only
        ++j;

        //end loop
    }

    //check if i === sting.length
    // return true
    if (i >= string.length) { return true }

    // else return false
    return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false