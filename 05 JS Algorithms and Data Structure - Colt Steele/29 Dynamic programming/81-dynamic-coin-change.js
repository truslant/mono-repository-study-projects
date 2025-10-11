// function coinChange(coins, amount) {

//     let quartersLimit = Math.floor(amount / 25);
//     let tensLimit = Math.floor(amount / 10);

//     let cache = { 0: 1 }
//     let count = 0

//     for (let quarters = 0; quarters <= quartersLimit; quarters++) {
//         for (let tens = 0; tens <= tensLimit; tens++) {

//             let remainder = amount - quarters * 25 - tens * 10

//             if (remainder < 0) break;

//             if (!cache[remainder]) {
//                 cache[remainder] = Math.floor(remainder / 5) + 1
//             }
//             count += cache[remainder]
//         }
//     }
//     console.log('Result:', count);
//     return count;
// }


function coinChange(coins, amount) {
    let limits = []
    let currentSet = []

    let limit;

    for (let coin of coins) {
        limit = Math.floor(amount / coin)
        limits.push(limit)
    }


    currentSet.unshift(limits[0])
    // console.log('currentSet', currentSet)
    let curRemainder = 0;

    // while (true) {

    for (let i = 0; i < limits.length; i++) {
        // console.log('coins[i]', coins[i])
        curRemainder += coins[i] * currentSet[i] || 0
        // console.log('curRemainder', curRemainder);
    }
    
    // }

    console.log(curRemainder)
}




let result;
const denominations = [1, 5, 10, 25]

// minCoinChange(denominations, 1) // 1
// minCoinChange(denominations, 2) // 1
// result = minCoinChange(denominations, 5) // 2
// result2 = minCoinChange(denominations, 10) // 4
coinChange(denominations, 25) // 13
// result = coinChange(denominations, 45) // 39
// coinChange(denominations, 100) // 242
// coinChange(denominations, 145) // 622
// coinChange(denominations, 1451) // 425663
// coinChange(denominations, 14511) // 409222339

