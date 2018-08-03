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
