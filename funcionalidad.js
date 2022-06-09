
function cargarFormulario() {
    let boton = document.getElementById("boton");
    boton.onclick = validarFormulario;
}

function validarFormulario() {
    let fecha = document.getElementById("fecha");
    if (fecha.value == null) {
        alert("Debe ingresar una fecha.")
    }
}