const main = {
	calculator(num1, num2, symbol) {
		if (symbol === "+") return num1 + num2;
		if (symbol === "-") return num1 - num2;
		if (symbol === "*") return num1 * num2;
		if (symbol === "/") return Math.trunc(num1 / num2);
	},

	solution_1(tokens) {
		const myStack = [];

		for (let i = 0; i < tokens.length; i++) {
			if (/[0-9]{1,}/g.test(tokens[i])) {
				myStack.push(Number(tokens[i]));
			} else {
				const [top, secondTop] = [myStack.pop(), myStack.pop()];
				// let calc = eval(`(${secondTop})${tokens[i]}(${top})`);
				// if (tokens[i] === "/") calc = Math.trunc(calc);
				const calc = this.calculator(secondTop, top, tokens[i]);
				myStack.push(calc);
			}
		}

		return myStack[0];
	},

	solution_2(tokens) {
		var evalRPN = function (tokens, stack = []) {
			for (const char of tokens) {
				/* Time O(N) */
				const isOperation = char in OPERATORS;
				if (isOperation) {
					const value = performOperation(char, stack);

					stack.push(value); /* Space O(N) */

					continue;
				}

				stack.push(Number(char)); /* Space O(N) */
			}

			return stack.pop();
		};

		var OPERATORS = {
			"+": (a, b) => a + b,
			"-": (a, b) => a - b,
			"*": (a, b) => a * b,
			"/": (a, b) => Math.trunc(a / b),
		};

		var performOperation = (char, stack) => {
			const [rightNum, leftNum] = [stack.pop(), stack.pop()];
			const operation = OPERATORS[char];

			return operation(leftNum, rightNum);
		};

		evalRPN(tokens);
	},
};

const ReversePolishNotation = () => {
	console.log(main.solution_1(["2", "1", "+", "3", "*"])); // 9
	console.log(main.solution_1(["4", "13", "5", "/", "+"])); // 6
	console.log(main.solution_1(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22
	console.log(main.solution_1(["4", "-2", "/", "2", "-3", "-", "-"])); // -7
};

export default ReversePolishNotation;
