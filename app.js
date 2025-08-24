// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
alert("Bienvenido al Desafio del Amigo Secreto de Alura-Latam!");

// Asegúrate de que el botón de verificación llame a verificarIntento()
// Por ejemplo, en tu HTML: <button onclick="verificarIntento()">Verificar</button>

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
    let nombreDeAmigo = document.getElementById('amigo').value;
    
    if (nombreDeAmigo === nombreSecreto) {
        asignarTextoElemento('#mensaje',`Acertaste el Nombre en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        const reiniciarBtn = document.getElementById('reiniciar');
        if (reiniciarBtn) {
            reiniciarBtn.removeAttribute('disabled');
        }
    } else {
        // El usuario no acertó.
        if (agregarAmigo.includes(nombreDeAmigo)) {
            asignarTextoElemento('#mensaje','El Nombre no coincide');
        } else {
            asignarTextoElemento('#mensaje','El Nombre no existe');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    return;
}

function generarNombreSecreto() {
    // Si ya sorteamos todos los nombres
    if (listaNombresSorteados.length === agregarAmigo.length) {
        asignarTextoElemento('#mensaje','Ya se sortearon todos los nombres posibles');
        return '';
    }
    let nombreGenerado;
    do {
        nombreGenerado = agregarAmigo[Math.floor(Math.random() * agregarAmigo.length)];
    } while (listaNombresSorteados.includes(nombreGenerado));

    listaNombresSorteados.push(nombreGenerado);
    return nombreGenerado;
}
    const reiniciarBtn = document.getElementById('reiniciar');
    if (reiniciarBtn) {
        reiniciarBtn.setAttribute('disabled','true');
    }
    document.getElementById('resultado').innerHTML = '';
    // Si tienes un botón de reinicio, asegúrate de que exista en el HTML antes de manipularlo.
    // document.getElementById('reiniciar')?.setAttribute('disabled','true');
    
    nombreSecreto = generarNombreSecreto();

condicionesIniciales();