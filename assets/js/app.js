function jugarCachipun(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const opcionComputador = opciones[Math.floor(Math.random() * 3)];

    console.log(`Tú elegiste: ${opcionUsuario}`);
    console.log(`El computador eligió: ${opcionComputador}`);

    if (opcionUsuario === opcionComputador) {
        console.log('¡Es un empate!');
    } else if (
        (opcionUsuario === 'piedra' && opcionComputador === 'tijeras') ||
        (opcionUsuario === 'papel' && opcionComputador === 'piedra') ||
        (opcionUsuario === 'tijeras' && opcionComputador === 'papel')
    ) {
        console.log('¡Felicidades ganaste!');
    } else {
        console.log('¡Lastima, perdiste!');
    }
}

const opcionUsuario = prompt('Elige piedra, papel o tijeras:').toLowerCase();
jugarCachipun(opcionUsuario);
