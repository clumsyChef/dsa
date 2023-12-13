// this is for removing the "Duplicate Identifier" typescript error.
export {};

/*
	time complexities in the above.
	carefull as time complexities of some operations depends upon wether the list has tail or not.
*/

class NewNode<T> {
	data: T;
	next: NewNode<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList<T> {
	head: NewNode<T> | null;
	tail: NewNode<T> | null;
	length = 0;

	constructor() {
		this.head = this.tail = null;
	}

	/*
		O(n): if we don't have tail as then it would require to traverse through the list.
		O(1): we got tail so BAM, its done.	
	*/
	insertAtEnd(data: T): SinglyLinkedList<T> {
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
	removeFromEnd(): NewNode<T> | undefined {
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
	insertAtStart(data: T): SinglyLinkedList<T> {
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
	removeFromStart(): NewNode<T> | undefined {
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
	insertInbetween(data: T, index: number): SinglyLinkedList<T> {
		if (index < 0 || index > this.length) {
			console.log("Unable to insert");
			return this;
		}

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

		return this;
	}

	/*
		O(n): as we need to traverse through the list
	*/
	deleteFromBetween(index: number): NewNode<T> | undefined {
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

		return tempPointer ?? undefined;
	}

	/*
		O(n): as we need to traverse through the list
	*/
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

	/*
		O(n): as we need to traverse through the list
	*/
	updateAtIndex(index: number, newValue: T): T | undefined {
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

	/*
		O(n): as we need to traverse through the list
	*/
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

	/*
		O(1): as we have tail of lists.
		O(n): as we need to traverse through the first list to the end which will be O(n), and then we need to join the list which is O(1), so in the end it will be O(n)
	*/
	mergeTwoLists(otherSinglyLinkedList: SinglyLinkedList<T>): void {
		this.length += otherSinglyLinkedList.length;
		if (this.tail) {
			this.tail.next = otherSinglyLinkedList.head;
			this.tail = otherSinglyLinkedList.tail;
		}

		return;
	}
}

const a = new SinglyLinkedList<number>();

const b = new SinglyLinkedList<number>();
