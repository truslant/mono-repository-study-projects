class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.val)
            current = current.next;
        }
        console.log('List structure:', array);
        return array;
    }
    push(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this;
    }
    pop() {
        if (this.length <= 0) { return undefined };
        let targetNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.tail.prev;
            newTail.next = null;
            targetNode.prev = null;
            this.tail = newTail;
        }
        this.length--;
        return targetNode
    }
    shift() {
        if (this.length === 0) { return undefined }
        let targetNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = targetNode.next;
            targetNode.next = null;
            this.head.prev = null;
        }
        this.length--
        return targetNode
    }
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) { return null }
        if (index === 0) { return this.head }
        if (index === this.length - 1) { return this.tail }
        let midpoint = (this.length - 1) / 2
        let current;
        if (index < midpoint) {
            console.log('Start from top...')
            let counter = 0
            current = this.head;
            while (counter < index) {
                current = current.next;
                counter++
            }
        } else {
            console.log('Start from bottom...')
            let counter = this.length - 1
            current = this.tail;
            while (counter > index) {
                current = current.prev;
                counter--
            }
        }
        return current
    }
    set(index, val) {
        if (index < 0 || index >= this.length) { return false }
        if (index === 0) {
            this.head.val = val;
            return true
        }
        if (index === this.length - 1) {
            this.tail.val = val;
            return true;
        }
        let midpoint = (this.length - 1) / 2
        let current;
        let counter;
        if (index < midpoint) {
            console.log('Start from top...')
            counter = 0;
            current = this.head;
            while (counter < index) {
                current = current.next;
                counter++;
            }
        } else {
            console.log('Start from bottom...')
            counter = this.length - 1
            current = this.tail;
            while (counter > index) {
                current = current.prev;
                counter--
            }
        }
        current.val = val;
        return true
    }
    insert(index, val) {
        if (index < 0 || index > this.length) { return false }
        let newNode = new Node(val)
        if (index === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else if (index === this.length) {
            return !!this.push(val)
        } else {
            let midpoint = (this.length - 1) / 2
            let current;
            let counter;
            if (index < midpoint) {
                current = this.head;
                counter = 0;
                while (counter < index) {
                    current = current.next;
                    counter++
                }
            } else {
                current = this.tail;
                counter = this.length - 1
                while (counter > index) {
                    current = current.prev
                    counter--
                }
            }
            console.log('Current', current)
            let prev = current.prev;
            prev.next = newNode;
            current.prev = newNode;
            newNode.prev = prev;
            newNode.next = current;
        }
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) { return undefined }
        let current;
        if (index === 0) {
            current = this.head
            let next = this.head.next;
            this.head.next = null;
            next.prev = null;
            this.head = next;
        } else if (index === this.length - 1) {
            current = this.tail
            let newTail = this.tail.prev;
            this.tail.prev = null;
            newTail.next = null;
            this.tail = newTail
        } else {
            let midpoint = (this.length - 1) / 2
            let counter;
            if (index < midpoint) {
                counter = 0;
                current = this.head;
                while (counter < index) {
                    current = current.next
                    counter++
                }
            } else {
                counter = this.length - 1;
                current = this.tail;
                while (counter > index) {
                    current = current.prev
                    counter--
                }
            }
            let prev = current.prev;
            let next = current.next;

            prev.next = next;
            next.prev = prev;

            current.next = null
            current.prev = null
        }
        this.length--
        return current
    }
    reverse() {
        this.print()
        let current = this.head;
        this.head = this.tail;
        let temp;
        for (let i = 0; i < this.length; i++) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev;
        }
        return this;
    }
}

let newList = new DoublyLinkedList();
let result;

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

newList.reverse()
newList.print();
// // result = newList.shift()

// // result = newList.insert(3, 303)
// // newList.print();
// // result = newList.insert(10, 909)
// // newList.print();
// result = newList.remove(8)
// newList.print();

// console.log('Result:', result);
// console.log('List length:', newList.length)


// var doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.push(5).push(10).push(15).push(20);
// let result = doublyLinkedList.remove(2).val; // 15
// console.log(result)