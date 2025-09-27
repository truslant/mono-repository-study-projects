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
    enqueue(val) {
        let newNode = new Node(val)
        let oldLast = this.tail;
        if (this.lenght === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size

    }
    dequeue() {
        if (!this.first) { return null }
        let targetNode = this.first;
        if (this.first === this.last) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            targetNode.next = null;
        }
        this.size--
        return targetNode.value;
    }
}



