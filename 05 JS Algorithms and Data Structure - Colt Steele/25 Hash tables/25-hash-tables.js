class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0
        const primeNum = 31
        let charCode;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            charCode = key[i].charCodeAt(0) - 96;
            total = (total * primeNum + charCode) % this.keyMap.length
        }
        console.log(`Hash of "${key}" is:`, total)
        return total
    }
    set(key, value) {
        let keyHash = this._hash(key);
        if (!this.keyMap[keyHash]) {
            this.keyMap[keyHash] = [[key, value]]
        } else {
            this.keyMap[keyHash].push([key, value])
        }
    }
    get(key) {
        let keyHash = this._hash(key);
        let curKeyMap = this.keyMap[keyHash]
        if (curKeyMap) {
            for (let input of curKeyMap) {
                if (input[0] === key) {
                    return input
                }
            }
        }
        return undefined
    }
    values() {

        function addToArray(array, newInput) {
            for (let value of array) {
                if (value === newInput) {
                    return
                }
            }
            array.push(newInput)
        }

        let array = this.keyMap
        // const result = new Set()
        const result = []
        for (let input of array) {
            if (input && input.length === 1) {
                addToArray(result, input[0][1])
            } else if (input) {
                for (let subInput of input) {
                    addToArray(result, subInput[1])
                }
            }
        }
        return result
    }
    keys() {
        function addToArray(array, newInput) {
            for (let value of array) {
                if (value === newInput) {
                    return
                }
            }
            array.push(newInput)
        }
        let array = this.keyMap
        // const result = new Set()
        const result = []
        for (let input of array) {
            if (input && input.length === 1) {
                addToArray(result, input[0][0])
            } else if (input) {
                for (let subInput of input) {
                    addToArray(result, subInput[0])
                }
            }
        }
        return result
    }
}







let result;

let newHashTable = new HashTable();

newHashTable.set('first', 1)
newHashTable.set('second', 2)
newHashTable.set('third', 3)
newHashTable.set('fourth', 4)
newHashTable.set('fifth', 5)
newHashTable.set('sixth', 6)
newHashTable.set('seventh', 7)
newHashTable.set('eighth', 4)
console.log(newHashTable.keyMap)

// result = newHashTable.get('fourth')
result = newHashTable.values()
result = newHashTable.keys()
console.log(result)