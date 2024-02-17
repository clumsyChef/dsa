const main = {
	solution_1(nums, k) {
		const obj = nums.reduce((acc, curr) => {
			if (!acc[curr]) acc[curr] = 0;
			acc[curr]++;
			return acc;
		}, {});

		const numbs = Object.keys(obj);

		numbs.sort((a, b) => obj[b] - obj[a]);
		numbs.length = k;

		return numbs;
	},
};

const topKFrequentElements = () => {
	console.log(main.solution_1([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
	console.log(main.solution_1([1, 1, 1, 2, 2, 3, 4, 4, 4, 4], 2)); // [1, 2]
};

export default topKFrequentElements;
