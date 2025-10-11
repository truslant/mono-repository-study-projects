class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    bubleUp() {
        let targetIndex = this.values.length - 1
        let parentIndex = Math.floor((targetIndex - 1) / 2)
        while (this.values[targetIndex] > this.values[parentIndex] && parentIndex >= 0) {
            [this.values[targetIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[targetIndex]]
            targetIndex = parentIndex;
            parentIndex = Math.floor((targetIndex - 1) / 2)
        }
    }
    insert(val) {
        this.values.push(val)
        if (this.values.length > 1) {
            this.bubleUp()
        }
    }
    extractMax() {

        let targetValue = this.values.pop()
        const length = this.values.length
        if (!length) { return null }
        this.values[0] = targetValue

        if (length === 2) {
            if (this.values[0] < this.values[1]) {
                [this.values[0], this.values[1]] =
                    [this.values[1], this.values[0]]
            }
            return targetValue
        }

        if (length <= 1) {
            return targetValue
        }

        let curIndex = 0;
        let leftChildIdx = 1;
        let rightChildIdx = 2;
        let max;


        while (rightChildIdx < length || rightChildIdx < length) {

            max = Math.max(
                this.values[rightChildIdx] ?? 0,
                this.values[leftChildIdx] ?? 0,
                this.values[curIndex]
            )

            if (max === this.values[curIndex]) {
                break
            };

            if (this.values[rightChildIdx] > this.values[leftChildIdx] ?? 0) {
                [this.values[rightChildIdx], this.values[curIndex]] =
                    [this.values[curIndex], this.values[rightChildIdx]]
                curIndex = rightChildIdx
            } else {
                [this.values[leftChildIdx], this.values[curIndex]] =
                    [this.values[curIndex], this.values[leftChildIdx]]
                curIndex = leftChildIdx
            }
            leftChildIdx = 2 * curIndex + 1
            rightChildIdx = 2 * curIndex + 2
        }
        return targetValue

    }

}

let maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(41)
maxBinaryHeap.insert(39)
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(18)
maxBinaryHeap.insert(27)
maxBinaryHeap.insert(12)
maxBinaryHeap.insert(55)
console.log(maxBinaryHeap.values)

maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values)
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values)
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values)
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values)


maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values)
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values)
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values)

// console.log(maxBinaryHeap.values)



