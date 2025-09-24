const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


const obj2 = Object.values(obj)

console.log(obj2);

console.log(obj2.shift())
console.log(obj2)

console.log(Object.values(obj2))

console.log(obj2[0])

console.log(Object.values(obj2[0])[0])
console.log(Object.values(Object.values(obj2[0])[0]))
console.log(Object.values(Object.values(obj2[0])[0])[0])
console.log(Object.values(Object.values(Object.values(obj2[0])[0])[0]))

// console.log(obj2.prototype.isPrototypeOf(Object));