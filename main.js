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
// inputNombre.value = nombres[Math.floor(Math.random() * nombres.length)];
inputNombre.innerHTML = nombres[Math.floor(Math.random() * nombres.length)];



// rellenar inputFecha con la fecha del dia
// inputFecha.value = fecha.toISOString().split("T")[0];
inputFecha.innerHTML = fecha.toISOString().split("T")[0];


// parametros


let parametros = (new URL(document.location)).searchParams;
//sacar datos parametrso
let socio = parametros.get('socio');
let semana = parametros.get('semana');

if (inputNombre && inputFecha) {
    socio = inputNombre.innerHTML;
    semana = inputFecha.innerHTML;

    console.log("socio: "+socio);
    console.log("semana: "+ semana);
}
else if (socio && semana) {
    inputNombre.innerHTML = socio;
    inputFecha.innerHTML = semana;
    
    console.log(socio);
    console.log(semana);
}

// Validar enviar
inputEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputNombre.value === "" || inputFecha.value === "" || inputCantidad.value === "") {
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

// metodo post  

