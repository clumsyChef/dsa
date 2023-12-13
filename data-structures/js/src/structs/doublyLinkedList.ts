class NewNode<T> {
	data: T;
	next: NewNode<T> | null;
	prev: NewNode<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList<T> {
	length = 0;
	head: NewNode<T> | null;
	tail: NewNode<T> | null;

	constructor() {
		this.head = this.tail = null;
	}

	insertAtEnd(data: T): DoublyLinkedList<T> {
		const newNode = new NewNode(data);
		if (this.head === null) {
			this.head = this.tail = newNode;
		} else {
			if (this.tail) {
				this.tail.next = newNode;
				newNode.prev = this.tail;
				this.tail = newNode;
			}
		}

		this.length++;
		return this;
	}

	removeFromEnd(): NewNode<T> | undefined {
		if (this.tail === null) return undefined;
		const current = this.tail;
		this.tail = current.prev;
		if (this.tail) {
			this.tail.next = null;
			current.prev = null;
		}

		if (this.tail === null) this.head = null;

		this.length--;
		return current;
	}

	insertAtStart(data: T): DoublyLinkedList<T> {
		const newNode = new NewNode(data);
		if (this.head === null) {
			this.head = this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	removeFromStart(): NewNode<T> | undefined {
		//
	}

	// insertInbetween(data: T, index: number): DoublyLinkedList<T> {
	// 	//
	// }

	// removeFromBetween(index: number): NewNode<T> | undefined {
	// 	//
	// }

	// getItem(index: number): T | undefined {
	// 	//
	// }

	// updateAtIndex(index: number, newValue: T): T | undefined {
	// 	//
	// }

	// reverse(): boolean {
	// 	//
	// }

	// mergeTwoLists(otherDoublyLinkedList: DoublyLinkedList<T>): void {
	// 	//
	// }
}

const a = new DoublyLinkedList<number>();

a.insertAtEnd(1).insertAtEnd(2).insertAtEnd(3);
