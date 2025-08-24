// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
alert("Bienvenido al Desafio del Amigo Secreto de Alura-Latam!");

// Variable global para almacenar los nombres de los amigos
let amigos = [];

// Obtener el elemento de input para el nombre
const inputAmigo = document.getElementById('amigo');

// Agregar un 'listener' para el evento 'keypress'
inputAmigo.addEventListener('keypress', function(event) {
    // Verificar si la tecla presionada es 'Enter'
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

function agregarAmigo() {
    let nombre = inputAmigo.value.trim(); // .trim() quita espacios en blanco
    
    // Validación para no agregar nombres vacíos
    if (nombre === '') {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Validación para evitar nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    mostrarAmigos();
    limpiarCaja();
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de volver a llenarla
    amigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function limpiarCaja() {
    inputAmigo.value = '';
}

function sortearAmigo() {
    // Validar que haya al menos 1 persona para el sorteo
    if (amigos.length < 1) {
        alert("Debes agregar al menos un participante para el sorteo.");
        return;
    }
    
    let resultado = document.getElementById('ganador');
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    
    // Seleccionar un nombre aleatorio
    const nombreGanador = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Mostrar el resultado en el HTML
    let p = document.createElement('p');
    p.textContent = `¡El nombre seleccionado es: ${nombreGanador}!`;
    resultado.appendChild(p);
}