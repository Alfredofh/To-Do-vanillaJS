
const listTareas = new Array();
[
    {
        idTarea: 1,
        titulo: 'estudiar Javascript',
        prioridad: 'urgente'
    },
    {
        idTarea: 2,
        titulo: 'Sacar al perro',
        prioridad: 'diaria'
    },
    {
        idTarea: 3,
        titulo: 'pedir pizza',
        prioridad: 'mensual'
    }
];
//todo pintar tareas de muestra 

//Guardar LocalStorage
function guardarLocalStorage() {

    let tarea = {
        titulo: "tarea locastorage",
        prioridad: "mensual"
    }

    localStorage.setItem("tarea", JSON.stringify(tarea));
}

guardarLocalStorage();

//Obtener datos localStorage

function devuelveLocalStorage() {

    if (JSON.parse(localStorage.getItem("tarea"))) {
        let tarea = JSON.parse(localStorage.getItem("tarea")); //parse convierte el string en object 

        console.log(tarea);
    } else {
        console.log("No hay datos en el local storage");
    }
}


devuelveLocalStorage();

