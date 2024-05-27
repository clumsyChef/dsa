const main = {
	solution_1(heights) {
		const stack = [];
		for (let i = 0; i < heights.length; i++) {
			let maxArea = heights[i];
			let lowest = heights[i];
			for (let j = i; j < heights.length; j++) {
				if (heights[j] < lowest) {
					lowest = heights[j];
				}
				const area = (j - i + 1) * lowest;
				if (area > maxArea) {
					maxArea = area;
				}
			}

			stack.push(maxArea);
		}

		return Math.max(...stack);
	},

	solution_2(heights) {
		heights.push(0);
		let stack = [];
		let res = 0;
		for (let i = 0; i < heights.length; i++) {
			let heightStart = i;
			while (stack.length && stack[stack.length - 1][1] > heights[i]) {
				let [pos, height] = stack.pop();
				res = Math.max(res, (i - pos) * height);
				heightStart = pos;
			}
			stack.push([heightStart, heights[i]]);
		}
		return res;
	},
};

const largestRectangleHistogram = () => {
	console.log(main.solution_2([7, 1, 7, 2, 2, 4])); // 8
	// console.log(main.solution_2([1, 3, 7])); // 7
};

export default largestRectangleHistogram;
