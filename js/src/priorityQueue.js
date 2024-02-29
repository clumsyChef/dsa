// low priority is important

class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.queue = [];
	}

	bubbleUp() {
		let elemInd = this.queue.length - 1;
		let parentInd = Math.floor((elemInd - 1) / 2);
		while (this.queue[elemInd].priority < this.queue[parentInd].priority) {
			const current = this.queue[elemInd];
			this.queue[elemInd] = this.queue[parentInd];
			this.queue[parentInd] = current;
		}

		return this.queue;
	}

	insert(value, priority) {
		const newNode = new Node(value, priority);
		this.queue.push(newNode);
		if (this.queue.length === 1) return this.queue;
		return this.bubbleUp();
	}

	removeMostImportant() {
		const highestPriority = this.queue[0];
		const last = this.queue[this.queue.length - 1];
		this.queue[0] = last;
		this.queue.pop();

		let elemInd = 0;
		let [leftInd, rightInd] = [2 * elemInd + 1, 2 * elemInd + 2];

		while (this.queue[leftInd] || this.queue[rightInd]) {
			let swapInd;
			if (this.queue[leftInd] && !this.queue[rightInd]) {
				swapInd = leftInd;
			} else if (!this.queue[leftInd] && this.queue[rightInd]) {
				swapInd = rightInd;
			} else {
				swapInd = this.queue[leftInd].priority < this.queue[rightInd].priority ? leftInd : rightInd;
			}

			if (this.queue[elemInd].priority <= this.queue[swapInd].priority) break;

			const current = this.queue[elemInd];
			this.queue[elemInd] = this.queue[swapInd];
			this.queue[swapInd] = current;

			elemInd = swapInd;
			[leftInd, rightInd] = [2 * elemInd + 1, 2 * elemInd + 2];
		}

		return highestPriority;
	}
}

const h = new PriorityQueue();
h.insert("common cold", 5);
h.insert("gunshot wound", 1);
h.insert("high fever", 4);
h.insert("broken arm", 2);
h.insert("glass in foot", 3);
