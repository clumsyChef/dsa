// compare 2 side-by-side elements and swap if left is bigger then right
// do this for length of loop and largest element will be att the most right
// then keep looping the same way untill sorted

const main = {
	one(arr) {
		let len = arr.length - 1;
		while (len > 0) {
			let sorted = true;
			for (let i = 0; i < len; i++) {
				if (arr[i + 1] && arr[i] > arr[i + 1]) {
					const temp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = temp;
					sorted = false;
				}
			}

			if (sorted) return arr;

			len--;
		}

		return arr;
	},

	two(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			let noSwap = true;
			for (let j = 0; j < i; j++) {
				if (arr[j] > arr[j + 1]) {
					const temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					noSwap = false;
				}
			}
			if (noSwap) break;
		}

		return arr;
	},
};

// console.log(main.one([2, 48, 22, 19, 92, 52]));
// console.log(main.one([1, 2, 3, 4, 5]));
// console.log(main.two([2, 48, 22, 19, 92, 52]));
console.log(main.two([1, 2, 3, 4, 5]));
