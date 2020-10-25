//pintar tareas
function pintarTareas(pListaTareas, pSeccion) {
    if (pListaTareas.lenght != 0) {
        pSeccion.innerHTML = "";

        pListaTareas.forEach(tarea => {
            printTarea(tarea, pSeccion);
        });
    } else {
        pSeccion.innerHTML = '<h1>NO HAY COINCIDENCIAS</h1>';
    }
}

// Creamos la sección donde se van a pintar las tareas en el HTML

function printTarea(pTarea, pSeccion) {
    let article = document.createElement('article');
    article.className = pTarea.prioridad;
    article.classList.add('articulo-tarea');
    let div = document.createElement('div');
    div.classList.add('titulo-tarea');
    let h3 = document.createElement('h3');
    //let input = document.createElement('input');

    /* input.setAttribute("type", "button");
    input.value = "Eliminar";
    input.classList.add('btnEliminar'); */

    let h3Content = document.createTextNode(`${pTarea.nombre}`);
    h3.appendChild(h3Content);
    div.appendChild(h3);
    // div.appendChild(input);
    article.appendChild(div);
    pSeccion.appendChild(article);

    let a = document.createElement('a');
    a.addEventListener('click', eliminarElemento);
    a.innerText = "Eliminar";
    a.href = "#";
    a.dataset.id = id;
    article.appendChild(a);
}

function eliminarElemento(event) {
    event.preventDefault();
    let liquequieroborrar = event.target.parentNode;
    liquequieroborrar.parentNode.removeChild(liquequieroborrar);
    let idBorrar = event.target.dataset.id;
    let posicion = listTareas.findIndex(contacto => contacto.id == idBorrar);
    listTareas.splice(posicion, id);
}


//añadir tareas 

function addTarea(pTarea, pPrioridad) {
    const newTarea = {
        id: id,
        nombre: pTarea,
        prioridad: pPrioridad
    }
    //comprobar duplicados
    let existe = listTareas.findIndex(tarea => {
        return tarea.nombre == pTarea && tarea.prioridad == pPrioridad;
    })

    if (existe == -1) {
        listTareas.push(newTarea);
        pintarTareas(listTareas, seccionTareas);
        id++;

    } else {
        alert('tarea repetida');
    }


}
//Guardar tareas

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

