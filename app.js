// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
alert("Hola, Bienvenido al Desafio del Amigo Secreto de Alura-Latam!");


let nombreSecreto = 0;
let intentos = 0;
let listaNombresSorteados = [];
let nombresMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let nombreDeAmigo = parseInt(document.getElementById('nombreDeAmigo').value);
    
    if (nombreDeAmigo === nombreSecreto) {
        asignarTextoElemento('p',`Acertaste el Nombre en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (nombreDeAmigo = nombreSecreto) {
            asignarTextoElemento('p','El Nombre no coincide');
        } else {
            asignarTextoElemento('p','El Nmbre no exixte');
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
    
    if (listaNombresSorteados(nombreGenerado)) {
        return generarNombreSecreto();
    } else {
        listaNombresSorteados.push(nombreGenerado);
        return nombreGenerado;
    }

    //Si ya sorteamos todos los nombres
    if (listaNombresSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los nombres posibles');
    } else {
        //Si el nombre generado está incluido en la lista 
        if (listaNombresSorteados.includes(nombreGenerado)) {
            return generarNombreSecreto();
        } else {
            listaNombresSorteados.push(nombreGenerado);
            return nombreGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('p','Juego del Amigo secreto de Alura-Latam!');
    nombreSecreto = generarNombreSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja(); 

    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();