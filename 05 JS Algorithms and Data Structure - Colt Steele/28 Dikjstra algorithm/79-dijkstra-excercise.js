class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    numEdges() {
        let total = 0;

        Object.values(this.adjacencyList).forEach(list => {
            total += list.length;
        });

        // note that we've double-counted up til now since we've looked at
        // the adjacencyList for every node.
        return total / 2;
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}
class WeightedGraph extends Graph {
    constructor() {
        super();
    }

    // add the necessary code here
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    Dijkstra(start, end) {
        const queue = new PriorityQueue()
        const previous = {}
        const distances = {}

        let priority;
        let curVertex;
        let curDistance

        Object.keys(this.adjacencyList)
            .forEach(nodeName => {
                priority = nodeName === start ? 0 : Infinity
                previous[nodeName] = null;
                distances[nodeName] = priority;
                if (!priority) queue.enqueue(nodeName, priority)
            })

        while (queue.values.length) {

            curVertex = queue.dequeue().val;
            // console.log('curVertex:', curVertex)
            this.adjacencyList[curVertex].forEach(edge => {

                curDistance = distances[curVertex] + edge.weight

                if (curDistance < distances[edge.node]) {
                    queue.enqueue(edge.node, curDistance)
                    distances[edge.node] = curDistance;
                    previous[edge.node] = curVertex;
                }
            })
        }

        let cur = end;
        let path = []
        while (previous[cur]) {
            path.push(cur)
            cur = previous[cur]
        }
        path.push(start)
        return path.reverse()
    }
}





var g = new WeightedGraph()

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');

g.addEdge('A', 'Z', 7)
g.addEdge('A', 'C', 8)

g.addEdge('Z', 'Q', 2)

g.addEdge('C', 'G', 4)

g.addEdge('D', 'Q', 8)

g.addEdge('E', 'H', 1)

g.addEdge('H', 'Q', 3)

g.addEdge('Q', 'C', 6)

g.addEdge('G', 'Q', 9)

// console.dir(g.adjacencyList, { depth: null })

console.log(g.Dijkstra('A', 'E')) // ["A", "Z", "Q", "H", "E"]
console.log(g.Dijkstra('A', 'Q')) // ["A", "Z", "Q"]
console.log(g.Dijkstra('A', 'G'))// ["A", "C", "G"]
console.log(g.Dijkstra('A', 'D')) // ["A", "Z", "Q", "D"]