function alerta()
{
var mensaje;
var nombre = prompt("Introduzca su nombre:");

if (nombre == null || nombre == "") {
        mensaje = "Bienvenida";
        } else {
            mensaje = "Bienvenida " + nombre;
            }
            document.getElementById("usuario").innerHTML = mensaje;
}else{
  var nombre = prompt("Lista para jugar?:");
