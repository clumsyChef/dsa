const main = {
	solution_1(str) {
		let conertedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

		let startInd = 0;
		let endInd = conertedStr.length - 1;

		while (startInd <= endInd) {
			if (conertedStr[startInd] !== conertedStr[endInd]) {
				return false;
			}
			startInd++;
			endInd--;
		}

		return true;
	},
};

const validPalindrome = () => {
	console.log(main.solution_1("A man, a plan, a canal: Panama"));
};

export default validPalindrome;
