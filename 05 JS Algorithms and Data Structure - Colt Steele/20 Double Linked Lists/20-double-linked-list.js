class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoblyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print() {
        let array = []
        let curNode = this.head;
        while (curNode) {
            array.push(curNode.val)
            curNode = curNode.next
        }
        console.log('Current List:', array)
        return array
    }
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this
    }
    pop() {
        if (this.length === 0) { return undefined }
        let target = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            let prev = this.tail.prev;
            prev.next = null;
            target.prev = null
            this.tail = prev;
        }
        this.length--
        return target;
    }
    shift() {
        if (this.length === 0) { return undefined }
        let target = this.head;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            let next = target.next;
            target.next = null
            next.prev = null
            this.head = next;
        }
        this.length--
        return target
    }
    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) { return undefined }
        let middle = (this.length - 1) / 2
        let curNode;
        if (index < middle) {
            console.log('Working from start...')
            curNode = this.head;
            let curIndex = 0;
            while (curIndex < index) {
                curNode = curNode.next
                curIndex++
            }
        } else {
            console.log('Working from end...')
            curNode = this.tail;
            let curIndex = this.length - 1
            while (curIndex > index) {
                curNode = curNode.prev;
                curIndex--
            }
        }
        return curNode
    }
    set(index, val) {
        let node = this.get(index);
        if (index !== null) {
            node.val = val
            return true
        } else {
            return false;
        }
    }
    insert(index, val) {
        if (index < 0 || index > this.length) { return false }
        if (index === 0) { return !!this.unshift(val) }
        if (index === this.length) { return !!this.push(val) }
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let next = prev.next;

        newNode.prev = prev;
        newNode.next = next;
        prev.next = newNode;
        next.prev = newNode;

        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length - 1) { return undefined }
        if (index === 0) { return this.shift() }
        if (index === this.length - 1) { return this.pop() }
        let targetNode = this.get(index);
        let prev = targetNode.prev;
        let next = targetNode.next;
        prev.next = next;
        next.prev = prev;
        targetNode.next = null;
        targetNode.prev = null;
        return targetNode;
    }
}

const newList = new DoblyLinkedList();

newList.push(0);
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);
newList.push(8);
newList.push(9);

newList.insert(4, 303);
let result = newList.remove(4);

newList.print();
// console.log('List length:', newList.length);
console.log('Result:', result);
// console.log('List tail:', newList.tail);