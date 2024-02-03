const main = {
	one(arr) {
		for (let i = 0; i < arr.length; i++) {
			let currentVal = arr[i];
			let j;
			for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
				arr[j + 1] = arr[j];
			}
			arr[j + 1] = currentVal;
		}

		return arr;
	},
};

console.log(main.one([2, 8, 5, 3, 9, 4]));
// console.log(main.one([5, 4, 3, 2, 1]));

// console.log(main.one([2, 48, 22, 19, 92, 52]));
// console.log(main.one([5, 4, 3, 2, 1]));
// console.log(main.one([1, 2, 3, 4, 5]));
