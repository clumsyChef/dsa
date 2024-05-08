const main = {
	solution_1(s) {
		if (s.length % 2 !== 0) return false;
		const parenthesesMap = {
			")": "(",
			"}": "{",
			"]": "[",
		};

		const myArr = [];

		for (let i = 0; i < s.length; i++) {
			const current = s[i];
			if (!parenthesesMap[current]) {
				myArr.push(current);
			} else {
				if (myArr.length === 0) return false;
				const lastItemFromMyArr = myArr.pop();
				if (parenthesesMap[current] !== lastItemFromMyArr) return false;
			}
		}
		return !myArr.length;
		// return true;
	},
};

const validParenthesis = () => {
	console.log(main.solution_1("()"));
	console.log(main.solution_1("()[]{}"));
	console.log(main.solution_1("(]"));
	console.log(main.solution_1("(("));
};

export default validParenthesis;
