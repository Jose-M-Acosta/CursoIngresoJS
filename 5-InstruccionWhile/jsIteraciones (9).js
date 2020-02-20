function mostrar() {

	var contador = 0;
	var numIngresado;
	var numMax;
	var numMin;
	var respuesta = 'si';
	// declarar variables

	do {
		numIngresado = parseInt(prompt('Ingrese unnumero: '));

		while (isNaN(numIngresado)) {
			numIngresado = parseInt(prompt('No es un numero! Ingrese unnumero: '));
		}


	} while (respuesta != 'no');


	document.getElementById("maximo").value = numMax;
	document.getElementById("minimo").value = numMin;


}//FIN DE LA FUNCIÓN