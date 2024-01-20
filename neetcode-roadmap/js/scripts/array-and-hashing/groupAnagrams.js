const main = {
	isAnagram(str1, str2) {
		if (str1.length !== str2) return false;
		const charMap = Array(26).fill(0);
		for (let i = 0; i < str1.length; i++) {
			charMap[str1.charCodeAt(i) - 97]++;
			charMap[str2.charCodeAt(i) - 97]--;
		}
		return charMap.every((count) => count === 0);
	},
	solution_1(strs) {
		const oneStrAndArr = new Map();

		strs.forEach((item) => {
			const sorted = item.split("").sort().join("");
			if (!oneStrAndArr.has(sorted)) oneStrAndArr.set(sorted, []);
			oneStrAndArr.set(sorted, [item, ...oneStrAndArr.get(sorted)]);
		});

		return [...oneStrAndArr.values()];
	},
};

const groupAnagrams = () => {
	const inputs = [["eat", "tea", "tan", "ate", "nat", "bat"], [""], ["a"]];
	inputs.forEach((input) => {
		console.log(main.solution_1(input));
	});
};

export default groupAnagrams;
