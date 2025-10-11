class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    depthFirstSearch(start) {
        const visits = { [start]: true }
        const results = [start]

        const recursiveTraverse = (vertex) => {
            if (this.adjacencyList[vertex].length === 0) { return }

            this.adjacencyList[vertex].forEach(element => {
                if (!visits[element]) {
                    visits[element] = true;
                    results.push(element)
                    recursiveTraverse(element)
                }
            });
        }
        recursiveTraverse(start)
        return results
    }

    breadthFirstSearch(start) {
        let queue = [start]
        let visits = {}
        let result = []
        let curVertex;

        while (queue.length) {
            curVertex = queue.shift();
            if (!visits[curVertex]) {
                visits[curVertex] = true
                result.push(curVertex);
                this.adjacencyList[curVertex].forEach(element => queue.push(element))
            }
        }
        return result
    }
}


let result;
var graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S', 'P');
graph.addEdge('S', 'U');

graph.addEdge('P', 'X');
graph.addEdge('U', 'X');

graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');

graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');

graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');

graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');

graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

result = graph.breadthFirstSearch('S'); // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
console.log(result)
