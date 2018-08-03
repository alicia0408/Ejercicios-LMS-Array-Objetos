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
	array = [];
	for (let key in obj) {
		array.push(key);
	}
	return array;

}
function findShortestOfThreeWords(word1, word2, word3) {
	let wordsArr = [word1, word2, word3];
	let shortestWord = word1;

	for (var i = 0; i < wordsArr.length; i++) {
		if (wordsArr[i].length < shortestWord.length) {
			shortestWord = wordsArr[i];
		}
	}
	return shortestWord;
}