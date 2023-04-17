const boton = document.getElementById("button");
const input = document.getElementById("input");
const lista = document.getElementById("lista");
const inputBorrar = document.getElementById("input2");
const botonBorrar = document.getElementById("boton");

const tareas = [];

const agregar = () => {
  let tarea = input.value.toLowerCase();
  tareas.push(tarea);
  lista.innerHTML = "";
  for (let i = 0; i < tareas.length; i++) {
    lista.innerHTML += `<li>${tareas[i]}</li>`;
  }
  input.value = "";
};

boton.addEventListener("click", agregar);

const borrarPalabra = () => {
  let borrar = inputBorrar.value.toLowerCase();
  for (let i = tareas.length - 1; i >= 0; i--) {
    if (tareas[i] === borrar) {
      tareas.splice(i, 1);
    }
  }
  lista.innerHTML = "";
  for (let i = 0; i < tareas.length; i++) {
    lista.innerHTML += `<li>${tareas[i]}</li>`;
  }
  inputBorrar.value = "";
};

botonBorrar.addEventListener("click", borrarPalabra);
