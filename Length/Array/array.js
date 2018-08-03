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