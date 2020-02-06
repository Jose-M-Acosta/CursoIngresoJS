/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num1;
    var descuento;
    var resultado;

    

    num1 = parseInt(document.getElementById("importe").value);

    descuento = (num1 * 25) / 100;

    resultado = num1 - descuento;

    document.getElementById("resultado").value = resultado;
}
