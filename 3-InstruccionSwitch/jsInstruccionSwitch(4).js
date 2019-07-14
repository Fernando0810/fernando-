function mostrar()
{
  var mes;
  mes=document.getElementById("mes").value;

  switch(mes)
  { 
    case"Enero":
         alert("si tiene 31 días");
         break;
    case "Febrero":
        alert("si tiene 28 días.");
        break;
    case "Marzo":
            alert("si tiene 31 días");
            break;
    case "Abril":
            alert("si tiene 30 días");
            break;
    case "Mayo":
            alert("si tiene 31 días");
            break;
    case "Junio":
            alert("si tiene 31 días");
            break;
    case "Julio":
            alert("si tiene 31 días");
            break;
    case "Agosto":
            alert("si tiene 31 días");
            break;
    case "Septiembre":
            alert("si tiene 30 días");
            break;
    case "Noviembre":
            alert("si tiene 30 días");
            break;
    case "Diciembre" :
            alert("si tiene 31 días");
            break;    
  }

}//FIN DE LA FUNCIÓN