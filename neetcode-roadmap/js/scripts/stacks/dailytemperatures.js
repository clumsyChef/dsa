const main = {
	// Brute force
	solution_1(temperatures) {
		const res = [];
		for (let i = 0; i < temperatures.length; i++) {
			const curr = temperatures[i];
			let days = 0;
			let found = false;
			for (let j = i + 1; j < temperatures.length; j++) {
				days++;
				if (curr < temperatures[j]) {
					found = true;
					break;
				}
			}

			res.push(found ? days : 0);
		}

		return res;
	},

	// With stacks
	solution_2(temperatures) {
		const myStack = [];
		const output = Array(temperatures.length).fill(0);

		for (let i = 0; i < temperatures.length; i++) {
			const curr = temperatures[i];
			while (myStack.length && curr > myStack[myStack.length - 1]["num"]) {
				const lastElem = myStack.pop();
				output[lastElem.ind] = i - lastElem.ind;
			}

			myStack.push({ num: curr, ind: i });
		}

		return output;
	},
};

const dailyTemperatures = () => {
	console.log(main.solution_2([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
	console.log(main.solution_1([30, 40, 50, 60])); // [1,1,1,0]
	console.log(main.solution_1([30, 60, 90])); // [1,1,0]
	console.log(main.solution_1([76, 74, 75, 77])); // [3,1,1,0]
};

export default dailyTemperatures;
