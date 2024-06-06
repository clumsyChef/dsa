const main = {
	// Not a binary search solution
	solution_1(nums) {
		nums.sort((a, b) => a - b);
		return nums[0];
	},

	// Binary Search Solution
	solution_2(nums) {
		let min = nums[0];
		let start = 0;
		let end = nums.length - 1;

		while (start <= end) {
			if (nums[start] < nums[end]) {
				min = Math.min(min, nums[start]);
				break;
			}

			let mid = Math.floor((start + end) / 2);
			min = Math.min(min, nums[mid]);

			if (nums[mid] >= nums[start]) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}

		return min;
	},
};

const minimumRotatedSortedArray = () => {
	console.log(main.solution_2([3, 4, 5, 1, 2])); // 1
	console.log(main.solution_2([4, 5, 6, 7, 0, 1, 2])); // 0
	console.log(main.solution_2([11, 13, 15, 17])); // 11
	console.log(main.solution_2([11, 13, 15, 17, 18])); // 11
	console.log(main.solution_2([11, 13, 15, 17, 9])); // 9
	console.log(main.solution_2([3, 4, 5, 6, 1, 2])); // 1
	console.log(main.solution_2([4, 5, 0, 1, 2, 3])); // 0
	console.log(main.solution_2([4, 5, 6, 7])); // 4
	console.log(main.solution_2([7, 8, 1, 2, 3, 4, 5, 6])); // 1
};

export default minimumRotatedSortedArray;
