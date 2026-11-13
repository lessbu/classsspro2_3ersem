function jugarUnaVez() {

    let opciones = ["piedra", "papel", "tijera"];

    let jugador = prompt("Elige piedra, papel o tijera:").toLowerCase();

    let maquina = opciones[Math.floor(Math.random() * 3)];

    alert("La máquina eligió: " + maquina);

    if (jugador === maquina) {
        alert("¡Es un empate!");
    }
    else if (
        (jugador === "piedra" && maquina === "tijera") ||
        (jugador === "papel" && maquina === "piedra") ||
        (jugador === "tijera" && maquina === "papel")
    ) {
        alert("¡Ganaste!");
    }
    else {
        alert("¡Ganó la máquina!");
    }
}


function jugarTresRondas() {

    let opciones = ["piedra", "papel", "tijera"];
    let puntosJugador = 0;
    let puntosMaquina = 0;

    for (let i = 1; i <= 3; i++) {

        let jugador = prompt("Ronda " + i + "\nElige piedra, papel o tijera:").toLowerCase();

        let maquina = opciones[Math.floor(Math.random() * 3)];

        alert("La máquina eligió: " + maquina);

        if (jugador === maquina) {
            alert("Empate en esta ronda");
        }
        else if (
            (jugador === "piedra" && maquina === "tijera") ||
            (jugador === "papel" && maquina === "piedra") ||
            (jugador === "tijera" && maquina === "papel")
        ) {
            puntosJugador++;
            alert("¡Ganaste esta ronda!");
        }
        else {
            puntosMaquina++;
            alert("¡Ganó la máquina esta ronda!");
        }
    }

    alert("RESULTADOS FINALES\n" +
          "Jugador: " + puntosJugador + "\n" +
          "Máquina: " + puntosMaquina);

    if (puntosJugador > puntosMaquina) {
        alert("¡FELICIDADES, GANASTE EL JUEGO!");
    }
    else if (puntosMaquina > puntosJugador) {
        alert("¡LA MÁQUINA GANÓ EL JUEGO!");
    }
    else {
        alert("¡EL JUEGO TERMINÓ EN EMPATE!");
    }
}


// MENÚ PRINCIPAL

let opcion = prompt(
    "PIEDRA, PAPEL O TIJERA\n\n" +
    "1. Jugar una vez\n" +
    "2. Jugar tres rondas\n\n" +
    "Elige una opción:"
);

if (opcion === "1") {
    jugarUnaVez();
}
else if (opcion === "2") {
    jugarTresRondas();
}
else {
    alert("Opción no válida");
}