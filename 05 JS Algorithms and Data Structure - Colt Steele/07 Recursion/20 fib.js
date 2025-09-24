const fib = (num) => {
    if (num <= 2) { return 1 }

    const fibArray = [1, 1]

    const fibBuilder = (curArray) => {
        if (curArray.length === num) { return }
        curArray.push(curArray[curArray.length - 2] + curArray[curArray.length - 1])
        fibBuilder(curArray)
    }

    fibBuilder(fibArray)

    return fibArray[num - 1]
}


// const fib = (num) => {

//     // if num<=2 return 1
//     if (num <= 2) { return 1 }

//     //initialize fibArray = [1,1]
//     const fibArray = [1, 1]
//     // initialize helper recurser input fibArray (as curArray)
//     const fibBuilder = (curArray) => {
//         //check if array.length = num
//         // if true - empty return (exit helper)
//         if (curArray.length === num) { return }
//         //push to array the sum of array[length-2] & array[length-1]
//         curArray.push(curArray[curArray.length - 2] + curArray[curArray.length - 1])
//         //call helper with fibArray
//         fibBuilder(curArray)
//         // end helper function
//     }
//     fibBuilder(fibArray)
//     return fibArray[num - 1]
// }

console.log(fib(4))// 3
console.log(fib(10))// 55
console.log(fib(28))// 317811
console.log(fib(35))// 9227465