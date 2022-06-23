const abrir = document.getElementById("botonAbrir");
const cerrar = document.getElementById("botonCerrar");
const cancelar = document.getElementById("botonCancelar");
const modal_container = document.getElementById("modal_container");
abrir.onclick = validarDetalle;
const fecha = document.getElementById("fecha");
const horario = document.getElementById("horario");
const personas = document.getElementById("personas");
const formulario = document.getElementById("formulario");
const form_modal = document.getElementById("formulario_modal");

function validarDetalle() {
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
    formulario.reset();
    return;
}

const nombre = document.getElementById("in1");
const apellido = document.getElementById("in2");
const telefono = document.getElementById("in3");
const mail = document.getElementById("in4");

function abrirNuevoFormulario() {
    // confirm("Hola mundo!");
    const detalles = document.getElementById("detalle");
    detalles.textContent = `${fecha.value}, ${horario.value}, ${personas.value} personas.`;
    modal_container.classList.add("show");
    cerrar.onclick = validarContacto;  
    cancelar.onclick = cerrarFormulario;
    return;
}

function validarContacto() {
    if (nombre.value == "") {
        alert("Debe ingresar su nombre.");
        return;
    }
    if (apellido.value == ""){
        alert("Debe ingresar su apellido");
        return;
    }
    if (telefono.value == "") {
        alert("Debe ingresar su numero de telefono.");
        return;
    }
    if (mail.value == "") {
        alert("Debe ingresar su mail.");
        return;
    }
    alert("Reserva realizada con exito. Te llegara un correo electronico con la confirmacion de la misma.")
    cerrarFormulario();
    form_modal.reset();
    return;
}

function cerrarFormulario() {
    modal_container.classList.remove("show");
}
