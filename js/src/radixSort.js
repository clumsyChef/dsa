const unsortedArr = [1, 23, 12, 45, 634, 1234, 123, 5, 7, 8, 6543, 1235456, 8888];
// [1, 5, 7, 8, 12, 23, 45, 123, 634, 1234, 6543, 8888, 1235456]

const getDigit = (number, place) => {
	return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
};

const digitCount = (number) => {
	if (number === 0) return 1;
	return Math.floor(Math.log10(Math.abs(number))) + 1;
};

const mostDigits = (arr) => {
	let maxDigits = 0;
	for (let i = 0; i < arr.length; i++) {
		maxDigits = Math.max(digitCount(arr[i]), maxDigits);
	}

	return maxDigits;
};

const radixSort = (arr) => {
	const maxDigits = mostDigits(arr);

	for (let i = 0; i < maxDigits; i++) {
		let arrayBuckets = [...Array(10)].map((item) => []);
		for (let j = 0; j < arr.length; j++) {
			const digit = getDigit(arr[j], i);
			arrayBuckets[digit].push(arr[j]);
		}
		arr = [].concat(...arrayBuckets);
	}

	return arr;
};

console.log(radixSort(unsortedArr));
