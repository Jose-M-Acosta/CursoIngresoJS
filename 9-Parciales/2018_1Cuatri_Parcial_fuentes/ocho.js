function mostrar() {
    var letra;
    var numero;
    var continuar;
    var conPares = 0;
    var conImpar = 0;
    var cantidadZero = 0;
    var promedioPosi;
    var numPosi = 0;
    var acumuladorPositivo = 0;
    var numNeg = 0;
    var acumuladorNegativo = 0;
    var flagMax = 0;
    var flagMin = 0;
    var numMax = 0;
    var numMin = 0;
    var letraMin;
    var letraMax;


    do {
        letra = prompt('Ingrese una letra ');

        numero = parseInt(prompt('Ingrese un numero'));
        while (isNaN(numero) || numero > 100 || numero < -100) {
            numero = parseInt(prompt('no es un numero ingrese. Ingrese un numero valido.'));
        }

        if (numero % 2 == 0) {
            conPares++;
        } else {
            conImpar++;
        }

        if (numero == 0) {
            cantidadZero++;
        }

        if (numero > 0) {
            numPosi++;
            acumuladorPositivo = acumuladorPositivo + numero;
        }

        if (numero < 0) {
            numNeg++;
            acumuladorNegativo = acumuladorNegativo + numero
        }

        if (flagMax == 0 || numero > numMax) {
            numMax = numero;
            letraMax = letra;
            flagMax = 1;
        }

        if (flagMin == 0 || numero < numMin) {
            numMin = numero;
            letraMin = letra;
            flagMin = 1;
        }

        continuar = prompt('Desea ingresar otro numero?');

    } while (continuar == 's');

    promedioPosi = acumuladorPositivo / numPosi;

    document.write('1.Cantidad de numeros pares: ' + conPares + '</br>');
    document.write('2.Cantidad de numeros impares: ' + conImpar + '</br>');
    document.write('3.Cantidad de zeros: ' + cantidadZero + '</br>');
    document.write('4.Promedio de numeros positivos: ' + promedioPosi + '</br>');
    document.write('5. La suma de todos los números negativos: ' + acumuladorNegativo + '</br>');
    document.write('6.El numero y letra maxima es: ' + numMax + letraMax+ '</br>');
    document.write('7.El numero y letra minima es :' + numMin + letraMin);
}
