class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    bubbleUp() {
        const length = this.values.length
        let curIndex = length - 1
        let parentIndex = Math.floor((curIndex - 1) / 2)
        while (parentIndex >= 0) {
            if (this.values[curIndex].priority < this.values[parentIndex].priority) {
                this.swapNodes(curIndex, parentIndex)
                // [this.values[curIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[curIndex]]
                curIndex = parentIndex;
                parentIndex = Math.floor((curIndex - 1) / 2)
            } else {
                break
            }
        }
    }
    swapNodes(idx1, idx2) {
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2]
        this.values[idx2] = temp
    }

    sinkDown() {
        let curIndex = 0;
        let curPriority;
        let min;

        let leftChildIdx;
        let rightChildIdx;

        let leftChildPriority;
        let rightChildPriority;

        let swap = true;


        while (swap) {

            swap = false

            leftChildIdx = 2 * curIndex + 1;
            rightChildIdx = 2 * curIndex + 2;

            curPriority = this.values[curIndex].priority
            leftChildPriority = this.values[leftChildIdx]?.priority || +Infinity
            rightChildPriority = this.values[rightChildIdx]?.priority || +Infinity

            min = Math.min(curPriority, leftChildPriority, rightChildPriority);
            // console.log('Min:', min)
            if (min === curPriority) break

            if (min === leftChildPriority) {

                swap = true;

                this.swapNodes(curIndex, leftChildIdx);

                curIndex = leftChildIdx
            }

            if (min === rightChildPriority) {
                swap = true
                this.swapNodes(curIndex, rightChildIdx)
                curIndex = rightChildIdx
            }
        }

    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    dequeue() {
        let curMin = this.values[0]
        if (this.values.length > 0) {
            this.values[0] = this.values.pop()
            this.sinkDown();
        }
        return curMin
    }
}

let minBinaryHeap = new PriorityQueue();

minBinaryHeap.enqueue(49, 49)
minBinaryHeap.enqueue(39, 39)
minBinaryHeap.enqueue(33, 33)
minBinaryHeap.enqueue(18, 18)
minBinaryHeap.enqueue(27, 27)
minBinaryHeap.enqueue(12, 12)
minBinaryHeap.enqueue(55, 55)
console.log(minBinaryHeap.values)

minBinaryHeap.dequeue()
console.log(minBinaryHeap.values)
minBinaryHeap.dequeue()
console.log(minBinaryHeap.values)
minBinaryHeap.dequeue()
console.log(minBinaryHeap.values)