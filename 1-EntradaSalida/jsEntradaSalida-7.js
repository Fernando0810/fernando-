/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
    var numeroDos;
    var suma;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    suma=(numeroUno + numeroDos);
    alert(" LA SUMA ES " + suma);
}

function restar()
{
	var numeroUno;
    var numeroDos;
    var resta;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    resta=(numeroUno - numeroDos);
    alert(" LA RESTA ES " + resta);
}

function multiplicar()
{ 
	var numeroUno;
    var numeroDos;
    var multiplicacion;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    multiplicacion=(numeroUno * numeroDos);
    alert(" LA multiplicacion ES " + multiplicacion);
}

function dividir()
{
	var numeroUno;
    var numeroDos;
    var division;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    division=(numeroUno / numeroDos);
    alert(" LA division ES " + division);
}

