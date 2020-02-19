function mostrar() {

	var respuesta;
	var numIngresado;
	var suma = 0;
	var multi = 1;

	do {
		numIngresado = parseInt(prompt('Ingrese un numero: '));

		if (numIngresado >= 0) {

			suma = suma + numIngresado;

		} else {

			multi = multi * numIngresado;
		}

		respuesta = prompt('Desea ingresar otro numero?');
	} while (respuesta == 'si');


	document.getElementById('suma').value = Suma;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN