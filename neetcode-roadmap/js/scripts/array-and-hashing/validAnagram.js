const main = {
	solution_1(s, t) {
		if (s.length !== t.length) return false;
		let _s = s;
		for (let i = 0; i < t.length; i++) {
			const ind = _s.indexOf(t[i]);
			if (ind === -1) return false;
			_s = _s.substring(0, ind) + _s.substring(ind + 1);
		}
		if (_s.length) return false;
		return true;
	},

	solution_2(s, t) {
		if (s.length !== t.length) return false;

		const charMap = Array(26).fill(0);

		for (let i = 0; i < s.length; i++) {
			charMap[s.charCodeAt(i) - "a".charCodeAt(0)]++;
			charMap[t.charCodeAt(i) - "a".charCodeAt(0)]--;
		}

		return charMap.every((count) => count === 0);
	},

	solution_3(s, t) {
		const _s = s.split("").sort().join("");
		const _t = t.split("").sort().join("");

		return _s === _t;
	},
};

const validAnagram = () => {
	console.log(main.solution_2("anagram", "nagaram"));
	console.log(main.solution_2("rat", "cat"));
};

export default validAnagram;
