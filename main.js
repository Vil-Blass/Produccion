'use strict';
// array de 20 nombres:
const nombres = [
    "Pedro", "Juan", "Maria", "Luis", "Ana", "Carlos", "Sofia", "Jorge", "Lucia", "Marta", "Pablo",
    "Luisa", "Cristina", "Elena", "Fernando", "Gabriela", "Hugo", "Isabel", "Javier", "Karla"
];

// fecha:
let fecha = new Date();
console.log(fecha);

let inputNombre = document.querySelector("#Nombre");
let inputFecha = document.querySelector("#fecha");
let inputCantidad = document.querySelector("#cantidad");
let inputEnviar = document.querySelector("#enviar");

// rellenar inputNombre con un nombre aleatorio de la lista
inputNombre.innerHTML = nombres[Math.floor(Math.random() * nombres.length)];

// rellenar inputFecha con la fecha del día
inputFecha.innerHTML = fecha.toISOString().split("T")[0];

// URL
// parámetros
let parametros = new URLSearchParams(window.location.search);
// sacar datos parámetros
let socio = parametros.get('socio');
let semana = parametros.get('semana');

if (inputNombre && inputFecha) {
    socio = inputNombre.innerHTML;
    semana = inputFecha.innerHTML;
    console.log("socio: " + socio + ' ' + "semana: " + semana);
} else if (socio && semana) {
    inputNombre.value = socio;
    inputFecha.value = semana;
    console.log("socio: " + socio + ' ' + "semana: " + semana);
}
console.log('estoy después del if');

// Mostrar los parámetros en la URL
let url = window.location.href.replace(window.location.search, "");
console.log(url);

// Validar enviar
inputEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputNombre.value === "" || inputFecha.value === "" || inputCantidad.value === "") {
        alert("Rellene todos los campos");
        return false;
    } else if (inputNombre.classList.contains("is-valid") && inputFecha.classList.contains("is-valid") && inputCantidad.value !== "") {
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

// método post para url index.html
let data = {
    socio: inputNombre.value,
    semana: inputFecha.value,
    cantidad: inputCantidad.value
};
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta de datos aquí
        console.log(data);
    })
    .catch(error => {
        // Manejar cualquier error aquí
        console.error(error);
    });

console.log(data + ' ' + 'positivo');