function alerta()
{
var mensaje;
var nombre = prompt("Introduzca su nombre:");

if (nombre == null || nombre == "") {
        mensaje = "Bienvenida";
        } else {
            mensaje = "Bienvenida " + nombre;
            var gameplay = prompt ('¿Quieres jugar SI O NO?');
            if (gameplay == ("SI") || ("si"))     {
            var firstQuestion = prompt('¿Cuanto es 2+ 2?')
          }



if (firstQuestion == ("4")) {
// Si contesta correctamente mandarle la segunda pregunta
var secondQuestion = prompt ("¿Cuanto es 5*1?")
}
if(secondQuestion == ("5")){
  // Si contesta correctamente mandarle la tercer pregunta
  var thirdQuestion= prompt ("¿Cuanto es 1000-500?")
}
  if(thirdQuestion == "500"){
    alert("Vamos a ver tu resultado!!!!!!!")
            }else {

              alert("Respuesta Incorrecta");
            }



          }
      document.getElementById("usuario").innerHTML = mensaje;
    }
