function mostrar() {
    //tomo la edad  


    var num1;

    num1 = parseInt(document.getElementById("edad").value);

    if (num1 < 13) {
        alert("Usted es un Niño");
    }

    else if (num1 <= 17) {
        alert("Usted es adolecente");
    }

    else {
        alert("Usted es Adulto");
    }

}//FIN DE LA FUNCIÓN