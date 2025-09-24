const countUniqueValues = (array) => {
    // initialize poiner1 = 0 and pointer2=1 and counter = 0
    let pointer1 = 0;
    let pointer2 = 1;


    //check if array length is 0
    // return 0 if true
    if (array.length === 0) { return 0 }
    // if (array.length === 1) { return 1 }

    //while loop => pointer2 is less than array.length-1
    while (pointer2 < array.length) {
        //check if array[pointer1] not equal to array[pointer2]
        if (array[pointer1] !== array[pointer2]) {

            //increment counter
            // ++counter;
            //pull pointer1 to pointer2
            ++pointer1
            array[pointer1] = array[pointer2]
            //increment pointer2
            //
        }
        // increment pointer2 regardless
        ++pointer2;
    }
    return pointer1 + 1
}


// const countUniqueValues = (array) => {
//     // initialize poiner1 = 0 and pointer2=1 and counter = 0
//     let pointer1 = 0;
//     let pointer2 = 1;
//     let counter = 1

//     //check if array length is 0
//     // return 0 if true
//     if (array.length === 0) { return 0 }
//     // if (array.length === 1) { return 1 }

//     //while loop => pointer2 is less than array.length-1
//     while (pointer2 < array.length) {
//         //check if array[pointer1] not equal to array[pointer2]
//         if (array[pointer1] !== array[pointer2]) {

//             //increment counter
//             ++counter;
//             //pull pointer1 to pointer2
//             pointer1 = pointer2;
//             //increment pointer2
//             //
//         }
//         // increment pointer2 regardless
//         ++pointer2;
//     }
//     return counter
// }



console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))// 7 
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4

