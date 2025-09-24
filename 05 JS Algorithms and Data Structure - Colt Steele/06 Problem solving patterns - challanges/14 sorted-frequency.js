const sortedFrequency = (array, num) => {
    // define i = Math.floor(array.length/2)
    let i = Math.floor(array.length / 2)

    //initialize [loop] = true
    let loop = true;

    // start loop - while - condition ([loop])
    while (loop) {
        // check if array[i] === [num]
        if (array[i] === num) {
            //if true => 
            // check if array[i-1] < array[i]
            if (array[i - 1] < array[i] || !array[i - 1]) {
                // if true break;
                loop = false;
                break
                //else =>
            } else {
                //jump left (Math.floor(i/2))
                i = Math.floor(i / 2)
            }
            //else => check if array[i] < num
        } else if (array[i] < num) {
            //check if i < array.length-1
            if (i < array.length - 1) {
                // if true jump right Math.max(Math.floor((array.length+i)/2),i+1)
                i = Math.max(Math.floor((array.length + i) / 2), i + 1)
            } else {
                // else i= -1 => break
                i = -1;
                loop = false;
                break;
            }
            //else => check if array[i] > num
        } else if (array[i] > num) {

            // check if i>0
            if (i) {
                // if true jump left (Math.floor(i/2))
                i = Math.floor(i / 2)
            } else {
                // else i= -1 => break
                i = -1;
                loop = false;
                break;
            }
        }
        //end loop
    }
    // check if i = -1 => if true -> return i
    if (i === -1) { return i }

    //initialize counter = 0
    let counter = 0;
    // start loop - while: condition (i < array.length)
    while (i <= array.length) {
        //check if array[i] === num
        if (array[i] === num) {
            // increment counter and i
            ++counter;
            ++i;
            //else => return counter
        } else {
            return counter;
        }
    }
    //end loop
}


console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2))// 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3))// 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1))// 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4))// -1