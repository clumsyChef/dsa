// class NewNode {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class Stack {
// 	top;
// 	length;

// 	constructor() {
// 		this.top = null;
// 		this.length = 0;
// 	}

// 	push(element) {
// 		const newNode = new NewNode(element);
// 		if (this.length) {
// 			newNode.next = this.top;
// 		}
// 		this.top = newNode;
// 		this.length++;
// 		return this;
// 	}

// 	pop() {
// 		if (this.length === 0) return undefined;
// 		const tempPointer = this.top;
// 		this.top = tempPointer.next;
// 		tempPointer.next = null;
// 		this.length--;
// 		return tempPointer;
// 	}

// 	// this means that you want to get the last element inside the stack
// 	peek() {
// 		return this.length ? this.top : undefined;
// 	}

// 	isEmpty() {
// 		return this.length === 0;
// 	}

// 	size() {
// 		return this.length;
// 	}

// 	clear() {
// 		this.length = 0;
// 		this.top = null;
// 		return true;
// 	}
// }

// const s = new Stack();
