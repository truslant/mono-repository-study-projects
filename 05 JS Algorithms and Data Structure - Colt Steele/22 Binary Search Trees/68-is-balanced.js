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
        // only accept numbers....watch out since NaN is typeof number!
        if (typeof value === 'number' && !isNaN(value)) {
            // if there is nothing in the tree, start it off with a new node!
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            } else {
                // current variable used for traversal, just like linked lists!
                var current = this.root;
                // keep looping till we get to the correct spot;
                while (true) {
                    if (value < current.value) {
                        // if there is nothing on the left
                        if (current.left === null) {
                            // make a new node and get out
                            current.left = new Node(value);
                            return this;
                        }
                        // otherwise, keep moving on!

                        else {
                            current = current.left;
                        }
                    } else if (value > current.value) {
                        // if there is nothing on the right
                        if (current.right === null) {
                            // make a new node and get out
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                    // otherwise it must be a duplicate so let's get out of here

                    else {
                        return "duplicate!";
                    }
                }
            }
        } else
            return "Please insert a number";
    }

    isBalanced() {
        let min = undefined;
        let max = undefined;

        function recursiveDepth(node, value) {
            if (!node.left && !node.right) {
                if (max === undefined) {
                    max = value
                    console.log('First time Max:', max)
                } else {
                    max = Math.max(max, value)
                    console.log('New Max:', max)
                }
            } else if (!node.left || !node.right) {
                if (min === undefined) {
                    min = value
                    console.log('First time Min:', min)
                } else {
                    min = Math.min(min, value)
                    console.log('New Min:', min)
                }
            }
            node.left && recursiveDepth(node.left, value + 1)
            node.right && recursiveDepth(node.right, value + 1)
        }

        recursiveDepth(this.root, 0);
        return max - min > 1 ? false : true
    }
}
// console.log('Final Min:', min);
// console.log('Final Max:', max);

let result;
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// result = binarySearchTree.isBalanced(); // true

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
// binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(6);
// binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(7);
result = binarySearchTree2.isBalanced(); // false



console.log('Result:', result)
