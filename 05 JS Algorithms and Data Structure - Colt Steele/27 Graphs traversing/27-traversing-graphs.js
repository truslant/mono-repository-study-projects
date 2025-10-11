class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
    removeVertex(vertex) {
        const array = this.adjacencyList[vertex];
        while (array.length > 0) {
            this.removeEdge(array.pop(), vertex)
        }
        delete this.adjacencyList[vertex]
    }
    traverseGraphDFS(node) {
        const result = [];
        const visits = {};
        const recursiveDFS = (vertex) => {
            if (this.adjacencyList[vertex].length === 0) {
                return
            } else {
                visits[vertex] = true
                console.log(visits)
                result.push(vertex)
                this.adjacencyList[vertex].forEach(element => {
                    if (!visits[element]) {
                        recursiveDFS(element)
                    }
                });
            }
        }
        recursiveDFS(node);
        return result
    }
    traverseGraphDFSLoop(start) {
        const stack = []
        const result = []
        const visits = {}

        stack.push(start);
        // visits[start] = true

        while (stack.length > 0) {
            console.log('Stack:', stack)
            let curVertex = stack.pop();
            if (!visits[curVertex]) {
                visits[curVertex] = true;
                result.push(curVertex);
                this.adjacencyList[curVertex].forEach(element => stack.push(element))
            }
        }

        return result
    }
    traverseBfs(start) {
        const queue = [start]
        const result = []
        const visits = {}
        let curVertex;
        visits[start] = true;
        while (queue.length) {
            curVertex = queue.shift();
            result.push(curVertex);
            this.adjacencyList[curVertex].forEach(element => {
                if (!visits[element]) {
                    visits[element] = true;
                    queue.push(element)
                }
            })
        }
        return result
    }
}

let result;
var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph.adjacencyList)

result = graph.traverseBfs('A')

console.log(result);