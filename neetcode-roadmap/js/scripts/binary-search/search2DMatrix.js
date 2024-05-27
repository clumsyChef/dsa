const main = {
	solution_1(matrix, target) {
		for (let i = 0; i < matrix.length; i++) {
			let breakLoop = false;
			if (matrix[i][0] <= target && matrix[i][matrix[0].length - 1] >= target) {
				breakLoop = true;
				const row = matrix[i];
				for (let j = 0; j < row.length; j++) {
					if (row[j] > target) break;
					if (row[j] === target) return true;
				}
			}
			if (breakLoop) break;
		}
		return false;
	},
};

const search2DMatrix = () => {
	console.log(
		main.solution_1(
			[
				[1, 2, 4, 8],
				[10, 11, 12, 13],
				[14, 20, 30, 40],
			],
			10
		)
	); // true
	console.log(
		main.solution_1(
			[
				[1, 2, 4, 8],
				[10, 11, 12, 13],
				[14, 20, 30, 40],
			],
			15
		)
	); // false
	console.log(
		main.solution_1(
			[
				[1, 3, 5, 7],
				[10, 11, 16, 20],
				[23, 30, 34, 60],
			],
			3
		)
	); // true
	console.log(
		main.solution_1(
			[
				[1, 3, 5, 7],
				[10, 11, 16, 20],
				[23, 30, 34, 60],
			],
			13
		)
	); // false
};

export default search2DMatrix;
