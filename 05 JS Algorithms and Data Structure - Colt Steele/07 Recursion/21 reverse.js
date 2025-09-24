
    const reverse = (tail) => {
        // check if tail is empty => if true = return (empty)
        if (tail.length === 0) { return ''}

        // extract lastLetter from tail (tail.substring(tail.length-1))
        let lastLetter = tail.substring((tail.length - 1))
        // initialize newTail as tail without last letter => tail.substring(0,tail.length-2)
        let newTail = tail.substring(0, tail.length - 1);

        // add lastLetter
        // recursively call reverser with newTail
        return lastLetter + reverse(newTail);

    }


console.log(reverse('awesome'))// 'emosewa'
console.log(reverse('rithmschool'))// 'loohcsmhtir'