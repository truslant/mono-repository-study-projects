class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    breadthFirstSearch() {
        let queue = []
        let result = []
        let current
        queue.push(this.root);
        function recursiveTraverse() {
            current = queue.shift()
            if (current) {
                result.push(current.value)
                current.left && queue.push(current.left);
                current.right && queue.push(current.right);
            } else {
                return result
            }
            return recursiveTraverse()
        }
        return recursiveTraverse()
    }
    DFSPreOrder() {
        const result = []
        function recursivePreOrderTraverse(node) {
            result.push(node.value);
            node.left && recursivePreOrderTraverse(node.left)
            node.right && recursivePreOrderTraverse(node.right)
        }
        recursivePreOrderTraverse(this.root);
        return result;
    }
    DFSInOrder() {
        const result = []
        function recursiveInOrderraverse(node) {
            node.left && recursiveInOrderraverse(node.left)
            result.push(node.value)
            node.right && recursiveInOrderraverse(node.right)
        }
        recursiveInOrderraverse(this.root);
        return result
    }
    DFSPostOrder() {
        const result = []
        function recursivePostOrderTraverse(node) {
            node.left && recursivePostOrderTraverse(node.left);
            node.right && recursivePostOrderTraverse(node.right);
            result.push(node.value)
        }
        recursivePostOrderTraverse(this.root);
        return result
    }
}

let result;
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);

// result = binarySearchTree.breadthFirstSearch() // [(15, 10, 20, 1, 12, 50, 5)];

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);
// result = binarySearchTree.DFSPreOrder() // [15, 10, 1, 5, 12, 20, 50]
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);
// result = binarySearchTree.DFSInOrder() // [1, 5, 10, 12, 15, 20, 50]
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
result = binarySearchTree.DFSPostOrder() // [5, 1, 12, 10, 50, 20, 15]
console.log(result)