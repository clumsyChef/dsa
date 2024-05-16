const main = {
	solution_1(n) {
		const myStack = [];
		const res = [];

		const recurr = (open, close) => {
			if (open === n && close === n) {
				res.push(myStack.join(""));
				return;
			}

			if (open < n) {
				console.log(myStack);
				myStack.push("(");
				recurr(open + 1, close);
				myStack.pop();
			}

			if (close < open) {
				myStack.push(")");
				recurr(open, close + 1);
				myStack.pop();
			}
		};

		recurr(0, 0);

		return res;
	},
};

const generateParenthesis = () => {
	console.log(main.solution_1(3)); // ["((()))","(()())","(())()","()(())","()()()"]
	// console.log(main.solution_1(1)); // ["()"]
};

export default generateParenthesis;
