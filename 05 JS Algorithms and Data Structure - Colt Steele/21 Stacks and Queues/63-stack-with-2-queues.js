class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this.shiftQueue = new Queue();
        this.unshiftQueue = new Queue();
    }
    print() {
        let array = []
        let current = this.first;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        console.log('Stack:', array);
    }

    reverse(baseQueue, reverseQueue) {
        // console.log('Reverse function is running...')
        for (let i = 0; i < baseQueue.size; i++) {
            reverseQueue.dequeue()
        }
        // console.log('Reverse queue:')
        // reverseQueue.print()
        for (let i = baseQueue.size - 1; i >= 0; i--) {
            // console.log('i:', i)
            let j = 0
            let curShiftNode = baseQueue.first;
            while (j < i) {
                curShiftNode = curShiftNode.next;
                j++
            }
            // console.log('curShiftNode.value:', curShiftNode.value)
            reverseQueue.enqueue(curShiftNode.value)
        }
    }
    push(val) {

        if (this.unshiftQueue.size === 0) {
            this.shiftQueue.enqueue(val);
            this.unshiftQueue.enqueue(val);
            this.first = this.shiftQueue.first;
            this.last = this.shiftQueue.last;
        } else {

            this.shiftQueue.enqueue(val);
            this.unshiftQueue.enqueue(val);

            this.reverse(this.shiftQueue, this.unshiftQueue)

            this.first = this.unshiftQueue.first;
            this.last = this.unshiftQueue.last;

        }
        return this
    }
    pop() {

        if (this.unshiftQueue.size === 0) { return null }
        if (this.unshiftQueue.size === 1) {
            this.first = null;
            this.last = null;
            this.size = 0;
            this.unshiftQueue.dequeue()
            return this.shiftQueue.dequeue()
        } else {
            this.shiftQueue.dequeue();
            const result = this.unshiftQueue.dequeue();

            this.reverse(this.unshiftQueue, this.shiftQueue);

            this.first = this.unshiftQueue.first;
            this.last = this.unshiftQueue.last;
            ++this.size
            return result
        }
    }

}
// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    print() {
        let array = []
        let current = this.first;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        console.log('Queue:', array);
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


const newStack = new Stack();

let result;

newStack.push(0).push(1).push(2)

newStack.print()

console.log('Result:', result)


















// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//         this.shiftQueue = new Queue();
//         this.unshiftQueue = new Queue();
//     }
    
//     reverse(baseQueue, reverseQueue) {
//         for (let i = 0; i < baseQueue.size; i++) {
//             reverseQueue.dequeue()
//         }
//         for (let i = baseQueue.size - 1; i >= 0; i--) {
//             let j = 0
//             let curShiftNode = baseQueue.first;
//             while (j < i) {
//                 curShiftNode = curShiftNode.next;
//                 j++
//             }
//             reverseQueue.enqueue(curShiftNode.value)
//         }
//     }
//     push(val) {

//         if (this.unshiftQueue.size === 0) {
//             this.shiftQueue.enqueue(val);
//             this.unshiftQueue.enqueue(val);
//             this.first = this.shiftQueue.first;
//             this.last = this.shiftQueue.last;
//         } else {

//             this.shiftQueue.enqueue(val);
//             this.unshiftQueue.enqueue(val);

//             this.reverse(this.shiftQueue, this.unshiftQueue)

//             this.first = this.unshiftQueue.first;
//             this.last = this.unshiftQueue.last;

//             return ++this.size
//         }
//     }
//     pop() {

//         if (this.unshiftQueue.size === 0) { return null }
//         if (this.unshiftQueue.size === 1) {
//             this.first = null;
//             this.last = null;
//             this.size = 0;
//             this.unshiftQueue.dequeue()
//             return this.shiftQueue.dequeue()
//         } else {
//             this.shiftQueue.dequeue();
//             const result = this.unshiftQueue.dequeue();

//             this.reverse(this.unshiftQueue, this.shiftQueue);

//             this.first = this.unshiftQueue.first;
//             this.last = this.unshiftQueue.last;
//             ++this.size
//             return result
//         }
//     }

// }