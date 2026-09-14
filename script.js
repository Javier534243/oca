let nomJugador

let tablero = document.querySelector("#tablero")

let tableroAlternativo = document.querySelector("#tableroAlternativo")

const boton = document.querySelector("#boton")

console.log("Hola!")

const MAX_TIRADES = 5

nomJugador = "Javier"

// MAX_TIRADES = 3

alert("Jugador: " + nomJugador)

alert(MAX_TIRADES)

function sumar(a, b) {
    return a + b
}

function multiplicar(a, b) {
    return a * b
}

boton.addEventListener("click", () => {
    tablero.innerHTML = sumar(2, 3);
    tableroAlternativo.innerHTML = multiplicar(2, 3)
});