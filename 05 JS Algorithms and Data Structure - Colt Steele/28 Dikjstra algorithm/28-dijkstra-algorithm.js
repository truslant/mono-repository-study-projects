class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({ val, priority })
        this.sort()
    }
    dequeue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }


    dijkstra(start, end) {

        let queue = new PriorityQueue()
        const distances = {}
        const previouse = {}

        let priority;
        let curVertex;
        let curDistance;

        Object.keys(this.adjacencyList).forEach(key => {
            priority = key === start ? 0 : +Infinity;
            distances[key] = priority;
            previouse[key] = null;
            if (!priority) queue.enqueue(key, priority)
        })

        console.log('Distances:')
        console.dir(distances, { depth: null })
        console.log('Previous:')
        console.dir(previouse, { depth: null })
        console.log('Queue:')
        console.dir(queue.values, { depth: null })

        while (queue.values.length) {

            curVertex = queue.dequeue();

            if (curVertex.val === end) break;

            this.adjacencyList[curVertex.val]
                .forEach(edge => {
                    if (curVertex.val === start) {
                        curDistance = edge.weight;
                    } else {
                        curDistance = distances[curVertex.val] + edge.weight
                    }
                    if (distances[edge.node] > curDistance) {
                        queue.enqueue(edge.node, curDistance)
                        distances[edge.node] = curDistance
                        previouse[edge.node] = curVertex.val
                    }
                })

            console.log('============ while loop ============')
            // console.log('Distances:')
            // console.dir(distances, { depth: null })
            // console.log('Previous:')
            // console.dir(previouse, { depth: null })
            console.log('Queue:')
            console.dir(queue.values, { depth: null })

        }

        console.log(`Distance from '${start}' to '${end}':`, distances[end])
        return distances[end]
    }
}

let newGraph = new WeightedGraph()

newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addVertex('C');
newGraph.addVertex('D');
newGraph.addVertex('E');
newGraph.addVertex('F');

newGraph.addEdge('A', 'B', 4)
newGraph.addEdge('A', 'C', 2)
newGraph.addEdge('C', 'D', 2)
newGraph.addEdge('C', 'F', 4)
newGraph.addEdge('B', 'E', 3)
newGraph.addEdge('D', 'F', 1)
newGraph.addEdge('D', 'E', 3)
newGraph.addEdge('F', 'E', 1)

console.dir(newGraph, { depth: null });

newGraph.dijkstra('A', 'E')
