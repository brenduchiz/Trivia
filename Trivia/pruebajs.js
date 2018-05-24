function alerta()
{
var qcorrect=0;
var qwrong=0;
var mensaje;
var nombre = prompt("Introduzca su nombre:");

if (nombre == null || nombre == "") {
        mensaje = "Bienvenida";
        } else {
            mensaje = "Bienvenida " + nombre;
              document.getElementById("usuario").innerHTML = mensaje;
            var gameplay = prompt ('¿Quieres jugar 1.si     2.no ?');
            if (gameplay == ("1")) {
              var firstQuestion = prompt('¿Cuanto es 2+ 2?');
              if (firstQuestion = ("4")) {
                qcorrect= qcorrect+1
}
}
}
