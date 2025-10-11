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

        if (this.root === null) { return null }

        let parentNode;
        let lowestGreatAnchestor;

        let looseTail;

        function recursiveFindTargetNode(curNode, val) {
            if (curNode.value === val) {
                return curNode
            } else if (curNode.value > val) {
                if (curNode.left) {
                    parentNode = curNode;
                    lowestGreatAnchestor = curNode;
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

        // function recursiveFindSuccessor(node) {
        //     let leftmostNode = null;
        //     if (node.left === null && node.right === null) {
        //         return leftmostNode;
        //     } else if (node.left) {
        //         leftmostNode = node;
        //         return recursiveFindSuccessor(node.left)
        //     } else {
        //         return recursiveFindSuccessor(node.right)
        //     }
        // }


        // let targetNode = recursiveFindTargetNode(this.root, val);

        // if (!targetNode.left && !targetNode.right) {
        //     if (parentNode.left === targetNode) {
        //         parentNode.left = none;
        //     } else {
        //         parentNode.right = none;
        //     }
        // } else if (!targetNode.left && targetNode.right) {

        // }


        if (this.root.value === val) {
            if (this.root.right) {
                if (this.root.left) {
                    looseTail = this.root.left
                }
                this.root = this.root.right
                if (looseTail) {
                    this.insert(looseTail.value);

                    recursiveFindTargetNode(this.root, looseTail.value);

                    if (looseTail.value < parentNode.value) {
                        parentNode.left = looseTail;
                    } else {
                        parentNode.right = looseTail
                    }
                }
            } else if (this.root.left) {
                this.root = this.root.left
            }
        } else {
            const targetNode = recursiveFindTargetNode(this.root, val)
            if (!targetNode) { return null }

            //handling right tail
            if (targetNode.value > parentNode.value) {
                parentNode.right = targetNode.right
            } else {
                parentNode.left = targetNode.right
            }

            if (targetNode.left === null && targetNode.right === null) {
                return
            }

            //handling left tail
            looseTail = targetNode.left

            if (!targetNode.right.left) {
                targetNode.right.left = looseTail
            } else {
                this.insert(looseTail.value);
                recursiveFindTargetNode(targetNode.right, looseTail.value);

                if (looseTail.value < parentNode.value) {
                    parentNode.left = looseTail;
                } else {
                    parentNode.right = looseTail
                }

            }
        }
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