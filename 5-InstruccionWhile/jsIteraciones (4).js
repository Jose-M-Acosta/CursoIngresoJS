function mostrar() {

	var numero;

	numero = parseInt(prompt("ingrese un número entre 1 y 9."));

	while (numero < 0 || numero > 9 || isNaN(numero)) {

		alert("Numero Incorrecta, Volver a ingresar numero!");
		numero = parseInt(prompt("ingrese un número entre 1 y 9."));

	}

	alert("Numero correcto!");

	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN