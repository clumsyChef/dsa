const main = {
	solution_1(nums) {
		nums.sort((a, b) => a - b);
		const mySet = [...new Set(nums)];
		let longestStreak = 0;
		let localArr = [];
		mySet.forEach((item) => {
			const first = item;
			const lastFromLocal = localArr[localArr.length - 1];

			if (localArr.length && Math.abs(first - lastFromLocal) !== 1) {
				if (localArr.length > longestStreak) {
					longestStreak = localArr.length;
				}
				localArr = [];
			}

			localArr.push(item);
		});

		return localArr.length > longestStreak ? localArr.length : longestStreak;
	},

	solution_2(nums) {
		let maxScore = 0;
		const numSet = new Set(nums); /* Time O(N) | Space O(N) */

		for (const num of [...numSet]) {
			/* Time O(N) */
			const prevNum = num - 1;

			if (numSet.has(prevNum)) continue; /* Time O(N) */

			let [currNum, score] = [num, 1];

			const isStreak = () => numSet.has(currNum + 1);
			while (isStreak()) {
				/* Time O(N) */
				currNum++;
				score++;
			}

			maxScore = Math.max(maxScore, score);
		}

		return maxScore;
	},
};

const longestConsecutiveSequence = () => {
	console.log(main.solution_2([100, 4, 200, 1, 3, 2]));
	console.log(main.solution_2([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
	console.log(main.solution_2([1, 2, 0, 1]));
	console.log(main.solution_2([4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3]));
};

export default longestConsecutiveSequence;
