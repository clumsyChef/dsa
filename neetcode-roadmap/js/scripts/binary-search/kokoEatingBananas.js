const main = {
	solution_1(piles, h) {
		const calcSteps = (step) => {
			return piles.reduce((acc, curr) => (acc += Math.ceil(curr / step)), 0);
		};

		let max = Math.max(...piles);
		let min = 1;

		while (min <= max) {
			const mid = Math.floor((max + min) / 2);
			const steps = calcSteps(mid);

			if (steps <= h) {
				max = mid - 1;
			} else {
				min = mid + 1;
			}
		}

		return min;
	},
};

const kokoEatingBananas = () => {
	console.log(main.solution_1([3, 6, 7, 11], 8)); // 4
	console.log(main.solution_1([30, 11, 23, 4, 20], 5)); // 30
	console.log(main.solution_1([30, 11, 23, 4, 20], 6)); // 23
	console.log(main.solution_1([1, 4, 3, 2], 9)); // 2
	console.log(main.solution_1([25, 10, 23, 4], 4)); // 25
};

export default kokoEatingBananas;
