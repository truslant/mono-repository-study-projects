const minSubArrayLen = (array, target) => {
    
    // initialize i=0 j=1
    let i = 0;
    let j = 1;

    // initialize curSum = array[i]+array[j]
    let curSum = array[i] + array[j]
    
    // initialize recordNum = 0
    let recordNum = 0

    //start loop -> while -> condition (j < array.length)
    while (j < array.length) {
    
        // check if curSum >= target 
        if (curSum >= target) {
            //if true -> 
            // recordNum = Math.min((j-i+1), recordNum || +Infinity)
            recordNum = Math.min((j - i + 1), recordNum || +Infinity);
            // curSum -= array[i]
            curSum -= array[i];
            // increment i
            ++i;
    
            // else 
        } else {
            // increment j
            ++j;
            // curSum += array[j]
            curSum += array[j]
        }

        //end loop
    }

    //return recordNum
    return recordNum
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3]) is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4]) is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0