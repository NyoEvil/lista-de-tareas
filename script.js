let lista = document.querySelector('.lista');
let input_tarea = document.querySelector('#input-tarea');
let btn = document.querySelector('#btn-agregar');

let numero_tarea = 4;

function agregarTarea() {
    let valor_input = input_tarea.value;
    let contenido = document.createElement('a');
    let item = document.createElement('li');

    if (valor_input === '') {
        input_tarea.classList.add('error');
        input_tarea.setAttribute('placeholder', 'Ingrese una tarea valida');

        return;
    }

    contenido.innerHTML = `${numero_tarea}. ${valor_input}`;
    contenido.setAttribute("href", "#");
    item.appendChild(contenido);
    item.addEventListener('click', eliminarTarea);
    lista.appendChild(item);
    
    numero_tarea++;
    input_tarea.value = '';
};

function comprobarInput() {
    input_tarea.classList.remove('error');
    input_tarea.setAttribute('placeholder', 'Ingrese su tarea');
};

function eliminarTarea() {
    this.parentNode.removeChild(this);
};

btn.addEventListener('click', agregarTarea);

input_tarea.addEventListener('focus', comprobarInput);

for (let i=0 ; i<lista.children.length; i++) {
    lista.children[i].addEventListener('click', eliminarTarea);
}