/*
	time complexities in the above.
	carefull as time complexities of some operations depends upon wether the list has tail or not.
*/

class NewNode {
	data;
	next;

	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	head;
	tail;
	length = 0;

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
		} else if (this.tail) {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	/*
		O(n): if we don't have tail as then it would require to traverse through the list.
		O(1): we got tail so BAM, its done.
	*/
	removeFromEnd() {
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

	/*
		O(1): as we have head so BAM. its done.
	*/
	insertAtStart(data) {
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

	/*
		O(1): as we have head so BAM, its done.
	*/
	removeFromStart() {
		if (this.head === null) return undefined;

		const current = this.head;
		this.head = current.next;
		current.next = null;

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

		if (index === this.length) return this.insertAtEnd(data);

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
	updateAtIndex(index = -1, newValue) {
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

	/*
		O(1): as we have tail of lists.
		O(n): as we need to traverse through the first list to the end which will be O(n), and then we need to join the list which is O(1), so in the end it will be O(n)
	*/
	mergeTwoLists(otherSinglyLinkedList) {
		this.length += otherSinglyLinkedList.length;
		if (this.tail) {
			this.tail.next = otherSinglyLinkedList.head;
			this.tail = otherSinglyLinkedList.tail;
		}

		return true;
	}

	// Leetcode questions.

	/*
		O(n): as we have to traverse through the list only once.
	*/
	// below if list is even numbered we will return the second middle node.
	findMiddleNode() {
		let [slow, fast] = [this.head, this.head];
		while (fast && fast?.next) {
			slow = slow?.next ?? null;
			fast = fast.next.next;
		}
		return slow;
	}

	// for the below function we will consider that the tail don't exists.
	hasLoop() {
		let [slow, fast] = [this.head, this.head];

		while (fast && fast.next) {
			slow = slow?.next ?? null;
			fast = fast.next.next;
			if (slow?.data === fast?.data) {
				return true;
			}
		}

		return false;
	}

	// for the below function we will consider that the tail don't exists.
	findKFromEnd(index) {
		let [forward, backward] = [this.head, this.head];
		if (index <= 0 || this.length === 0) return null;

		for (let i = 1; i < index; i++) {
			forward = forward.next;
		}

		while (forward.next) {
			backward = backward.next;
			forward = forward.next;
		}

		return backward;
	}

	seperateFrom(value) {
		const lessThan = new SinglyLinkedList();
		const greaterThan = new SinglyLinkedList();

		let tempPointer = this.head;
		while (tempPointer) {
			if (tempPointer.data < value) {
				lessThan.insertAtEnd(tempPointer.data);
			} else {
				greaterThan.insertAtEnd(tempPointer.data);
			}
			tempPointer = tempPointer.next;
		}

		lessThan.tail.next = greaterThan.head;
		this.head = lessThan.head;
		this.tail = greaterThan.tail;

		return this;
	}
}

const a = new SinglyLinkedList();

// const b = new SinglyLinkedList<number>();

// a.insertAtEnd(1).insertAtEnd(3);

// different testing
// a.insertAtEnd(1).insertAtEnd(2).insertAtEnd(3).insertAtEnd(4).insertAtEnd(5).insertAtEnd(6);

// a.findMiddleNode();

a.insertAtEnd(3).insertAtEnd(8).insertAtEnd(5).insertAtEnd(10).insertAtEnd(2).insertAtEnd(1);
