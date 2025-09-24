
const isPalindrome = (tail) => {

    if (tail.length < 2) {
        return true
    }

    let lastLetter = tail[tail.length - 1];
    let firstLetter = tail[0]

    if (lastLetter !== firstLetter) {
        return false
    } 

    return isPalindrome(tail.substring(1, tail.length - 1))
}


console.log(isPalindrome('awesome'))// false
console.log(isPalindrome('foobar'))// false
console.log(isPalindrome('tacocat'))// true
console.log(isPalindrome('amanaplanacanalpanama'))// true
console.log(isPalindrome('amanaplanacanalpandemonium'))// false