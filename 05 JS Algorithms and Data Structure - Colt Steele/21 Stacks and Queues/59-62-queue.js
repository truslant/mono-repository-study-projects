class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    }
    print() {
        let array = []
        let curNode = this.first;
        while (curNode) {
            array.push(curNode.value);
            curNode = curNode.next;
        }
        console.log('Stack:', array)
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop() {
        if (this.size === 0) { return undefined }
        let targetNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            targetNode.next = null;
        }
        --this.size
        return targetNode.value
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }
    print() {
        const array = []
        let curNode = this.first;
        while (curNode) {
            array.push(curNode.value);
            curNode = curNode.next;
        }
        console.log('Queue:', array)
    }
    enqueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) { return null }
        let targetNode = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null
        } else {
            this.first = this.first.next;
            targetNode.next = null;
        }
        --this.size
        return targetNode.value;
    }
}

const newQueue = new Queue();
let result;
newQueue.enqueue(0)
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.enqueue(4)
result = newQueue.dequeue()

newQueue.print();

console.log('Result:', result)
// console.log('Size:', newQueue.size);
