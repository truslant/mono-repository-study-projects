function minCoinChange(coins, amount) {
    // write your code here
    let total = [];
    let curTotal = 0;
    let j
    for (let i = coins.length - 1; i >= 0; i--) {
        
        j = i
        console.log('new for loop cycle, i:', i)
        while (j >= 0) {
            if (curTotal === amount) { return total }
            if (curTotal + coins[j] <= amount) {
                total.push(coins[j])
                curTotal += coins[j]
                console.log(total)
            } else {
                j--
            }
        }
        curTotal = 0;
        total = []
    }
}

let result;
// const denominations = [1, 5, 10, 25]

result = minCoinChange([1, 2, 3, 4, 5], 11); // this should return: [5, 5, 1]
// minCoinChange([5, 10, 15, 20, 25], 85); // this should return: [25, 25, 25, 10]
// minCoinChange([1, 5, 6, 9], 11); // this should return: [9, 1, 1]

console.log(result)


