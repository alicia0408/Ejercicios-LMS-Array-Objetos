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


function findShortestOfThreeWords(word1, word2, word3) {
	let palabras = [word1, word2, word3];// declaro una variable con el array
	let palabrasCortas = word1;

	for (let i = 0; i < palabras.length; i++) {// itero en el array
		if (palabras[i].length < palabrasCortas.length) {// se crea la condicion donde se compara  las palabras.
			let palabrasCortas = palabras[i];// la variable es igual al resultado de la comparacion
		}
	}
	return palabrasCortas;


	function filterOddElements(arr) {
		let num = [];// se declara variable vacia

		for (let i = 0; i < arr.length; i++) {// se recorre los elementos del array
			if (arr[i] % 2 !== 0) {// se crea la condicion donde el array el residuo dado por el resultado de la division por 2 es distinto de 0 y por eso es impar
				num.push(arr[i]);// se pushea el resultado del arreglo a la variable que tenemos vacia
			}
		}
		return num;
	}


}

function calculateBillTotal(preTaxAndTipAmount) {
	let impuesto = preTaxAndTipAmount * 0.095; // se multiplica porl pre impuesto y la cantidad anterior de propina por el porcentaje de impuesto y propina dado.
	let propina = preTaxAndTipAmount * 0.150;

	return preTaxAndTipAmount + impuesto + propina; // retorna la suma del pre impuesto y pre propina con el rsultado de las multipliaciones anteriores.

}