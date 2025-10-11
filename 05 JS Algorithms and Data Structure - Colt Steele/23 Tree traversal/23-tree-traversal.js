class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        const newNode = new Node(val);
        function recursiveInsert(node, val, newNode) {
            if (node.value > val) {
                if (node.left) {
                    return recursiveInsert(node.left, val, newNode)
                } else {
                    node.left = newNode;
                    return node.left
                }
            } else if (node.value < val) {
                if (node.right) {
                    return recursiveInsert(node.right, val, newNode)
                } else {
                    node.right = newNode;
                    return node.right
                }
            } else {
                return false
            }
        }
        if (!this.root) {
            this.root = newNode;
        } else {
            recursiveInsert(this.root, val, newNode);
        }
        return this
    }
    bfs() {
        const queue = []
        const result = []
        let curnode;
        if (!this.root) return null;
        queue.push(binarySearchTree.root)

        function recursiveBreadthTraversal() {
            curnode = queue.shift()
            if (curnode) {
                result.push(curnode.value)
                curnode.left && queue.push(curnode.left)
                curnode.right && queue.push(curnode.right)
            } else {
                return result
            }
            return recursiveBreadthTraversal()
        }

        return recursiveBreadthTraversal()
    }
    dfs() {
        const result = []
        let current = this.root;
        function recursiveDepthTraversal(node) {
            result.push(node.value);
            node.left && recursiveDepthTraversal(node.left)
            node.right && recursiveDepthTraversal(node.right)
        }
        recursiveDepthTraversal(current);
        return result
    }
    dfsPostOrder() {
        let result = []
        function traversePostOrder(node) {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.value)
        }
        traversePostOrder(this.root)
        return result
    }
    dfsInOrder() {
        let result = []
        function traverseInOrder(node) {
            node.left && traverseInOrder(node.left)
            result.push(node.value)
            node.right && traverseInOrder(node.right)
        }
        traverseInOrder(this.root);
        return result
    }
}


let binarySearchTree = new BinarySearchTree()

binarySearchTree.insert(22)
    .insert(49)
    .insert(85)
    .insert(66)
    .insert(95)
    .insert(90)
    .insert(100)
    .insert(88)
    .insert(93)
    .insert(89)

console.log(binarySearchTree.dfsInOrder())