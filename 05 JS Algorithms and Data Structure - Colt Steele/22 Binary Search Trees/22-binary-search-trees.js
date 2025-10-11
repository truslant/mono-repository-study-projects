class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {

        function recursiveInsert(node, val, newNode) {
            if (val > node.value) {
                if (node.right) {
                    return recursiveInsert(node.right, val, newNode)
                } else {
                    node.right = newNode
                    return node.right
                }
            } else if (val < node.value) {
                if (node.left) {
                    return recursiveInsert(node.left, val, newNode)
                } else {
                    node.left = newNode
                    return node.left
                }
            } else {
                return undefined;
            }
        }

        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
        } else {
            let targetNode = recursiveInsert(this.root, val, newNode)
        }
        return this
    }
    search(val) {

        function recursiveSearch(node, val) {
            if (node.value === val) {
                return node;
            } else if (node.value > val) {
                if (node.left) {
                    return recursiveSearch(node.left, val)
                } else {
                    return false
                }
            } else {
                if (node.right) {
                    return recursiveSearch(node.right, val)
                } else {
                    return false
                }
            }
        }
        if (this.node === null) { return false }
        return recursiveSearch(this.root, val)

    }
}

let newTree = new BinarySearchTree();

newTree.insert(5)
newTree.insert(7)
newTree.insert(3)
newTree.insert(4)
newTree.insert(6)

// console.log(newTree)
let result;
result = newTree.search(3)

console.log('Result:', result)




console.log('End of execution')