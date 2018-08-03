function getNthElement(array, n) {
	return array[n];
}

function areValidCredentials(nombre, contraseña) {
	let nombre = nombre.length;// se declara las variables donde se le coloca length que devuelve la cantidad de elementos 
	let contraseña = contraseña.length;

	if (nombre > 3 && contraseña >= 8) { // se crea la condicion donde se indica que el nombre debe ser mayor a 3 caractres y la contraseña mayo o igual a 8.
		return true // declara que es true si se cumple esta condicion
	} else {
		return false// si no es falso
	} 

}
function computeSumOfAllElements(arr) {
	let suma = 0;// se crea una variable en cero,puede ser null o vacia,donde luego se van a ir integrando la suma de los elementos,hace papel de contenedor.
//se itera en los elementos 
	for (let i = 0; i < arr.length; i++) {
		suma += arr[i];// se declara suma y se le indica que se le va ir integrando o sumando la suma de los elementos del array.
	}
	return suma;
}
function findPairForSum(array, number) {

	for (var i = 0; i < array.length; i++) {// se itera en la lista de numeros y se da una suma objetivo.
		for (var j = i + 1; j < array.length; j++) { // se enlaza el primer for con el segundo utilizando el i + 1 para que pueda sumar apartir del primer elemento (1er for) 
			if (array[i] + array[j] == number) { // aqui se crea la condicion donde al sumar ambos elementos es igual a la suma de objetivo.
				 let newArray = [array[i], array[j]]; // se crea un nuevo array con ambos elementos complementados.
			}

		}
	}
	return newArray;

}
