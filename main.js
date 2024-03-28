let inputNombre = document.querySelector("#Nombre");
let inputFecha = document.querySelector("#fecha");
let inputCantidad = document.querySelector("#cantidad");
let inputEnviar = document.querySelector("#enviar");

// parametros
let parametros = new URL(document.location).searchParams;
//sacar datos parametrso
let socio = parametros.get("socio");
let semana = parametros.get("semana");

inputNombre.innerHTML = socio;
inputFecha.innerHTML = semana;
if (!socio || !semana) {
  inputEnviar.disabled = true;
  alert("Error en la página. Faltan datos del socio o la semana.");
}

// Validar enviar
inputEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    inputNombre.value === "" ||
    inputFecha.value === "" ||
    inputCantidad.value === ""
  ) {
    alert("Debes indicar la cantidad prevista para poder enviar los datos.");
    return false;
  } else if (
    inputNombre.classList.contains("is-valid") &&
    inputFecha.classList.contains("is-valid") &&
    inputCantidad.value != ""
  ) {
    alert("Enviado");
    return true;
  }

  // Reiniciar campos

  inputCantidad.value = "";

  // redirigir a otra página
  window.location.href = "ty.html";
});

// Guardar datos en localStorage
localStorage.setItem("Nombre", inputNombre.value);
localStorage.setItem("fecha", inputFecha.value);

// sacar datos de localStorage
let nombreGuardado = localStorage.getItem("Nombre");
let fechaGuardada = localStorage.getItem("fecha");

// metodo post
