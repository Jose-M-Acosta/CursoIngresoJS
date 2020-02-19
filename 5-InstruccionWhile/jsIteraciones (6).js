function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numIngresado;


	while (contador < 5) {


		numIngresado = parseInt(prompt("Ingresar 5 numeros"));
		acumulador = acumulador + numIngresado;

		contador++;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN