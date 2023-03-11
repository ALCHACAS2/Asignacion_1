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
  window.location.href = 'index.html';
}


