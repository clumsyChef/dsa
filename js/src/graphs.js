class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return undefined;
		this.adjacencyList[vertex].forEach((v) => {
			this.adjacencyList[v] = this.adjacencyList[v].filter((_v) => _v !== vertex);
		});
		delete this.adjacencyList[vertex];
		return this.adjacencyList;
	}

	addEdge(v1, v2) {
		if (!this.adjacencyList[v1] || !this.adjacencyList[v2] || v1 === v2) return;
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
		return this.adjacencyList;
	}

	removeEdge(v1, v2) {
		if (!this.adjacencyList[v1] || !this.adjacencyList[v2] || v1 === v2) return;
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex) => vertex !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex) => vertex !== v1);
		return this.adjacencyList;
	}

	// Depth first traversal with recursion
	depthFirstTraversalRecursive(startNode) {
		if (!startNode || !this.adjacencyList[startNode]) return null;
		const visitedNodes = {};
		const result = [];
		const recur = (rootNode) => {
			visitedNodes[rootNode] = true;
			result.push(rootNode);
			const child = this.adjacencyList[rootNode];
			for (let i = 0; i < child.length; i++) {
				if (!visitedNodes[child[i]]) {
					recur(child[i]);
				}
			}
		};

		recur(startNode);

		return result;
	}

	// Depth first traversal with iterative
	depthFirstTraversalIterative(startNode) {
		if (!startNode || !this.adjacencyList[startNode]) return null;
		const stack = [];
		stack.push(startNode);
		const visitedNodes = {};
		const result = [];
		while (stack.length) {
			const vertex = stack.pop();
			if (!visitedNodes[vertex]) {
				visitedNodes[vertex] = true;
				result.push(vertex);
				this.adjacencyList[vertex].forEach((child) => {
					stack.push(child);
				});
			}
		}

		return result;
	}

	// Breadth first traversal
	breadthFirstTraversal(startNode) {
		if (!startNode || !this.adjacencyList[startNode]) return null;
		const queue = [];
		queue.push(startNode);
		const visitedNodes = {};
		const result = [];
		while (queue.length) {
			const vertex = queue.shift();
			if (!visitedNodes[vertex]) {
				visitedNodes[vertex] = true;
				result.push(vertex);
				this.adjacencyList[vertex].forEach((child) => {
					queue.push(child);
				});

				// ** THIS IS IF YOU WANT TO GO REVERSE DIRECTION
				// this.adjacencyList[vertex].reverse().forEach((child) => {
				// 	queue.push(child);
				// });
			}
		}

		return result;
	}
}

const a = new Graph();

a.addVertex("A");
a.addVertex("B");
a.addVertex("C");
a.addVertex("D");
a.addVertex("E");
a.addVertex("F");

a.addEdge("A", "B");
a.addEdge("A", "C");
a.addEdge("B", "D");
a.addEdge("C", "E");
a.addEdge("D", "E");
a.addEdge("D", "F");
a.addEdge("E", "F");

console.log(a.depthFirstTraversalRecursive("A")); // ['A', 'B', 'D', 'E', 'C', 'F']
console.log(a.depthFirstTraversalIterative("A")); // ['A', 'C', 'E', 'F', 'D', 'B']
console.log(a.breadthFirstTraversal("A")); // ['A', 'B', 'C', 'D', 'E', 'F']

/*
         A 
		/  \
	   B 	C
	   |    |
	   D----E
		\  /
	      F

*/
