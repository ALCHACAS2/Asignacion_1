function validarUsuario() {
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;
  if (usuario.trim() == "" || contraseña.trim() == "") {
    alert("Por favor ingrese su usuario y contraseña");
    return false;
  }
  alert("Bienvenido " + usuario);
  window.location.href = "index.html";
  return false;
}
function alerta() {
  alert("Bienvenido " + "a");
}
function redirigirAIndex() {
  window.location.href = "index.html";
}
function registroInfo() {
  var nombre = document.getElementById("Nombre").value;
  var apellido = document.getElementById("Apellido").value;
  var usuario = document.getElementById("Usuario").value;
  var correo = document.getElementById("Correo").value;
  var confirCorreo = document.getElementById("ConfirmarCorreo").value;
  if (
    nombre.trim() == "" ||
    apellido.trim() == "" ||
    usuario.trim() == "" ||
    correo.trim() == "" ||
    confirCorreo.trim() == ""
  ) {
    alert("Favor ingresar todos los datos");
  } else {
    alert("Datos registrados correctamente");
  }
}
