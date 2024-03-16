const main = {
	solution_1(board) {
		// check every row
		for (let i = 0; i < 9; i++) {
			const filteredRow = board[i].filter(Number);
			if (filteredRow.length !== new Set(filteredRow).size) {
				return false;
			}
		}

		// check every column
		for (let i = 0; i < 9; i++) {
			let mySet = new Set();
			let myArr = new Array();
			for (let j = 0; j < 9; j++) {
				const elem = board[j][i];
				if (elem !== ".") {
					mySet.add(elem);
					myArr.push(elem);
				}
			}

			if (mySet.size !== myArr.length) return false;
		}

		// check each boxes
		const points = [
			[0, 0],
			[3, 0],
			[6, 0],
			[0, 3],
			[3, 3],
			[6, 3],
			[0, 6],
			[3, 6],
			[6, 6],
		];

		for (let k = 0; k < points.length; k++) {
			const item = points[k];
			let mySet = new Set();
			let myArr = new Array();
			for (let i = item[0]; i < item[0] + 3; i++) {
				for (let j = item[1]; j < item[1] + 3; j++) {
					const elem = board[i][j];
					if (elem !== ".") {
						mySet.add(elem);
						myArr.push(elem);
					}
				}
			}

			if (mySet.size !== myArr.length) return false;
		}

		return true;
	},
};

const validSudoku = () => {
	const board_1 = [
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	];

	const board_2 = [
		["8", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	];

	const board_3 = [
		[".", ".", "4", ".", ".", ".", "6", "3", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", "."],
		["5", ".", ".", ".", ".", ".", ".", "9", "."],
		[".", ".", ".", "5", "6", ".", ".", ".", "."],
		["4", ".", "3", ".", ".", ".", ".", ".", "1"],
		[".", ".", ".", "7", ".", ".", ".", ".", "."],
		[".", ".", ".", "5", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", "."],
	];

	// console.log(main.solution_1(board_1)); // true
	// console.log(main.solution_1(board_2)); // false
	console.log(main.solution_1(board_3)); // false
};

export default validSudoku;
