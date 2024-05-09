MyQueue.prototype.peek = function () {
    return this.s1[this.s1.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
[
