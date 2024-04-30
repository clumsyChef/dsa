const main = {
	solution_1(nums) {
		const sortedNums = [...nums];
		sortedNums.sort((a, b) => a - b);
		const triplets = [];

		// debugger;
		for (let i = 0; i < sortedNums.length; i++) {
			const curr = sortedNums[i];
			let startInd = i + 1;
			let endInd = sortedNums.length - 1;
			if (curr === sortedNums[i - 1]) {
				// startInd++;
				continue;
			}

			while (startInd < endInd) {
				let summ = curr + sortedNums[startInd] + sortedNums[endInd];

				if (summ > 0) {
					endInd--;
				} else if (summ < 0) {
					startInd++;
				} else {
					triplets.push([curr, sortedNums[startInd], sortedNums[endInd]]);
					startInd++;
					endInd--;

					while (sortedNums[startInd] === sortedNums[startInd - 1] && startInd < endInd) {
						startInd++;
					}
				}
			}
		}

		return triplets;
	},
};

const threeSumTriplets = () => {
	console.log(main.solution_1([-1, 0, 1, 2, -1, -4]));
	console.log(main.solution_1([-2, 0, 0, 2, 2]));
};

export default threeSumTriplets;
