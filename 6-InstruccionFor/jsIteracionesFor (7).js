function mostrar() {

    conDiv = 0;

    numero = parseInt(prompt('ingrese un numero: '));

    while (isNaN(numero)) {
        numero = parseInt(prompt('esp no es un numero! Ingrese un numero.'));
    }

    for (var i = 1; i <= numero; i++) {

        if (numero % i == 0) {
            document.write(i + '</br>');
            conDiv++;
        }
    }

    document.write('La cantidad de numeros divisores encontrados son: ' + conDiv);

}//FIN DE LA FUNCIÓN