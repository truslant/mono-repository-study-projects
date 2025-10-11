let cache = {}
function recrursiveFibonacci(num) {
    if (cache[num]) {
        // console.log(`Chache used for num=${num} with result:`, cache[num])
        return cache[num]
    }
    if (num <= 2) {
        return 1
    } else {
        let result = recrursiveFibonacci(num - 1) + recrursiveFibonacci(num - 2)
        cache[num] = result
        return result
    }
}

// console.log(recrursiveFibonacci(1));
// console.log(recrursiveFibonacci(2));
// console.log(recrursiveFibonacci(3));
// console.log(recrursiveFibonacci(4));
// console.log(recrursiveFibonacci(5));
// console.log(recrursiveFibonacci(6));
// console.log(recrursiveFibonacci(10));
// console.log(cache)

function arrayFib(num) {
    if (num <= 2) return 1
    const result = [0, 1, 1]
    for (let i = 3; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    // console.log(result)
    return result[num]
}

console.log(arrayFib(100))
