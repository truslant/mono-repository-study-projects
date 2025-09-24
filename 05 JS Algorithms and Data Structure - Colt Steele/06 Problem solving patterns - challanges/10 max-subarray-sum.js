const maxSubarraySum = (array, num) => {
    // check if array length is less num
    // if true => return null
    if (array.length < num) { return null }

    // initialize i=0 and j=1
    let i = 0;
    let j = 1;

    // initialize curSum = array[i]+array[j]
    let curSum = array[i] + array[j];

    //initialize curRecord =null
    let curRecord = null;

    // start while loop -> condition -> j <= array.length
    while (j < array.length ) {
        //check if (j-i+1) is less then num
        if ((j - i + 1) < num) {
            // if true 
            // increment j 
            ++j;
            // curSum += array[j]
            curSum += array[j]
            //else 
        } else {
            // curRecord = Math.max(curSum, curRecord)
            curRecord = Math.max(curSum, curRecord);
            // curSum -= array[i]
            curSum -= array[i]
            // increment i
            ++i
            //end loop
        }
    }

    //return curRecod
    return curRecord
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
console.log(maxSubarraySum([2, 3], 3)) // null





