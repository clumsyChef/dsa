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
}

const a = new Graph();

a.addVertex("a");
a.addVertex("b");
a.addVertex("c");

a.addEdge("a", "b");
a.addEdge("b", "c");
