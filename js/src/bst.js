class NewNode {
	value;
	left;
	right;
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	// Balanced BST BigO = O(logN)
	// one sided BST BigO = O(N)

	insert_using_recursion(value, currentRoot = this.root) {
		if (this.root === null) {
			const newNode = new NewNode(value);
			this.root = newNode;
			return this;
		}

		// this is because we will consider that there are no duplicates
		if (value === currentRoot.value) return this;
		if (value < currentRoot.value) {
			if (currentRoot.left === null) {
				currentRoot.left = new NewNode(value);
			} else {
				this.insert(value, currentRoot.left);
			}
		} else {
			if (currentRoot.right === null) {
				currentRoot.right = new NewNode(value);
			} else {
				this.insert(value, currentRoot.right);
			}
		}
		return this;
	}

	insert_using_while_loop(value) {
		const newNode = new NewNode(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let tempPointer = this.root;

		while (true) {
			// this is because we will consider that there are no duplicates
			if (value === tempPointer.value) return this;

			if (value < tempPointer.value) {
				if (tempPointer.left === null) {
					tempPointer.left = newNode;
					return this;
				}
				tempPointer = tempPointer.left;
			} else {
				if (tempPointer.right === null) {
					tempPointer.right = newNode;
					return this;
				}
				tempPointer = tempPointer.right;
			}
		}
	}

	contains(value) {
		if (!this.root) return undefined;
		let tempPointer = this.root;
		while (tempPointer) {
			if (value < tempPointer.value) {
				tempPointer = tempPointer.left;
			} else if (value > tempPointer.value) {
				tempPointer = tempPointer.right;
			} else {
				return true;
			}
		}

		return false;
	}

	minimumValue() {
		if (!this.root) return undefined;
		let tempPointer = this.root;
		while (tempPointer.left) {
			tempPointer = tempPointer.left;
		}

		console.log(tempPointer.value);
	}

	breadthFirstSearch() {
		// [10, 6, 15, 3, 8, 20]
		const queue = [];
		const visited = [];
		if (!this.root) return [];
		queue.push(this.root);
		while (queue.length) {
			const item = queue.shift();
			visited.push(item.value);
			if (item.left) queue.push(item.left);
			if (item.right) queue.push(item.right);
		}
		return visited;
	}

	depthFirstSearchPreOrder() {
		// [10, 6, 3, 8, 15, 20]
		if (!this.root) return [];
		let data = [];
		let current = this.root;
		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(current);
		return data;
	}

	depthFirstSearchPostOrder() {
		// [3, 8, 6, 20, 15, 10]
		if (!this.root) return [];
		let data = [];
		let current = this.root;
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}

		traverse(current);
		return data;
	}

	depthFirstSearchInOrder() {
		// [3, 6, 8, 10, 15, 20]
		if (!this.root) return [];
		let data = [];
		let current = this.root;
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}

		traverse(current);
		return data;
	}
}

const a = new BST();
a.insert_using_while_loop(10)
	.insert_using_while_loop(6)
	.insert_using_while_loop(15)
	.insert_using_while_loop(3)
	.insert_using_while_loop(8)
	.insert_using_while_loop(20);

/*
			10
		6        15
	  3   8         20 
*/
// item ->
// queue:   []
// visited: [10, 6, 15, 3, 8, 20]

console.log(a.breadthFirstSearch());
console.log(a.depthFirstSearchPreOrder());
console.log(a.depthFirstSearchPostOrder());
console.log(a.depthFirstSearchInOrder());

// big O
// Insert , remove, lookup ===> O(logN)
