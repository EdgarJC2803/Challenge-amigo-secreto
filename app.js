// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
alert("Bienvenido al Desafio del Amigo Secreto de Alura-Latam!");

// Variable global para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim(); // .trim() quita espacios en blanco
    
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
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    // Validar que haya al menos 2 personas para el sorteo
    if (amigos.length < 2) {
        alert("Deben haber al menos 2 participantes para el sorteo.");
        return;
    }
    
    // Copiar la lista para no modificar la original
    let amigosSorteados = [...amigos];
    
    // Algoritmo de Fisher-Yates para barajar
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    
    // Asignar parejas y mostrar el resultado
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        let regalaA = (i === amigos.length - 1) ? amigosSorteados[0] : amigosSorteados[i + 1];
        li.textContent = `${amigos[i]} le regala a ${regalaA}`;
        resultado.appendChild(li);
    }
}