 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.table[key] === key
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
[
