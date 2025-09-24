const constructNote = (message, charSet) => {

    //sort message
    message = [...message].sort()
    //sort charSet
    charSet = [...charSet].sort()

    //initiate i as 0 and j as 0
    let i = 0;
    let j = 0;

    //while loop - condition - (i <= message.length && j <= charSer.length)
    while (i <= message.length && j <= charSet.length) {
        //check if message[i] === charSet[j]
        if (message[i] === charSet[j]) {
            // console.log('message[i]', message[i])
            // console.log('charSet[j]', charSet[j])
            // if true increment i && j
            ++i;
            ++j;
            // if false increment j
        } else {
            ++j
        }
        //end loop
    }

    //check if i === message.length 
    //return true
    if (i > message.length) { return true }

    //else return false
    return false

}

console.log(constructNote('aa', 'abc'))// false
console.log(constructNote('abc', 'dcba'))// true
console.log(constructNote('aabbcc', 'bcabcaddff'))// true
console.log(constructNote('', 'bcabcaddff'))// true
console.log(constructNote('sdasdasd', ''))// false
