const main = {
	solution_1(target, position, speed) {
		const pairs = position.map((posi, ind) => [posi, speed[ind]]).sort((a, b) => b[0] - a[0]);

		const stack = [];

		pairs.forEach((pair, ind) => {
			const current = (target - pair[0]) / pair[1];
			if (stack.length > 0) {
				const lastTime = stack[stack.length - 1];
				if (current > lastTime) {
					stack.push(current);
				}
			} else {
				stack.push(current);
			}
		});

		return stack.length;
	},

	solution_2(target, position, speed) {
		const n = speed.length;
		const v = [];
		for (let i = 0; i < n; i++) {
			v.push([position[i], speed[i]]);
		}
		v.sort((a, b) => a[0] - b[0]);

		const time = [];
		for (let i = 0; i < n; i++) {
			time.push((target - v[i][0]) / v[i][1]);
		}

		console.log(time);

		let curr = Number.NEGATIVE_INFINITY;
		let res = 0;

		for (let i = n - 1; i >= 0; i--) {
			if (time[i] > curr) {
				curr = time[i];
				res++;
			}
		}

		return res;
	},
};

const carFleet = () => {
	console.log(main.solution_1(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
	console.log(main.solution_1(10, [3], [3])); // 1
	console.log(main.solution_1(100, [0, 2, 4], [4, 2, 1])); // 1
	console.log(main.solution_1(10, [0, 4, 2], [2, 1, 3])); // 1
	console.log(main.solution_1(13, [10, 2, 5, 7, 4, 6, 11], [7, 5, 10, 5, 9, 4, 1])); // 2
};

export default carFleet;

// [
// 	[0,2,4, 6, 8,10]
// 	[4,5,6, 7, 8, 9,10]
// 	[2,5,8,11]
// ]
