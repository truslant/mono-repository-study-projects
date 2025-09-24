const findPair = (array, delta) => {

    // check if array length is < 2 => return false if true
    if (array.length < 2) { return false }

    //apply sort() to the [array]
    array.sort((a, b) => a - b);

    //initiate i = 0
    let i = 0;

    //initiate j = array.length-1
    let j = array.length - 1;

    //curDelta = -Infinity;
    let curDelta = -Infinity;

    // start while loop - condition (i<array.length)
    while (i < array.length && j < array.length && i < j) {
        //check if delta < 0
        if (delta < 0) {
            //if true - curDelta = array[i]-array[j]
            curDelta = array[i] - array[j]

            //else curDelta = array[j]-array[i]
        } else {
            curDelta = array[j] - array[i]
        }


        //check if delta = curDelta
        if (curDelta === delta) {

            // if true => return true
            return true
        }

        // check if abs(curDelat) > abs(delta)
        if (Math.abs(curDelta) > Math.abs(delta)) {
            // if true - decrement j
            --j;
            //else 
        } else {
            //increment j
            ++j
            //increment i
            ++i
        }

        //end loop
    }
    //return false
    return false
}


console.log(findPair([6, 1, 4, 10, 2, 4], 2))// true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1))// true
console.log(findPair([4, -2, 3, 10], -6))// true
console.log(findPair([6, 1, 4, 10, 2, 4], 22))// false
console.log(findPair([], 0))// false

console.log(findPair([5, 5], 0))// true

console.log(findPair([-4, 4], -8))// true
console.log(findPair([-4, 4], 8))// true
console.log(findPair([1, 3, 4, 6], -2))// true
console.log(findPair([0, 1, 3, 4, 6], -2))// true

console.log(findPair([1, 2, 3], 0))// false