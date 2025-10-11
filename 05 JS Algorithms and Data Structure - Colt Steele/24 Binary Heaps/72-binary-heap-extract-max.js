class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    swapValues(idx1, idx2) {
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2]
        this.values[idx2] = temp
    }
    sinkDown() {
        let curIndex = 0
        let curValue = this.values[curIndex]

        let max;
        let swap = true;

        let leftChildIdx;
        let rigthChildIdx;

        let leftChildValue;
        let rightChildValue;

        while (swap) {

            swap = false;

            leftChildIdx = 2 * curIndex + 1
            rigthChildIdx = 2 * curIndex + 2
            leftChildValue = this.values[leftChildIdx] || -Infinity
            rightChildValue = this.values[rigthChildIdx] || -Infinity

            max = Math.max(curValue, leftChildValue, rightChildValue);

            if (max === curValue) {
                break
            } else if (max === leftChildValue) {
                swap = true
                this.swapValues(curIndex, leftChildIdx)
                curIndex = leftChildIdx
            } else if (max === rightChildValue) {
                swap = true
                this.swapValues(curIndex, rigthChildIdx)
                curIndex = rigthChildIdx
            }
        }

    }
    extractMax() {

        let oldMax = this.values[0]
        let current = this.values.pop()
        let length = this.values.length

        if (length > 0) {
            this.values[0] = current
            this.sinkDown()
        }
        return oldMax
    }
}

let result;

let binaryHeap = new MaxBinaryHeap()

binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
binaryHeap.extractMax()
binaryHeap.values[0] // 5

binaryHeap.values // [5,4,2,1,3])

binaryHeap.extractMax()
binaryHeap.values // [4,3,2,1])

binaryHeap.extractMax()
result = binaryHeap.values // [3,1,2])

console.log(result)