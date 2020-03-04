function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var continuar;
    var conTempPar = 0;
    var pesoPesado = 0;
    var marcaPesado;
    var productoCongelado = 0;
    var pesoMax = 0;
    var pesoMin = 0;
    var flag2 = 0;
    var promedio;
    var pesoAcumulado = 0;
    var conPeso = 0;

    do {
        marca = prompt('Ingrese la marca del producto.');

        peso = parseInt(prompt('Ingrese el peso del producto.(1-100)'));
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt('Dato invalido. Ingrese el peso del producto. (1-100)'));
        }

        temperatura = parseInt(prompt('Ingrese temperatura.(-30 hasta 30)'));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt('Dato invalido. Ingrese temperatura (-30 hasta 30)'));
        }

        if (temperatura % 2 == 0) {
            conTempPar++;
        }

        if ((temperatura > 0) && (flag1 = 0 || peso < pesoPesado)) {
            pesoPesado = peso;
            marcaPesado = marca;
            flag1 = 1;
        }

        if (temperatura < 0) {
            productoCongelado++;
        }

        if (peso < pesoMin || flag2 == 0) {
            pesoMin = peso;
        }

        if (peso > pesoMax || flag2 == 0) {
            pesoMax = peso;
            flag2 = 1;
        }

        pesoAcumulado = pesoAcumulado + peso;
        conPeso++;

        continuar = prompt('Usted desea continuar? ');
    } while (continuar == 's');

    while (conPeso != 0) {
        promedio = pesoAcumulado / conPeso;
    }


    document.write('1.La cantidad de temperatura pares: ' + conTempPar + '</br>');
    document.write('2.La marca del producto mas pesado no congelado: ' + marcaPesado + '</br>');
    document.write('3.La cantidad de productos que se consercan a menos de 0 grados: ' + productoCongelado + '</br>');
    document.write('4.El promedio del peso de todos los productos: ' + promedio + '</br>');
    document.write('2.El peso maximo: ' + pesoMax + ' El peso minimo' + pesoMin + '</br>');

}
/*
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.
