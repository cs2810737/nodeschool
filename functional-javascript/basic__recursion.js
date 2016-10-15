function reduce(arr, fn, initial){
	return (function reduceRecursive(initial, index){
		if (index == arr.length) return initial
		return reduceRecursive(fn(initial, arr[index], index, arr), index + 1)
	})(initial, 0)
}

module.exports = reduce