function mostrar() {
    var nota;
    var sexo;
    var promedio;
    var acumuladorNota = 0;
    var notaMenor;
    var flag = 0;
    var sexoMenor;
    var contadorVaronesMas6 = 0;

    for (var i = 0; i < 5; i++) {

        nota = parseInt(prompt('Ingrese el numero de la Nota!'));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseInt(prompt('No es un numero valido! Ingrese un numero valido!'));
        }

        sexo = prompt('Ingrese el Sexo!');
        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt('No es un Sexo valido! Ingrese "f" o "m"!');
        }

        acumuladorNota = acumuladorNota + nota;

        if (nota < notaMenor || flag == 0) {
            notaMenor = nota;
            sexoMenor = sexo;
            flag = 1;
        }

        if (sexo == 'm' && nota >= 6) {
            contadorVaronesMas6++;
        }
    }

    promedio = acumuladorNota / 5;

    alert("Promedio Notas: " + promedio + "\nNota Baja: " + notaMenor + "\nSexo nota baja: " + sexoMenor + "\nContador Varones nota >6: " + contadorVaronesMas6);
}

