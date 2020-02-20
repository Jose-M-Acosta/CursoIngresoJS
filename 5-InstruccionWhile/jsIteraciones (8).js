function mostrar() {

	var respuesta;
	var numIngresado;
	var suma = 0;
	var multi = 1;
	var flag = 0;

	do {
		numIngresado = parseInt(prompt('Ingrese un numero: '));

		while (isNaN(numIngresado)) {
			numIngresado = parseInt(prompt('No es un numero! Ingrese un numero: '));

		}

		if (numIngresado >= 0) {

			suma = suma + numIngresado;

		} else {

			multi = multi * numIngresado;
			flag = 1;
		}

		respuesta = prompt('Desea ingresar otro numero?');
	} while (respuesta == 'si');

	if (flag = 0) {
		multi = 0;
	}


	document.getElementById('suma').value = suma;
	document.getElementById('producto').value = multi;

}//FIN DE LA FUNCIÓN