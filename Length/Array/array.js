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
function findPairForSum(array, number) {

	for (var i = 0; i < array.length; i++) {// se itera en la lista de numeros y se da una suma objetivo.
		for (var j = i + 1; j < array.length; j++) { // se enlaza el primer for con el segundo utilizando el i + 1 para que pueda sumar apartir del primer elemento (1er for) 
			if (array[i] + array[j] == number) { // aqui se crea la condicion donde al sumar ambos elementos es igual a la suma de objetivo.
				newArray = [array[i], array[j]]; // se crea un nuevo array con ambos elementos complementados.
			}

		}
	}
	return newArray;

}
