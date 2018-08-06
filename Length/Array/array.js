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

	for (let i = 0; i < array.length; i++) {// se itera en la lista de numeros y se da una suma objetivo.
		for (let j = i + 1; j < array.length; j++) { // se enlaza el primer for con el segundo utilizando el i + 1 para que pueda sumar apartir del primer elemento (1er for) 
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


function findShortestWordAmongMixedElements(array) {
	let newArray = []; // se declara una variable con un arreglo vacio 
	let string  = ""; // se declara una variable con un string vacio, en esta variable es donde se va a devolver el nuevo array con los string
	for (let i = 0; i < array.length; i++) { // se itera en el array, en la cadena de string que esta dentro de array.
		if (typeof (array[i]) === "string" && array[i].length < 5) {// se la crea la condición donde en la cadena debe buscar solo valores de  string y que devuelva una longitud de menos de 5 carateres.
			newArray.push(array[i]);// se pushea a la variable newarray el string localizado
			string = newArray[0];
		}
		else if (array.length === 0) {//si el array dado es igual a 0 o vacio debe volver una cadena vacia.
			string += "";
		}
	}
	return string;


}

function findSmallestNumberAmongMixedElements(array) {
	let newArray = [];
	let number = 0;
	for (let i = 0; i < array.length; i++) {
		if (typeof (array[i]) === "number" && array[i] < 5) { // se crea la condicion donde el  valor de array debe ser numero y menor de 5 carateres
			newArray.push(array[i]);// se pushea el arreglo nuevo de numero
			number = newArray[0];
		}
		else if (array.length === 0) { // si el arreglo esta vacio devuelve cero
			number += 0;
		}
	}
	return number;

}

function getLongestWordOfMixedElements(array) {
	let longestWord = "";// se declara una varible con un string vacio
		
	if (array.length > 0) { // si la longitud del array es mayor a cero
		for (let i = 0; i <= array.length; i++) { // se itera en el array que i es menor iguala la logitud del array
			if (typeof array[i] === "string") { // se declara que el tipo de valor del array debe ser solos string
				if (longestWord.length === 0) { //si la longitud del array es solo igual a cero longestWord es igual al valor del string 
					longestWord = array[i];
				}
				if (array[i].length > longestWord.length) { // si la longitud del array es mayor a la logitud de longestWord
					longestWord = array[i];//longetWord es igual a al array localizado con las condiciones anteriores
				}
			}
		}

	}
	return longestWord;
}