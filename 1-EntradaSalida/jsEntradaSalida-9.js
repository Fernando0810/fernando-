/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var sueldo;

    sueldo=parseInt(document.getElementById("sueldo").value);

    resultado=(sueldo*10/100);

    sueldo=(sueldo + sueldo);

    document.getElementById("resultado").value=sueldo;

	
}
