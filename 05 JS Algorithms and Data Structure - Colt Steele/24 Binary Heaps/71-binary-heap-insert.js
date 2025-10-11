class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    bubbleUp() {
        let length = this.values.length;

        let curIndex = length - 1;
        let targetValue = this.values[curIndex]

        let parentIndex = Math.floor((curIndex - 1) / 2)
        let parentValue;

        while (parentIndex >= 0) {
            parentValue = this.values[parentIndex]
            if (parentValue < targetValue) {
                [this.values[curIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[curIndex]]
                curIndex = parentIndex;
            } else {
                break;
            }
            parentIndex = Math.floor((curIndex - 1) / 2)
        }

    }
    insert(val) {
        this.values.push(val)
        let length = this.values.length
        if (length > 1) {
            this.bubbleUp()
        }
    }
}

let result;
binaryHeap = new MaxBinaryHeap()
binaryHeap.insert(1)
binaryHeap.values[0] // 1

result = binaryHeap.values
console.log(result)

binaryHeap.insert(2)
binaryHeap.values[0] // 2

binaryHeap.values // [2, 1]

binaryHeap.insert(3)
binaryHeap.values[0] // 3

binaryHeap.values // [3, 1, 2]

binaryHeap.insert(4)
binaryHeap.values[0] // 4

binaryHeap.values // [4, 3, 2, 1]
result = binaryHeap.values
console.log(result)

binaryHeap.insert(5)
binaryHeap.values[0] // 5

binaryHeap.values // [5, 4, 2, 1, 3]

binaryHeap.insert(6)
binaryHeap.values[0] // 6

result = binaryHeap.values // [6, 4, 5, 1, 3, 2]
console.log(result)