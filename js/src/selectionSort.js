// Find the minimum value in the array through iteration and put it in first
// keep doing it till sorted.
// keep on increasing the index so you don't always swap the first value

const main = {
	one(arr) {
		for (let i = 0; i < arr.length; i++) {
			let min = i;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[min]) {
					min = j;
				}
			}
			const temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
		return arr;
	},
};

// console.log(main.one([2, 48, 22, 19, 92, 52]));
// console.log(main.one([5, 4, 3, 2, 1]));
// console.log(main.one([1, 2, 3, 4, 5]));
