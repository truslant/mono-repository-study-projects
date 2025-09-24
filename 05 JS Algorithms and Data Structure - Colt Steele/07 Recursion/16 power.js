const power = (base, exponent) => {
    if (!exponent) { return 1 }
    return base * power(base, exponent - 1)
}

console.log(power(2, 0))// 1
console.log(power(2, 2))// 4
console.log(power(2, 4))// 16