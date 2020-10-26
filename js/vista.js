
let anadirTarea = document.getElementById('add-tarea');
let prioridad = document.querySelector('#prioridad');
let btnGuardar = document.getElementById('guardar');
let seccionTareas = document.querySelector('#pintar-tarea');
let id = 1;
let filtroPrioridad = document.querySelector('#prioridad2');


//pintamos las tareas que vienen por defecto
pintarTareas(listTareas, seccionTareas);// no pinta

//guardar las tareas en el array
guardar.addEventListener('click', guardarTarea);

//buscar por prioridad 

filtroPrioridad.addEventListener('click', cogerPrioridad);








