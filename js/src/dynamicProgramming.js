/*
	Bottom 2 are a top down approaches
*/

// BigO = O(2^N)
const normalFib = (n) => {
	if (n <= 2) return 1;
	return normalFib(n - 1) + normalFib(n - 2);
};

// BigO = O(N)
const memoFib = (n, memo = {}) => {
	if (memo[n]) return memo[n];
	if (n <= 2) return 1;
	const res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
	memo[n] = res;
	if (n === 6) {
		console.log("memo", memo);
	}
	return res;
};

/*
	Bottom one is bottom up approach i,e. we calculate the fibo of lower numbers and keep on adding them.
*/

const bottomsUp = (n) => {
	if (n <= 2) return 1;
	let fibNumbs = { 0: 1, 1: 1, 2: 1 };

	// we can also use the array instead of the object and in that way we will get the whole list. Keep pushing in the array
	// let fibNumbs = [0, 1, 1]
	for (let i = 3; i <= n; i++) {
		fibNumbs[i] = fibNumbs[i - 1] + fibNumbs[i - 2];
	}

	return fibNumbs[n];
};

// console.log(bottomsUp(40));
