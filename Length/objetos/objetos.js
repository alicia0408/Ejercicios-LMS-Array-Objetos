function getElementOfArrayProperty(obj, key, index) {

	if (obj[key] === undefined) {
		return undefined;
	}
	if (Array.isArray(obj[key]) === false) {
		return undefined;
	}

	return obj[key][index];
}

function addObjectProperty(obj1, key, obj2) {
obj1[key] = obj2; 
	return obj1;
}

function getAllKeys(obj) {
    let array = [];
	for (let key in obj) {
		array.push(key);
	}
	return array;

}

function getSumOfAllElementsAtProperty(obj, key) {
	let array = obj[[key]]
	if (key === undefined) {
		return 0
	}
	else if (Array.isArray(array) === false) {
		return 0
	}
	else if (array.length === 0) {
		return 0
	}

	else {
		let sum = 0
		for (let i = 0; i < array.length; i++) {
			sum += array[i]
		}
	}
	return sum
}

function transformFirstAndLast(array) {
	let result = {};
	
	result[array[0]] = array[array.length - 1];
	
	return result;
}

function listAllValues(obj) {
	let valueArr = [];
	for (let i in obj) {
		valueArr.push(obj[i]);
	}


	return valueArr;
}

function convertObjectToList(obj) {
	let convert = Object.keys(obj).map(function (key) {
		return [key, obj[key]];
	});
	return convert;

}
