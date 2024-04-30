const main = {
	solution_1(height) {
		let max = 0;
		for (let l = 0; l < height.length; l++) {
			for (let r = l + 1; r < height.length; r++) {
				const lH = height[l];
				const rH = height[r];
				const area = Math.min(lH, rH) * (r - l);
				if (area > max) {
					max = area;
				}
			}
		}

		return max;
	},

	solution_2(height) {
		let max = 0;
		let [l, r] = [0, height.length - 1];

		while (l < r) {
			const containerHeight = Math.min(height[l], height[r]);
			const containerWidth = r - l;

			if (height[l] < height[r]) {
				l++;
			} else {
				r--;
			}

			const area = containerHeight * containerWidth;

			if (area > max) {
				max = area;
			}
		}

		return max;
	},
};

const mostWaterContainer = () => {
	console.log(main.solution_2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
};

export default mostWaterContainer;
