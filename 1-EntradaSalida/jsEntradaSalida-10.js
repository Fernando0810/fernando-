/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var Resultado;
    var importe;
    importe=parseInt(document.getElementById("importe").value);

    Resultado=(importe*25/100);

    importe=(importe + importe);

    document.getElementById("resultado").value=importe;

}
