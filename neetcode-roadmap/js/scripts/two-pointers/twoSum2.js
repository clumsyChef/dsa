const main = {
	solution_1(numbers, target) {
		let startInd = 0;
		let endInd = numbers.length - 1;

		while (startInd < endInd) {
			const summ = numbers[startInd] + numbers[endInd];
			if (summ > target) {
				endInd--;
			} else if (summ < target) {
				startInd++;
			} else {
				return [startInd + 1, endInd + 1];
			}
		}
	},
};

const twoSum2 = () => {
	console.log(main.solution_1([2, 7, 11, 15], 9));
	console.log(main.solution_1([2, 3, 4], 6));
	console.log(main.solution_1([-1, 0], -1));
};

export default twoSum2;
