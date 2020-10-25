//pintar tareas
function pintarTareas(pListaTareas, pSeccion) {
    pListaTareas.forEach(tarea => {
        printTarea(tarea, pSeccion);
    });
}

// Creamos la sección donde se van a pintar las tareas en el HTML

function printTarea(pTarea, pSeccion) {
    let article = document.createElement('article');
    article.className = pTarea.prioridad;
    article.classList.add('articulo-tarea');
    let div = document.createElement('div');
    div.classList.add('titulo-tarea');
    let h3 = document.createElement('h3');
    let input = document.createElement('input');

    input.setAttribute("type", "button");
    input.value = "Eliminar";
    input.classList.add('btnEliminar');

    let h3Content = document.createTextNode(`${pTarea.nombre}`);
    h3.appendChild(h3Content);
    div.appendChild(h3);
    div.appendChild(input);
    article.appendChild(div);
    pSeccion.appendChild(article);
}

//añadir tareas 

function addTarea(pTarea, pPrioridad) {
    const newTarea = {
        idTarea: id,
        nombre: pTarea,
        prioridad: pPrioridad
    }
    //comprobar duplicados
    let existe = tareas.findIndex(tarea => {
        return tarea.nombre == pTarea && tarea.prioridad == pPrioridad;
    })

    if (existe == -1) {
        tareas.push(newTarea);
        pintarTareas(tareas, seccionTareas);
        id++;

    } else {
        alert('tarea repetida');
    }


}
