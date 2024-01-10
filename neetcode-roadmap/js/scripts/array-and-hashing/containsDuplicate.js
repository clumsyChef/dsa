// Explanation:

/* 
	So apparently, if we use array to save items it takes more time. Javascript Sets are faster as they use hash tables internally.
	so has, add, delete in a Set is typically O(1) compared to O(n) for an array where n is the number of elements
*/

const containsDuplicate = () => {
	const a = new Set();
	for (let i = 0; i < nums.length; i++) {
		const numb = nums[i];
		if (a.has(numb)) {
			return true;
		} else {
			a.add(numb);
		}
	}
	return false;
};

export default containsDuplicate;
