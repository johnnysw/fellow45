function isArray(val) {
	return toString.call(val) === '[object Array]'
}

function forEach(obj, fn) {
	// Don't bother if no value provided
	if (obj === null || typeof obj === 'undefined') {
		return
	}

	// Force an array if not already something iterable
	if (typeof obj !== 'object') {
		/*eslint no-param-reassign:0*/
		obj = [obj]
	}

	if (isArray(obj)) {
		// Iterate over array values
		for (var i = 0, l = obj.length; i < l; i++) {
			fn.call(null, obj[i], i, obj)
		}
	} else {
		// Iterate over object keys
		for (var key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				fn.call(null, obj[key], key, obj)
			}
		}
	}
}

function deepMerge( /* obj1, obj2, obj3, ... */ ) {
	let result = {}

	function assignValue(val, key) {
		if (typeof result[key] === 'object' && typeof val === 'object') {
			result[key] = deepMerge(result[key], val)
		} else if (typeof val === 'object') {
			result[key] = deepMerge({}, val)
		} else {
			result[key] = val
		}
	}
	for (let i = 0, l = arguments.length; i < l; i++) {
		forEach(arguments[i], assignValue)
	}
	return result
}


export default {
	deepMerge
}


