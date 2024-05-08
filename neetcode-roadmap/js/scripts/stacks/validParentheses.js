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

	// Bad Solution -> commented and uncommented both works. but they take time as it will go through whole string multiple times.
	solution_2(s) {
		// while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
		// 	s = s.replace("()", "").replace("{}", "").replace("[]", "");
		// }
		// return /(\(\)|\[\]|\{\})/g.test(s);
		while (/(\(\)|\[\]|\{\})/g.test(s)) {
			s = s.replace(/(\(\)|\[\]|\{\})/g, "");
		}

		return !s.length;
	},
};

const validParenthesis = () => {
	console.log(main.solution_2("()"));
	console.log(main.solution_2("()[]{}"));
	console.log(main.solution_2("(]"));
	console.log(main.solution_2("(("));
};

export default validParenthesis;
