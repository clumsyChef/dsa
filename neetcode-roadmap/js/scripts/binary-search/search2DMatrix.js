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

	solution_2(matrix, target) {
		let [low, high] = [0, matrix.length - 1];
		const m = matrix[0].length;
		let possibleRow = null;
		while (low <= high) {
			const middle = Math.floor((high - low) / 2) + low;
			const row = matrix[middle];
			let [first, last] = [row[0], row[m - 1]];
			possibleRow = row;
			if (target >= first && target <= last) {
				break;
			}

			if (target > last) {
				low = middle + 1;
			} else if (target < first) {
				high = middle - 1;
			}
		}

		[low, high] = [0, m - 1];

		while (low <= high) {
			let middle = Math.floor((high - low) / 2) + low;
			if (possibleRow[middle] > target) {
				high = middle - 1;
			} else if (possibleRow[middle] < target) {
				low = middle + 1;
			} else {
				return true;
			}
		}
		return false;
	},

	solution_2(matrix, target) {
		let m = matrix.length;
		let n = matrix[0].length;
		let left = 0,
			right = m * n - 1;

		while (left <= right) {
			let mid = Math.floor((left + right) / 2);
			let mid_val = matrix[Math.floor(mid / n)][mid % n];

			if (mid_val === target) return true;
			else if (mid_val < target) left = mid + 1;
			else right = mid - 1;
		}
		return false;
	},
};

const search2DMatrix = () => {
	console.log(
		main.solution_2(
			[
				[1, 2, 4, 8],
				[10, 11, 12, 13],
				[14, 20, 30, 40],
			],
			10
		)
	); // true
	console.log(
		main.solution_2(
			[
				[1, 2, 4, 8],
				[10, 11, 12, 13],
				[14, 20, 30, 40],
			],
			15
		)
	); // false
	console.log(
		main.solution_2(
			[
				[1, 3, 5, 7],
				[10, 11, 16, 20],
				[23, 30, 34, 60],
			],
			3
		)
	); // true
	console.log(
		main.solution_2(
			[
				[1, 3, 5, 7],
				[10, 11, 16, 20],
				[23, 30, 34, 60],
			],
			13
		)
	); // false

	console.log(main.solution_2([[1]], 0));
};

export default search2DMatrix;
