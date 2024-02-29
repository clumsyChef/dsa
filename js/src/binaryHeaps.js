/*
    MAX BINARY HEAP:
    - every parent have at most 2 children (where word 'binary' comes from)
    - value of each parent node is greater than children
    - in max binary heap parent is greater than children, but there are no guarantees b/w siblings.
    - a binary heap is as compact as possible. All the children of each nodes are as full as they can be and left children are filled out first.

    for any index of array n
    the left child is stored at 2n + 1
    the right child is stored at 2n + 2

    for any child node at index n
    its parent is at index Floor((n - 1) / 2)
*/

class BinaryHeap {
	constructor() {
		this.values = [41, 39, 33, 18, 27, 12];
	}

	bubbleUp() {
		let elementInd = this.values.length - 1;
		let parentInd = Math.floor((elementInd - 1) / 2);
		while (this.values[elementInd] > this.values[parentInd]) {
			const lastVal = this.values[elementInd];
			this.values[elementInd] = this.values[parentInd];
			this.values[parentInd] = lastVal;

			elementInd = parentInd;
			parentInd = Math.floor((elementInd - 1) / 2);
		}

		return this.values;
	}

	insert(element) {
		this.values.push(element);
		if (this.values.length === 1) return this.values;
		return this.bubbleUp();
	}

	// basically removing from the heap, and the largest item is removed always
	// to do this:
	// 1. remove the first item from array and replace it with the last item
	// 2 the take the first item (which was the last item), and bubble it down. meaning compare it with the 2 children, whichever children is larger, swap with it.
	extractMax() {
		const max = this.values[0];
		const min = this.values[this.values.length - 1];
		this.values[0] = min;
		this.values.pop();

		let elementInd = 0;
		let [leftChildInd, rightChildInd] = [2 * elementInd + 1, 2 * elementInd + 2];

		while (this.values[leftChildInd] || this.values[rightChildInd]) {
			const elementVal = this.values[elementInd];
			let swapInd;
			if (leftChildInd && !rightChildInd) {
				swapInd = leftChildInd;
			} else if (rightChildInd && !leftChildInd) {
				swapInd = rightChildInd;
			} else {
				swapInd = this.values[leftChildInd] > this.values[rightChildInd] ? leftChildInd : rightChildInd;
			}
			this.values[elementInd] = this.values[swapInd];
			this.values[swapInd] = elementVal;

			elementInd = swapInd;
			[leftChildInd, rightChildInd] = [2 * elementInd + 1, 2 * elementInd + 2];
		}
	}
}

const a = new BinaryHeap();

// const x = [6, 12, 13, 11, 15, 5, 9, 8, 17, 1, 19, 36, 25, 4, 100];
// x.forEach((item) => a.insert(item));

// [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4];
// Original: [41, 39, 33, 18, 27, 12];
// After insert 55: [55, 39, 41, 18, 27, 12, 33];
// After remove: [39, 27, 33, 18, 12]
