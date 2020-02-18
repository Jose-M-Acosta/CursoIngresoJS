/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var num1;
    var num2;
    var num3;
    var suma;
    var promedio;
    var precioFinal;
    var iva;


    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    suma = num1 + num2 + num3;

    alert(suma);
}
function Promedio() {


    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    suma = num1 + num2 + num3;

    promedio = suma / 3;

    alert(promedio);
}
function PrecioFinal() {

    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    suma = num1 + num2 + num3;

    iva = suma * (21 / 100);

    precioFinal = suma + iva;

    alert(precioFinal);
}