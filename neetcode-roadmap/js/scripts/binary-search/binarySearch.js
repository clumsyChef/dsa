const main = {
	solution_1(nums, target) {
		let [low, high] = [0, nums.length - 1];

		while (low <= high) {
			const middle = Math.floor((high - low) / 2) + low;

			if (nums[middle] > target) {
				high = middle - 1;
			} else if (nums[middle] < target) {
				low = middle + 1;
			} else {
				return middle;
			}
		}

		return -1;
	},

	solution_2(nums, target) {
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] === target) return i;
			if (nums[i] > target) break;
		}

		return -1;
	},
};

const binarySearch = () => {
	console.log(main.solution_1([-1, 0, 3, 5, 9, 12], 9)); // 4
	console.log(main.solution_1([-1, 0, 3, 5, 9, 12], 2)); // -1
	console.log(main.solution_1([-1, 0, 2, 4, 6, 8], 4)); // 3
	console.log(main.solution_1([-1, 0, 2, 4, 6, 8], 3)); // -1
};

export default binarySearch;
