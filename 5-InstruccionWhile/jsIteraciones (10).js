function mostrar() {

	var respuesta = "s";
	var numIngresado;
	var sumaPosi = 0;
	var sumaNegi = 0;
	var conPosi = 0;
	var conNegi = 0;
	var conCero = 0;
	var conPar = 0;
	var proPosi = 0;
	var proNegi = 0;
	var differencia = 0;


	do {
		numIngresado = parseInt(prompt('Ingrese un numero: '));

		while (isNaN(numIngresado)) {
			numIngresado = parseInt(prompt('No es un numero! Ingrese un numero: '));
		}

		if (numIngresado % 2 == 0) {
			conPar++;
		}

		if (numIngresado < 0) {
			sumaNegi = sumaNegi + numIngresado;
			conNegi++;
		}

		else if (numIngresado > 0) {
			sumaPosi = sumaPosi + numIngresado;
			conPosi++;
		}

		else {
			conCero++;
		}

		respuesta = prompt('desea Ingresar otro numero? ');
	} while (respuesta == 's');

	if (conPosi != 0) {
		proPosi = sumaPosi / conPosi;
	}
	if (conNegi != 0) {
		proNegi = sumaNegi / conNegi;
	}

	differencia = conPosi - conNegi;


	document.write('1.Suma de los Negativos: ' + sumaNegi + '</br>');
	document.write('2.Suma de los Positivos: ' + sumaPosi + '</br>');
	document.write('3.Cantidad de Positivos: ' + conPosi + '</br>');
	document.write('4.Cantidad de Negativos: ' + conNegi + '</br>');
	document.write('5.Cantidad de Ceros: ' + conCero + '</br>');
	document.write('6.Cantidad de numeros pares: ' + conPar + '</br>');
	document.write('7.Promedio de los Positivos: ' + proPosi + '</br>');
	document.write('8.Promedio de los Negativos: ' + proNegi + '</br>');
	document.write('9.Differencia de los Positivos y los Negativos: ' + sumaNegi + '</br>');



}//FIN DE LA FUNCIÓN