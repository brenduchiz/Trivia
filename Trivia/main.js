
function alerta()
{
var mensaje;
var nombre = prompt("Introduzca su nombre:");

if (nombre == null || nombre == "") {
        mensaje = "Bienvenida";
        } else {
            mensaje = "Bienvenida " + nombre;
              document.getElementById("usuario").innerHTML = mensaje;
            var gameplay = prompt ('¿Quieres jugar 1.si 2.no ?');
            if (gameplay == ("1")) {
              var firstQuestion = prompt('¿Cuanto es 2+ 2?');
              if (firstQuestion = ("4")) {
                var secondQuestion = prompt ("¿Cuanto es 5*1?")
                if (secondQuestion=("5")) {
                    var thirdQuestion= prompt ("¿Cuanto es 1000-500?")
                    if (thirdQuestion= ("500")) {
                      alert("Vamos a ver tu resultado!!!!!!!")
                      if (true) {
                        document.getElementById("tableok").innerHTML = "CORRECTAS!!!!!";
                        document.getElementById("tablewrong").innerHTML = "MALAS!!!!!";


                      }

                    }

                }
                }

              }else {
              document.getElementById("the_end").innerHTML = "JUGAREMOS PARA LA PROXIMA!!!!!";
                    }













//cierre else
  }


//the end of the functi
}
