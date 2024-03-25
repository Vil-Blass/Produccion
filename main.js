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
inputNombre.value = nombres[Math.floor(Math.random() * nombres.length)];
// rellenar inputFecha con la fecha del dia
inputFecha.value = fecha.toISOString().split("T")[0];

// parametros
let parametros = new URLSearchParams(window.location.search);
//guardar parametros
parametros.set("socio", inputNombre.value);
parametros.set("semana", inputFecha.value);
console.log(parametros);

//sacar datos parametrso
let paGuardado = parametros.get("socio");
let feGuardada = parametros.get("semana");


// Validar enviar
inputEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputNombre.value === "" || inputFecha.value === "" || inputCantidad.value === "" ){
        alert("rellene todos los campos");
        return false;
    }
    else if (inputNombre.classList.contains("is-valid") && inputFecha.classList.contains("is-valid") && inputCantidad.value != "") {
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

//sacar datos de localStorage
let nombreGuardado = localStorage.getItem("Nombre");
let fechaGuardada = localStorage.getItem("fecha");

//estilo para nombreGuardado
nombreGuardado.style = "color: red";

console.log("el nombre es " + nombreGuardado + " " + "la fecha es " + fechaGuardada);

