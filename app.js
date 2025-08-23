// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
alert("Bienvenido al Desafio del Amigo Secreto de Alura-Latam!");

let agregarAmigo = 'Fernando, Mauricio, Juan, Maria, Ana, Carlos, Lucia, Pedro, Sofia, Diego, Laura, Andres, Elena, Javier, Paula, Roberto, Teresa, Victor, Sara, Gonzalo, Marta, Luis'.split(', ');
let nombreSecreto = '';
let intentos = 0;
let listaNombresSorteados = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
}
    let nombreDeAmigo = document.getElementById('nombreDeAmigo').value;
    
    if (nombreDeAmigo === nombreSecreto) {
        asignarTextoElemento('p',`Acertaste el Nombre en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (agregarAmigo.includes(nombreDeAmigo)) {
            asignarTextoElemento('p','El Nombre no coincide');
        } else {
            asignarTextoElemento('p','El Nombre no existe');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#nombreDeAmigo').value = '';
}

function generarNombreSecreto() {
    // Generar un nombre aleatorio de la lista de amigos
    let nombreGenerado = agregarAmigo[Math.floor(Math.random() * agregarAmigo.length)];

    // Si ya sorteamos todos los nombres
    if (listaNombresSorteados.length === agregarAmigo.length) {
        asignarTextoElemento('p','Ya se sortearon todos los nombres posibles');
        return '';
    }

    // Si el nombre generado está incluido en la lista
    if (listaNombresSorteados.includes(nombreGenerado)) {
        return generarNombreSecreto();
    } else {
        listaNombresSorteados.push(nombreGenerado);
        return nombreGenerado;
    }
}

function condicionesIniciales() {
    intentos = 1;
    nombreSecreto = generarNombreSecreto();
    asignarTextoElemento('p', 'Ingresa el nombre de tu amigo secreto');
    document.getElementById('nombreDeAmigo').value = '';
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

condicionesIniciales();