// array de 20 nombres:
const nombres = [
    "Pedro", "Juan", "Maria", "Luis", "Ana", "Carlos", "Sofia", "Jorge", "Lucia", "Marta", "Pablo",
    "Luisa", "Cristina", "Elena", "Fernando", "Gabriela", "Hugo", "Isabel", "Javier", "Karla"
];

// fecha:
let fecha = new Date(
    new Date().setDate(new Date().getDate())
);
console.log(fecha);

let inputNombre = document.querySelector("#Nombre");
let inputFecha = document.querySelector("#fecha");
let inputCantidad = document.querySelector("#cantidad");
let selectTipoU = document.querySelector("#selector");
let inputEnviar = document.querySelector("#enviar");

let params = (new URL(document.location)).searchParams;
let socio = params.get("socio");
let semana = params.get("semana")
socio ? inputNombre.value = socio : inputNombre.value = nombres[Math.floor(Math.random() * nombres.length)];
semana ? inputFecha.value = semana : inputFecha.value = fecha.toISOString().split("T")[0];
// rellenar inputNombre con un nombre aleatorio de la lista
inputNombre.value = nombres[Math.floor(Math.random() * nombres.length)];
// rellenar inputFecha con la fecha del dia
inputFecha.value = fecha.toISOString().split("T")[0];


inputCantidad.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    console.log("Seleccionaste: " + selectedValue);
});

selectTipoU.addEventListener("input", (event) => {
    const selectedValue = event.target.value;
    console.log("Seleccionaste: " + selectedValue);
});
//
// Validar enviar
inputEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputNombre.value === "" || inputFecha.value === "" || inputCantidad.value === "" || selectTipoU.value === "") {
        alert("rellene todos los campos");
        return false;
    }
    else if (inputNombre.classList.contains("is-valid") && inputFecha.classList.contains("is-valid") && inputCantidad.value != "" && selectTipoU.value != "") {
        alert("Enviado");
        return true;
    }

    // Reiniciar campos

    inputCantidad.value = "";
    selectTipoU.value = "";

    // redirigir a otra página
    window.location.href = "ty.html";
});

// Guardar datos en localStorage
localStorage.setItem("Nombre", inputNombre.value);
localStorage.setItem("fecha", inputFecha.value);

//sacar datos de localStorage
let nombreGuardado = localStorage.getItem("Nombre");
let fechaGuardada = localStorage.getItem("fecha");

//estilo para nombreGuardado
nombreGuardado.style = "color: red";

console.log("el nombre es " + nombreGuardado + " " + "la fecha es " + fechaGuardada);

