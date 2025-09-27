class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    print() {
        const array = []
        let current = this.first;
        while (current) {
            array.push(current.val)
            current = current.next
        }
        console.log('Stack content:', array)
    }
    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            newNode.next = oldFirst;
            this.first = newNode;
        }
        return ++this.size
    }
    pop() {
        if (this.size === 0) { return null }

        let temp = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
            temp.next = null;
        }

        this.size--;
        return temp.val;
    }
}

let stack = new Stack();

stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)

stack.print();
stack.pop()
stack.pop()
stack.print()