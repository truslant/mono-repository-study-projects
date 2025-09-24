const averagePair = (array, average) => {
    //initialize i=0 and j=array.length-1
    let i = 0
    let j = array.length - 1

    //while loop => condition => i < j
    while (i < j) {
        //check if array[j]/2 > average
        if (array[j] / 2 > average) {
            // if true decrement J - continue
            --j;
            continue;
        }

        // calculate [curAverage] = array[i]/2 + array[j]/2
        let curAverage = (array[i] + array[j]) / 2

        // check if [curAverage] is equal average
        if (curAverage === average) {
            //if true return true
            return true

            //else if [curAverage] < average
        } else if (curAverage < average) {
            // increament i
            ++i;
            // else - decrement j
        } else {
            --j;
        }
        // end loop
    }
    //return false
    return false
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false