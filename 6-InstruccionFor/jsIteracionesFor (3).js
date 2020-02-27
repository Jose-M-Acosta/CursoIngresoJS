function mostrar() {

    var repetciones = parseInt(prompt("ingrese el número de repeticiones"));

    while (isNaN(repetciones)) {
        repetciones = parseInt(prompt('No es un numero! Ingrese un numero: '));
    }

    for (var con = 1; con <= repetciones; con++) {

        document.write("Hola UTN FRA" + "</br>");
    }



}//FIN DE LA FUNCIÓN