class NewNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	first;
	last;
	length;

	constructor() {
		this.first = this.last = null;
		this.length = 0;
	}

	// adding the element at last
	enqueue(element) {
		const newNode = new NewNode(element);
		if (this.length === 0) {
			this.first = this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		this.length++;
		return this;
	}

	// removing the first element
	// BigO = O(1)
	dequeue() {
		if (this.length === 0) return undefined;
		const tempPointer = this.first;
		if (this.length === 1) {
			this.first = this.last = null;
		} else {
			this.first = tempPointer.next;
		}

		tempPointer.next = null;
		this.length--;
		return tempPointer;
	}

	// get the first element
	peek() {
		return this.first;
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.length === 0;
	}

	clear() {
		this.first = this.last = null;
		this.length = 0;
	}
}

const q = new Queue();
