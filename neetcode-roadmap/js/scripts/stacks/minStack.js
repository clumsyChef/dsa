var MinStack = function () {
	this.stack = [];
	this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.stack.push(val);
	this.min = Math.min(this.min, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	const lastVal = this.stack.pop();
	// this.min = Math.min(this.min, lastVal);
	this.min = Math.min(...this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
