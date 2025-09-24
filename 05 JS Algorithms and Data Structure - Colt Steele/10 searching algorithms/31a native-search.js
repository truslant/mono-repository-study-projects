const findString = (string, substring) => {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === substring[0]) {
            for (let j = 1; j <= substring.length; j++) {
                if (j === substring.length) { ++count }
                if (string[i + j] !== substring[j]) {
                    break
                }
            }
        }
    }
    return count
}



console.log(findString('qwertyqweryuiopqwer', 'qwer'));
console.log(findString('qwertyqweryuiopqwer', 'you'));