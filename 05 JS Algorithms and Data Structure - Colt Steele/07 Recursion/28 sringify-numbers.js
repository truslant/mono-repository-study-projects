function stringifyNumbers(obj) {

    if (Array.isArray(obj)) {
        if (obj.length === 0) {
            return []
        } else if (obj.length === 1) {
            return [stringifyNumbers(obj[0])]
        } else {
            return [stringifyNumbers(obj.shift())].concat(stringifyNumbers(obj))
        }
    } else if (typeof obj === 'object') {
        const newObj = {}
        Object.keys(obj).forEach(key => {
            newObj[key] = stringifyNumbers(obj[key])
        })
        return newObj
    } else if (typeof obj === "number") {
        return obj.toString()
    } else {
        return obj
    }
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));



