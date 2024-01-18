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

		return this;
	}
}

const a = new BST();
console.log(a);
