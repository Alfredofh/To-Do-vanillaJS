
let anadirTarea = document.getElementById('add-tarea');
let prioridad = document.querySelector('#prioridad');
let btnGuardar = document.getElementById('guardar');
let seccionTareas = document.querySelector('#pintar-tarea');
let id = 1;

//pintamos las tareas que vienen por defecto
pintarTareas(tareas, seccionTareas);


guardar.addEventListener('click', guardarTarea);

function guardarTarea(event) {
    event.preventDefault();

    let inputTarea = anadirTarea.value.trim();

    let selectPrioridad = prioridad.value.trim();

    if (inputTarea != "" && selectPrioridad != "-1") {

        addTarea(inputTarea, selectPrioridad);
    } else {

        alert('Rellena todos los campos');
    }

}







