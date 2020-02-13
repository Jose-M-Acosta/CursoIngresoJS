function mostrar() {
    //tomo la edad  
    var num1;

    num1 = parseInt(document.getElementById("edad").value);

    if (!(num1 >= 13 && num1 <= 17)) {
        alert("Usted no es adolecente")
    }


}//FIN DE LA FUNCIÓN