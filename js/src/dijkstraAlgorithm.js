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

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2, weight) {
		if (!this.adjacencyList[v1] || !this.adjacencyList[v2] || v1 === v2) return;
		this.adjacencyList[v1].push({ node: v2, weight });
		this.adjacencyList[v2].push({ node: v1, weight });
	}

	dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		const path = [];
		let smallest;
		for (const vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}

			previous[vertex] = null;
		}

		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (const neighbor in this.adjacencyList[smallest]) {
					let nextNode = this.adjacencyList[smallest][neighbor];
					//calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if (candidate < distances[nextNeighbor]) {
						//updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						//updating previous - How we got to neighbor
						previous[nextNeighbor] = smallest;
						//enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}

		return path.concat(smallest).reverse();
	}
}

// const a = new WeightedGraph();
// a.addVertex("A");
// a.addVertex("B");
// a.addVertex("C");
// a.addVertex("D");
// a.addVertex("E");
// a.addVertex("F");

// a.addEdge("A", "B", 4);
// a.addEdge("A", "C", 2);
// a.addEdge("B", "E", 3);
// a.addEdge("C", "D", 2);
// a.addEdge("C", "F", 4);
// a.addEdge("D", "E", 3);
// a.addEdge("D", "F", 1);
// a.addEdge("E", "F", 1);

// console.log(a.adjacencyList);

// const a = new PriorityQueue();

// a.enqueue("A", 4);
// a.enqueue("H", 3);
// a.enqueue("G", 2);
// a.enqueue("F", 8);
// a.enqueue("E", 1);

const ARR = [...Array(10000000)].map((_, i) => i + 1);

let summation = 0;

console.time("my-time");

// for (let i in ARR) {
// 	summation += ARR[i];
// }

// ARR.forEach((item) => {
// 	summation += item;
// });

for (let i = 0; i < ARR.length; i++) {
	summation += ARR[i];
}

console.timeEnd("my-time");
console.log("ANS -->", summation); // 50000005000000
