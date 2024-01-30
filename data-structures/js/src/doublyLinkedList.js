class NewNode {
	data;
	next;
	prev;

	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	length = 0;
	head;
	tail;

	constructor() {
		this.head = this.tail = null;
	}

	/*
		O(n): if we don't have tail as then it would require to traverse through the list.
		O(1): if we got tail so BAM, its done.	
	*/
	insertAtEnd(data) {
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

	/*
		O(n): if we don't have tail as then it would require to traverse through the list.
		O(1): we got tail so BAM, its done.
	*/
	removeFromEnd() {
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

	/*
		O(1): as we have head so BAM. its done.
	*/
	insertAtStart(data) {
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

	/*
		O(1): as we have head so BAM. its done.
	*/
	removeFromStart() {
		if (this.head === null) return undefined;
		const current = this.head;
		this.head = current.next;
		current.next = current.prev = null;
		if (this.head) this.head.prev = null;

		if (this.head === null) this.tail = null;

		this.length--;
		return current;
	}

	/*
		O(n): as we need to traverse through the list
	*/
	insertInbetween(data, index = -1) {
		if (index < 0 || index > this.length) return undefined;

		if (index === 0) return this.insertAtStart(data);
		if (index === this.length) this.insertAtEnd(data);

		const newNode = new NewNode(data);
		let tempPointer = this.head;

		for (let i = 1; i < index; i++) {
			if (tempPointer && tempPointer.next) {
				tempPointer = tempPointer.next;
			}
		}

		if (tempPointer && tempPointer.next) {
			newNode.prev = tempPointer;
			newNode.next = tempPointer.next;
			tempPointer.next.prev = newNode;
			tempPointer.next = newNode;
		}

		this.length++;
		return this;
	}

	/*
		O(n): as we need to traverse through the list
	*/
	removeFromBetween(index = -1) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.removeFromStart();
		if (index === this.length - 1) return this.removeFromEnd();

		let tempPointer = this.head;

		for (let i = 0; i < index; i++) {
			if (tempPointer && tempPointer.next) {
				tempPointer = tempPointer.next;
			}
		}
		if (tempPointer && tempPointer.next && tempPointer.prev) {
			tempPointer.prev.next = tempPointer.next;
			tempPointer.next.prev = tempPointer.prev;
			tempPointer.next = tempPointer.prev = null;
		}
		this.length--;

		return tempPointer ?? undefined;
	}

	/*
		O(n): as we need to traverse through the list
	*/
	getItem(index = -1) {
		if (index < 0 || index >= this.length) return undefined;
		let tempPointer = this.head;
		for (let i = 0; i < index; i++) {
			if (tempPointer && tempPointer.next) {
				tempPointer = tempPointer.next;
			}
		}

		return tempPointer?.data ?? undefined;
	}

	/*
		O(n): as we need to traverse through the list
	*/
	updateAtIndex(index, newValue) {
		if (index < 0 || index >= this.length) return false;
		let tempPointer = this.head;
		for (let i = 0; i < index; i++) {
			if (tempPointer && tempPointer.next) {
				tempPointer = tempPointer.next;
			}
		}
		if (tempPointer) {
			tempPointer.data = newValue;
		}

		return true;
	}

	/*
		O(n): as we need to traverse through the list
	*/
	reverse() {
		if (this.length < 2) return false;
		let current = this.head;
		let previous = null;
		let next = null;

		this.tail = this.head;

		while (current) {
			next = current.next;
			current.next = previous;
			current.prev = next;

			previous = current;
			current = next;
		}

		this.head = previous;

		return true;
	}

	/*
		O(1): as we have tail of lists.
		O(n): as we need to traverse through the first list to the end which will be O(n), and then we need to join the list which is O(1), so in the end it will be O(n)
	*/
	mergeTwoLists(otherDoublyLinkedList) {
		this.length += otherDoublyLinkedList.length;
		if (this.tail) {
			this.tail.next = otherDoublyLinkedList.head;
			this.tail = otherDoublyLinkedList.tail;
		}

		return true;
	}
}

const a = new DoublyLinkedList();
const b = new DoublyLinkedList();

a.insertAtEnd(1).insertAtEnd(2).insertAtEnd(3).insertAtEnd(4);
b.insertAtEnd(5).insertAtEnd(6).insertAtEnd(7).insertAtEnd(8);
