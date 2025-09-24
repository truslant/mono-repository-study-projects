const sumZero = (array) => {
    //check if first value is less then 0 and last value is greater then 0
    // return 'undefined' if check fails
    if (array[0] > 0 || array[array.length - 1] < 0) { return undefined }

    //use for ... of to convert array to an [object] with keys equal to array [values] and value to equal to the [negaive key value]

    let object = {}

    for (let value of array) {
        if (value !== 0) {
            object[value] = value * -1
        }
    }
    console.log('object:', object);

    //loop [object] via for .. in checking:

    for (let value of array) {
        // if object[key] value has a corresponding key (opposing value)
        if (object[object[value.toString()]]) {
            // return [Number(key),object[key]]
            return [value, object[value.toString()]]
        }
    }
    return undefined;
    //end loop
    //return underfined
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));