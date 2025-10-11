class Graph {
    constructor() {
        this.adjucencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjucencyList[vertex]) this.adjucencyList[vertex] = []
    }
    addEdge(vertex1, vertex2) {
        this.adjucencyList[vertex1].push(vertex2);
        this.adjucencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        let array = this.adjucencyList[vertex1];
        this.adjucencyList[vertex1] = array.filter(vertex => vertex !== vertex2);
        array = this.adjucencyList[vertex2];
        this.adjucencyList[vertex2] = array.filter(vertex => vertex !== vertex1)
    }
    removeVertex(vertex) {
        let array = this.adjucencyList[vertex];
        for (let curVertex of array) {
            this.removeEdge(vertex, curVertex);
        }
        delete this.adjucencyList[vertex]
    }
}

const newGraph = new Graph();

newGraph.addVertex('Tokyo');
newGraph.addVertex('Madrid');
newGraph.addVertex('Prague');
newGraph.addVertex('Moscow');
newGraph.addVertex('Beijin');

newGraph.addEdge('Tokyo', 'Madrid')
newGraph.addEdge('Prague', 'Tokyo')
newGraph.addEdge('Tokyo', 'Moscow')
newGraph.addEdge('Beijin', 'Tokyo')
newGraph.addEdge('Beijin', 'Moscow')
newGraph.addEdge('Madrid', 'Moscow')
newGraph.addEdge('Prague', 'Moscow')

console.log(newGraph.adjucencyList);

newGraph.removeVertex('Tokyo')

console.log(newGraph.adjucencyList);