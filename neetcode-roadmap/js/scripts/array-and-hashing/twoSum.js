const main = {
	solution_1(nums, target) {
		const sortedArr = [...nums].sort((a, b) => a - b);

		let [h, t] = [0, sortedArr.length - 1];

		while (sortedArr[h] + sortedArr[t] !== target) {
			const summation = sortedArr[h] + sortedArr[t];
			if (summation > target) {
				t -= 1;
			} else if (summation < target) {
				h += 1;
			}
		}

		const [hI, tI] = [nums.indexOf(sortedArr[h]), nums.lastIndexOf(sortedArr[t])];
		return [hI, tI];
	},

	solution_2(nums, target) {
		const myMap = new Map();

		for (let i = 0; i < nums.length; i++) {
			const compliment = target - nums[i];
			if (myMap.has(compliment)) return [myMap.get(compliment), i];
			myMap.set(nums[i], i);
		}

		return [];
	},
};

const twoSum = () => {
	console.log(main.solution_2([2, 7, 11, 15], 9));
	console.log(main.solution_2([3, 2, 4], 6));
	console.log(main.solution_2([3, 3], 6));
};

export default twoSum;
