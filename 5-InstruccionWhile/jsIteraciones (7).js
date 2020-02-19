function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta;
	var numIngresado;

	do {

		numIngresado = parseInt(prompt('Ingrese un numero: '));
		acumulador = acumulador + numIngresado;
		contador++;
		respuesta = prompt('Desea ingresar otro numero?');
	} while (respuesta == 'si');


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN