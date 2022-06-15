let boton = document.getElementById("boton");
boton.onclick = validarFormulario;

function validarFormulario() {
    const fecha = document.getElementById("fecha");
    const horario = document.getElementById("horario");
    const personas = document.getElementById("personas");
    if (fecha.value == "") {
        alert("Debe ingresar una fecha.");
        return;
    }
    if (horario.value == ""){
        alert("Debe ingresar el horario");
        return;
    }
    if (personas.value == "") {
        alert("Debe ingresar la cantidad de personas");
        return;
    }
    abrirNuevoFormulario();
    return;
}

function abrirNuevoFormulario() {
    confirm("Hola mundo!");
    return;
}