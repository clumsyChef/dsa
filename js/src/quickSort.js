const unsortedArr = [4, 8, 2, 1, 5, 7, 6, 3, 4];

const quickSort_1 = (arr) => {
	if (arr.length <= 1) return arr;

	// we choose 0 as pivot, remember we have to ignore the pivot element and check only the others or stack size exceeds error will happen, thats why for loop starts with 1 as we ignore the 0th element as its the pivot
	// check the `quickSort_2` function for the other way around
	let pivot = arr[0];
	let left = [];
	let right = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > pivot) {
			right.push(arr[i]);
		} else {
			left.push(arr[i]);
		}
	}

	return [...quickSort_1(left), pivot, ...quickSort_1(right)];
};

const quickSort_2 = (arr) => {
	if (arr.length <= 1) return arr;

	// we choose 0 as pivot, remember we have to ignore the pivot element
	let pivot = arr[2];
	let left = [];
	let right = [];

	let equal = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > pivot) {
			right.push(arr[i]);
		} else if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			equal.push(arr[i]);
		}
	}

	return [...quickSort_2(left), ...equal, ...quickSort_2(right)];
};

console.log(quickSort_1(unsortedArr));
