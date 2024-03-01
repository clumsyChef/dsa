class HashTable {
	constructor(size = 7) {
		this.dataMap = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
		}

		return hash;
	}

	set(key, value) {
		const index = this._hash(key);
		if (!this.dataMap[index]) {
			this.dataMap[index] = [];
		}
		this.dataMap[index].push([key, value]);
		return this;
	}

	get(key) {
		const index = this._hash(key);
		if (this.dataMap[index]) {
			const items = this.dataMap[index];
			for (let i = 0; i < items.length; i++) {
				if (items[i][0] === key) {
					return items[i][1];
				}
			}
		}

		return undefined;
	}

	keys() {
		const allKeys = [];
		for (let i = 0; i < this.dataMap.length; i++) {
			if (this.dataMap[i]) {
				for (let j = 0; j < this.dataMap[i].length; j++) {
					allKeys.push(this.dataMap[i][j][0]);
				}
			}
		}

		return allKeys;
	}

	values() {
		const allValues = [];
		for (let i = 0; i < this.dataMap.length; i++) {
			if (this.dataMap[i]) {
				for (let j = 0; j < this.dataMap[i].length; j++) {
					if (!allValues.includes(this.dataMap[i][j][1])) {
						allValues.push(this.dataMap[i][j][1]);
					}
				}
			}
		}

		return allValues;
	}
}

const ht = new HashTable();
ht.set("one", "ONE");
ht.set("two", "TWO");
ht.set("three", "THREE");
ht.set("four", "THREE");
