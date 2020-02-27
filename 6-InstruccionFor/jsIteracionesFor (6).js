function mostrar() {
    var numero;
    var conPar = 0;

    numero = parseInt(prompt('ingrese un numero: '));

    while (isNaN(numero)) {
        numero = parseInt(prompt('esp no es un numero! Ingrese un numero.'));
    }

    for (var i = 1; i <= numero; i++) {

        if (i % 2 == 0) {
            conPar++;
            document.write(i + '</br>');
        }

    }

    document.write('La cantidad de numero pares es: ' + conPar);

}//FIN DE LA FUNCIÓN