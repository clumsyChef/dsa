class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.queue = [];
	}

	bubbleUp() {
		let elemInd = this.queue.length - 1;
		let parentInd = Math.floor((elemInd - 1) / 2);
		while (this.queue[elemInd].priority < this.queue[parentInd].priority) {
			const current = this.queue[elemInd];
			this.queue[elemInd] = this.queue[parentInd];
			this.queue[parentInd] = current;
		}

		return this.queue;
	}

	insert(value, priority) {
		const newNode = new Node(value, priority);
		this.queue.push(newNode);
		if (this.queue.length === 1) return this.queue;
		return this.bubbleUp();
	}

	removeMostImportant() {
		const highestPriority = this.queue[0];
		const last = this.queue[this.queue.length - 1];
		this.queue[0] = last;
		this.queue.pop();

		let elemInd = 0;
		let [leftInd, rightInd] = [2 * elemInd + 1, 2 * elemInd + 2];

		while (this.queue[leftInd] || this.queue[rightInd]) {
			let swapInd;
			if (this.queue[leftInd] && !this.queue[rightInd]) {
				swapInd = leftInd;
			} else if (!this.queue[leftInd] && this.queue[rightInd]) {
				swapInd = rightInd;
			} else {
				swapInd = this.queue[leftInd].priority < this.queue[rightInd].priority ? leftInd : rightInd;
			}

			if (this.queue[elemInd].priority <= this.queue[swapInd].priority) break;

			const current = this.queue[elemInd];
			this.queue[elemInd] = this.queue[swapInd];
			this.queue[swapInd] = current;

			elemInd = swapInd;
			[leftInd, rightInd] = [2 * elemInd + 1, 2 * elemInd + 2];
		}

		return highestPriority;
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
				nodes.insert(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.insert(vertex, Infinity);
			}

			previous[vertex] = null;
		}

		while (nodes.queue.length) {
			smallest = nodes.removeMostImportant().value;
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}

				path.push(smallest);

				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (let i = 0; i < this.adjacencyList[smallest].length; i++) {
					const nextNode = this.adjacencyList[smallest][i];
					const newDistance = distances[smallest] + nextNode.weight;
					const nextNeighbor = nextNode.node;
					if (newDistance < distances[nextNeighbor]) {
						distances[nextNeighbor] = newDistance;
						previous[nextNeighbor] = smallest;
						nodes.insert(nextNeighbor, newDistance);
					}
				}
			}
		}

		return path.reverse();
	}
}

const a = new WeightedGraph();
a.addVertex("A");
a.addVertex("B");
a.addVertex("C");
a.addVertex("D");
a.addVertex("E");
a.addVertex("F");

a.addEdge("A", "B", 4);
a.addEdge("A", "C", 2);
a.addEdge("B", "E", 3);
a.addEdge("C", "D", 2);
a.addEdge("C", "F", 4);
a.addEdge("D", "E", 3);
a.addEdge("D", "F", 1);
a.addEdge("E", "F", 1);

// console.log(a.adjacencyList);

// const a = new PriorityQueue();

// a.enqueue("A", 4);
// a.enqueue("H", 3);
// a.enqueue("G", 2);
// a.enqueue("F", 8);
// a.enqueue("E", 1);
