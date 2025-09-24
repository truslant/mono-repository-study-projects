class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    pop() {
        let current = this.head;
        if (current === null) {
            return undefined
        } else {
            let newTail = current
            while (current.next) {
                newTail = current;
                current = current.next
            }

            this.tail = newTail
            this.tail.next = null;
            this.length--;
            if (this.length <= 0) {
                this.head = null;
                this.tail = null;
            }
        }
        return current
    }
    shift() {
        if (this.head === null) { return undefined }
        let current = this.head;
        this.head = current.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return current;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

const linkedList = new SinglyLinkedList()

linkedList.push(0);
// linkedList.push(1);
// linkedList.push(2);
// linkedList.push(3);
// linkedList.push(4);
// console.log(linkedList.tail);
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
console.log(linkedList.shift());

console.dir(linkedList)
// console.dir(linkedList.pop())
// console.log(linkedList.tail);
