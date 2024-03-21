
//validar nombre de socio
let inputNombre = document.querySelector("#Nombre");
inputNombre.addEventListener("input", (event) => {
    if (event.target.value.length > 0) {
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    } else {
        inputNombre.classList.add("is-invalid");
        inputNombre.classList.remove("is-valid");
    }
});

//validar fecha
let inputFecha = document.querySelector("#fecha");

inputFecha.addEventListener("input", (event) => {
    if (event.target.value.length > 0) {
        inputFecha.classList.add("is-valid");
        inputFecha.classList.remove("is-invalid");
    } else {
        inputFecha.classList.add("is-invalid");
        inputFecha.classList.remove("is-valid");
    }
})



//validar cantidad
let inputCantidad = document.querySelector("#cantidad");
inputCantidad.addEventListener("input", (event) => {
    if (event.target.value.length > 0) {
        inputCantidad.classList.add("is-valid");
        inputCantidad.classList.remove("is-invalid");
    } else {
        inputCantidad.classList.add("is-invalid");
        inputCantidad.classList.remove("is-valid");
    }
})

//seleccionar tipo de produccion
let selectTipoU = document.querySelector("#selector");
  selectTipoU.addEventListener("change", (event) => {
            const selectedValue = event.target.value;
            console.log("Seleccionaste: " + selectedValue);
        });

//validar enviar
let inputEnviar = document.querySelector("#enviar");
inputEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputNombre.classList.contains("is-valid") && inputFecha.classList.contains("is-valid")&& inputCantidad.classList.contains("is-valid") && selectTipoU.value != "") {
        alert("enviado");
        return true;
    }
    //reiniciar campos
    inputNombre.value = "";
    inputFecha.value = "";
    inputCantidad.value = "";
    selectTipoU.value = "";
    })

// Guardar datos en localStorage
localStorage.setItem('nombre', inputNombre.value);
localStorage.setItem('fecha', inputFecha.value);
localStorage.setItem('cantidad', inputCantidad.value);
localStorage.setItem('selector', selectTipoU.value);

// Recuperar datos de localStorage
let nombreGuardado = localStorage.getItem('nombre');
let fechaGuardada = localStorage.getItem('fecha');
let cantidadGuardada = localStorage.getItem('cantidad');
let selectTipo = localStorage.getItem('selector');

// Verificar si los datos están guardados
if (nombreGuardado) {
    console.log('Nombre guardado: ' + nombreGuardado);
}

if (fechaGuardada) {
    console.log('Fecha guardada: ' + fechaGuardada);
}



if (cantidadGuardada) {
    console.log('Cantidad guardada: ' + cantidadGuardada + selectTipoU.value);
}


// No es necesario acceder a .value ya que los valores ya están guardados en localStorage
console.log(nombreGuardado);
console.log(fechaGuardada);
console.log(cantidadGuardada + selectTipoU.value);
