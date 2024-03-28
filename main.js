let inputNombre = document.querySelector("#form_nombre");
let inputFecha = document.querySelector("#form_fecha");
let inputCantidad = document.querySelector("#form_cantidad");
let inputEnviar = document.querySelector("#enviar");

// parametros
let parametros = new URL(document.location).searchParams;
//sacar datos parametrso
let socio = parametros.get("socio");
let semana = parametros.get("semana");

if (!socio || !semana) {
  inputEnviar.disabled = true;
  alert("Error en la página. Faltan datos del socio o la semana.");
} else {
  document.querySelector("#Nombre").innerHTML = socio;
  document.querySelector("#fecha").innerHTML = semana;
  inputNombre.value = socio;
  inputFecha.value = semana;
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
  }

  emailjs.sendForm("service_zqgwk48", "template_p7bd6ur", "form").then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );

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
