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
    find(val) {
        function recursiveSearch(node, val) {
            if (node.value === val) {
                return node;
            } else if (node.value > val) {
                if (node.left) {
                    return recursiveSearch(node.left, val)
                } else {
                    return undefined
                }
            } else {
                if (node.right) {
                    return recursiveSearch(node.right, val)
                } else {
                    return undefined
                }
            }
        }

        if (this.root === null) { return undefined }
        return recursiveSearch(this.root, val)

    }
    remove(val) {
        let targetNode;
        let parentNode;

        function recursiveFindTargetNode(curNode, val) {
            if (curNode.value === val) {
                return curNode
            } else if (curNode.value > val) {
                if (curNode.left) {
                    parentNode = curNode;
                    return recursiveFindTargetNode(curNode.left, val)
                } else {
                    parentNode = undefined;
                    return false;
                }
            } else {
                if (curNode.right) {
                    parentNode = curNode;
                    return recursiveFindTargetNode(curNode.right, val)
                } else {
                    parentNode = undefined;
                    return false;
                }
            }
        }

        function recursiveFindSuccessor(node) {
            if (!node.left) {
                return node;
            } else {
                parentNode = node;
                return recursiveFindSuccessor(node.left)
            }
        }

        function recursiveDelete(targetNode) {
            console.log('Target Node for Recursion:', targetNode)
            if (targetNode.left && targetNode.right) {
                console.log('2 children case...')
                let successorNode = recursiveFindSuccessor(targetNode.right)
                console.log('Inorder successor:', successorNode)

                if (successorNode) {
                    targetNode.value = successorNode.value;
                    recursiveDelete(successorNode)
                } else {
                    console.log('No successor node indentified - logic failure...')
                }

            } else if (targetNode.left) {
                console.log('Left child only case...')
                if (parentNode.left === targetNode) {
                    parentNode.left = targetNode.left
                } else if (parentNode.right === targetNode) {
                    parentNode.right = targetNode.left
                } else if (parentNode === undefined) {
                    this.root = targetNode.left
                }
            } else if (targetNode.right) {
                console.log('Right child only case...')
                if (parentNode.left === targetNode) {
                    parentNode.left = targetNode.right
                } else if (parentNode.right === targetNode) {
                    parentNode.right = targetNode.right
                } else if (parentNode === undefined) {
                    this.root = targetNode.right
                }
            } else if (!targetNode.left && !targetNode.right) {
                console.log('No children case...');
                if (parentNode.left === targetNode) {
                    parentNode.left = null
                } else if (parentNode.right === targetNode) {
                    parentNode.right = null
                } else if (parentNode === undefined) {
                    this.root = null
                }
            }
        }

        if (this.root === null) { return null }
        targetNode = recursiveFindTargetNode(this.root, val)
        console.log('Target Node:', targetNode);
        console.log('Target Parent Node:', parentNode);
        if (!targetNode) { return null }
        recursiveDelete(targetNode)
    }
}

let result;
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

binarySearchTree.remove(85);

binarySearchTree.root.right.right.value // 88

console.log(binarySearchTree)
console.log('Result:', result)