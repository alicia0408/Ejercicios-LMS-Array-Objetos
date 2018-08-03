function getNthElement(array, n) {
	return array[n];
}

function areValidCredentials(nombre, contraseña) {
	let nombre = nombre.length;
	let contraseña = contraseña.length;

	if (nombre > 3 && contraseña >= 8) {
		return true 
	} else {
		return false
	} 

}
function computeSumOfAllElements(arr) {
	let suma = 0;

	for (let i = 0; i < arr.length; i++) {
		suma += arr[i];
	}
	return suma;
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