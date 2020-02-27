function mostrar() {
    var nota;
    var sexo;


    for (var i = 0; i <= 5; i++) {

        nota = parseInt(prompt('Ingrese el numero de la Nota!'));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseInt(prompt('No es un numero valido! Ingrese un numero valido!'));
        }

        sexo = prompt('Ingrese el Sexo!');
        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt('No es un Sexo valido! Ingrese "f" o "m"!');
        }
    }
}
