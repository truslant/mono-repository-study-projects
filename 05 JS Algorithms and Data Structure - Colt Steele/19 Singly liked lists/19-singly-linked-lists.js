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
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (0 > index || index >= this.length) { return null }
        let curIdx = 0
        let curNode = this.head
        while (curIdx < index) {
            curNode = curNode.next;
            curIdx++
        }
        return curNode
    }
    set(index, val) {
        const curNode = this.get(index);
        if (!curNode) {
            return false
        } else {
            curNode.val = val
            return true
        }
    }
    insert(index, val) {
        if (index < 0 || index > this.length) { return false }
        if (index === this.length) {
            return !!this.push(val)
        } else if (index === 0) {
            return !!this.unshift(val)
        } else {
            const newNode = new Node(val)
            let pre = this.get(index - 1)
            newNode.next = pre.next;
            pre.next = newNode;
            this.length++
            return true
        }
    }
    remove(index) {
        if (index < 0 || index >= this.length) { return null }
        if (index === this.length - 1) { return this.pop() }
        if (index === 0) { return this.shift() }
        let preNode = this.get(index - 1);
        let removedNode = preNode.next;
        preNode.next = removedNode.next
        this.length--
        return removedNode;
    }
    reverse() {
        let curList = this.head;
        this.head = this.tail
        this.tail = curList;
        let prev = null;
        let next = curList;
        while (next) {
            curList = next
            next = next.next
            curList.next = prev;
            prev = curList
        }
    }
}

const linkedList = new SinglyLinkedList()

linkedList.push(0);
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
// console.log(linkedList.tail);
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
// console.log(linkedList.shift());
// linkedList.unshift(1)
// linkedList.unshift(0)

// console.log(linkedList.get(0).val)
// console.log(linkedList.get(1).val)
// console.log(linkedList.get(2).val)
// console.log(linkedList.get(3).val)
// console.log(linkedList.get(4).val)

// console.log(linkedList.set(1, 101));
// console.log(linkedList.get(1).val)
// console.dir(linkedList.pop())
// console.log(linkedList.tail);

// console.log(linkedList.insert(3, 3));
// console.log(linkedList.get(3).val)
// console.log(linkedList.insert(6, 6));
// console.log(linkedList.get(6).val)
// console.log(linkedList.remove(3))
// console.log(linkedList)
linkedList.reverse();
console.log(linkedList)