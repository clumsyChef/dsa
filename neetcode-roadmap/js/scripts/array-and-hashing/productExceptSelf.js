const main = {
	solution_1(nums) {
		const left = Array(nums.length).fill(1);
		const right = Array(nums.length).fill(1);

		let leftProduct = nums[0];
		let rightProduct = nums[nums.length - 1];

		for (let i = 1; i < nums.length; i++) {
			left[i] = leftProduct;
			leftProduct *= nums[i];
		}

		for (let i = nums.length - 2; i > -1; i--) {
			right[i] = rightProduct;
			rightProduct *= nums[i];
		}

		const ans = [];

		for (let i = 0; i < nums.length; i++) {
			let curr = left[i] * right[i];
			if (curr === 0) curr = Math.abs(0);
			ans.push(curr);
		}

		return ans;

		// original: [1 , 2 , 3 , 4]
		// left:     [1 , 1 , 2 , 6]
		// right:    [24, 12, 4 , 1]
	},
};

const productExceptSelf = () => {
	console.log(main.solution_1([1, 2, 3, 4])); // [24,12,8,6]
	console.log(main.solution_1([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
};

export default productExceptSelf;
