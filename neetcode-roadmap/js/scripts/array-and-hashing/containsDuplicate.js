// Explanation:

/* 
	So apparently, if we use array to save items it takes more time. Javascript Sets are faster as they use hash tables internally.
	so has, add, delete in a Set is typically O(1) compared to O(n) for an array where n is the number of elements
*/

const main = {
	solution_1(nums) {
		const arr = new Set();
		for (let i = 0; i < nums.length; i++) {
			const numb = nums[i];
			if (arr.has(numb)) {
				return true;
			} else {
				arr.add(numb);
			}
		}
		return false;
	},

	solution_2(nums) {
		const mySet = new Set(nums);
		return mySet.size === nums.length;
	},
};

const containsDuplicate = () => {
	console.log(main.solution_1([1, 2, 3, 1]));
	console.log(main.solution_1([1, 2, 3, 4]));
	console.log(main.solution_2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
	console.log(main.solution_2([...Array(1000000).keys()]));
};

export default containsDuplicate;
