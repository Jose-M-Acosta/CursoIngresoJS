function mostrar() {

	var contador = 0;
	var numIngresado;
	var numMax;
	var numMin;
	var respuesta = 's';
	// declarar variables

	do {
		numIngresado = parseInt(prompt('Ingrese un numero: '));


		while (isNaN(numIngresado)) {
			numIngresado = parseInt(prompt('No es un numero! Ingrese un numero: '));
		}

		if (contador == 0) {
			numMin = numIngresado;
			numMax = numIngresado;
		}

		if (numIngresado > numMax) {
			numMax = numIngresado;

		}

		if (numIngresado < numMin) {
			numMin = numIngresado;
		}

		respuesta = prompt('desea Ingresar otro numero? ');
		contador++;

	} while (respuesta == 's');


	document.getElementById("maximo").value = numMax;
	document.getElementById("minimo").value = numMin;


}//FIN DE LA FUNCIÓN