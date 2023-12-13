type INode = {
	value: string;
	next: INode | null;
};

class NewNode<T> {
	data: T;
	next: NewNode<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList<T> {
	head: NewNode<T> | null;
	tail: NewNode<T> | null;
	length = 0;

	constructor() {
		this.head = this.tail = null;
	}

	append(data: T): LinkedList<T> {
		const newNode = new NewNode(data);
		if (this.head === null) {
			this.head = this.tail = newNode;
		} else if (this.tail) {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop(): NewNode<T> | undefined {
		if (this.head === null) return undefined;

		let current = this.head;
		let previous = null;

		while (current.next) {
			previous = current;
			current = current.next;
		}

		this.tail = previous;
		if (this.tail) {
			this.tail.next = null;
		}

		if (this.tail === null) this.head = null;

		this.length--;

		return current;
	}

	prepend(data: T): LinkedList<T> {
		const newNode = new NewNode(data);
		if (this.head === null) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift(): NewNode<T> | undefined {
		if (this.head === null) return undefined;

		const current = this.head;
		this.head = current.next;
		current.next = null;

		if (this.head === null) this.tail = null;

		this.length--;
		return current;
	}

	insertAt(data: T, index: number): LinkedList<T> {
		if (index < 0 || index > this.length) {
			console.log("Unable to insert");
			return this;
		}

		if (index === 0) return this.prepend(data);

		if (index === this.length) return this.append(data);

		if (this.head) {
			const newNode = new NewNode(data);

			let tempPointer = this.head;

			for (let i = 1; i < index; i++) {
				if (tempPointer.next) {
					tempPointer = tempPointer.next;
				}
			}

			newNode.next = tempPointer.next;
			tempPointer.next = newNode;
		}

		return this;
	}

	deleteAt(index: number): NewNode<T> | undefined {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let tempPointer = this.head;
		let previous = null;

		for (let i = 0; i < index; i++) {
			if (tempPointer && tempPointer.next) {
				previous = tempPointer;
				tempPointer = tempPointer.next;
			}
		}

		if (previous && tempPointer) {
			previous.next = tempPointer.next;
			tempPointer.next = null;
		}

		return tempPointer ?? undefined;
	}

	getItem(index: number): T | undefined {
		if (index < 0 || index >= this.length) return undefined;
		let tempPointer = this.head;
		for (let i = 0; i < index; i++) {
			if (tempPointer && tempPointer.next) {
				tempPointer = tempPointer.next;
			}
		}

		return tempPointer?.data ?? undefined;
	}

	updateItem(index: number, newValue: T): T | undefined {
		if (index < 0 || index >= this.length) return undefined;
		let tempPointer = this.head;
		for (let i = 0; i < index; i++) {
			if (tempPointer && tempPointer.next) {
				tempPointer = tempPointer.next;
			}
		}

		if (tempPointer) {
			tempPointer.data = newValue;
		}

		return tempPointer?.data ?? undefined;
	}

	reverse(): boolean {
		if (this.length < 2) return false;

		let previous = null;
		let current = this.head;
		let next = null;

		this.tail = this.head;

		while (current !== null) {
			next = current.next;
			current.next = previous;

			previous = current;
			current = next;
		}

		this.head = previous;

		return true;
	}

	merge(otherLinkedList: LinkedList<T>): void {
		this.length += otherLinkedList.length;
		if (this.tail) {
			this.tail.next = otherLinkedList.head;
			this.tail = otherLinkedList.tail;
		}

		return;
	}
}

const a = new LinkedList<number>();

const b = new LinkedList<number>();

// a.append(0).append(1).append(7).append(2).append(3);
a.append(1).append(2);
b.append(3).append(4);
