class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print() {
        let current = this.head
        let array = []
        while (current) {
            array.push(current.val)
            current = current.next
        }
        console.log('List structure:', array)
        return array;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail = newNode;
            let current = this.head
            let next = current.next
            while (next) {
                current = current.next
                next = current.next;
            }
            current.next = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (this.length === 0) { return undefined }
        if (this.length === 1) {
            let node = this.head
            this.tail = null;
            this.head = null;
            this.length = 0;
            return node
        }
        let prev = this.head;
        let current = prev.next;
        while (current?.next) {
            prev = current;
            current = current.next
        }
        prev.next = null
        this.tail = prev;
        this.length--;
        return current
    }
    get(index) {
        if (index < 0 || index >= this.length) { return null }
        let counter = 0;
        let curNode = this.head;
        while (counter < index) {
            curNode = curNode.next;
            counter++;
        }
        return curNode
    }
    set(index, val) {
        let targetNode = this.get(index);
        if (!targetNode) { return false }
        targetNode.val = val;
        return true
    }
    insert(index, val) {
        if (index === this.length) {
            return !!this.push(val);
        }
        let newNode = new Node(val)
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return true;
        }

        if (this.get(index)) {
            let prev = this.head;
            let post = prev.next;
            let curIndex = 0;
            while (curIndex < index - 1) {
                prev = prev.next;
                post = prev.next;
                curIndex++
            }
            newNode.next = post;
            prev.next = newNode;
            this.length++;
            return true
        }
        return false;
    }
    remove(index) {
        if (!this.get(index)) { return undefined };
        if (index === 0) {
            let current = this.head;
            this.head = current.next;
            this.length--;
            return current;
        }
        let curIndex = 0;
        let pre = this.head;
        let target;
        let post;
        while (curIndex < index - 1) {

            pre = pre.next;
            target = pre.next;
            post = target.next || null;
            curIndex++
        }
        pre.next = post;
        if (!post) {
            this.tail = pre;
        }
        this.length--;
        return target
    }
    rotate(shift) {
        let splitIndex;
        if (shift > 0) {
            splitIndex = (shift % this.length - 1)
        } else if (shift < 0) {
            splitIndex = (this.length - (Math.abs(shift % this.length)) - 1)
        }
        if (splitIndex <= 0) {
            return this
        }
        console.log('Split index:', splitIndex)
        let curNode = this.head;
        let oldHead = curNode;
        let next = curNode;
        let counter = 0;
        while (counter !== this.length - 1) {
            next = next.next
            if (counter === splitIndex) {
                curNode.next = null
                this.tail = curNode
                this.head = next
            }
            curNode = next;
            counter++
        }
        curNode.next = oldHead

        return this;
    }
}

let newList = new SinglyLinkedList();

newList.push(5).push(10).push(15).push(20).push(25)

// newList.print()
let result = newList.rotate(1000)

// console.log('Result:', result)
newList.print()
// console.log('List length:', newList.length)
console.log('List tail:', newList.tail)