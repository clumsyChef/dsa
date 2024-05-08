const main = {
	// Brute force -> O(N^2)
	solution_1(height) {
		let l = 0;
		let total = 0;
		while (l < height.length) {
			let r = l + 1;
			let maxInd = r;

			while (r < height.length) {
				if (height[r] >= height[maxInd]) {
					maxInd = r;
				}
				if (height[r] > height[l]) {
					maxInd = r;
					break;
				}
				r++;
			}

			const minHeight = Math.min(height[l], height[maxInd]);

			for (let i = l + 1; i < maxInd; i++) {
				total += minHeight - height[i];
			}

			l = maxInd;
		}

		return total;
	},

	// O(N)
	solution_2(height) {
		const maxLeft = [];
		const maxRight = [];
		let current = 0;
		for (let i = 0; i < height.length; i++) {
			maxLeft.push(current);
			current = Math.max(current, height[i]);
		}

		current = 0;
		for (let i = height.length - 1; i > -1; i--) {
			maxRight.push(current);
			current = Math.max(current, height[i]);
		}

		maxRight.reverse();

		let total = 0;
		for (let i = 0; i < maxLeft.length; i++) {
			const LeftRightMin = Math.min(maxLeft[i], maxRight[i]);
			total += Math.max(LeftRightMin - height[i], 0);
		}

		return total;
	},
};

const trappingRainWater = () => {
	console.log(main.solution_2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
	console.log(main.solution_2([4, 2, 0, 3, 2, 5])); // 9
};

export default trappingRainWater;
