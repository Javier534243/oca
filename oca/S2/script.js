console.log('Estamos en el turno del jugador B')

let container = document.querySelector("#container")

let lanzarDado = document.querySelector("#lanzarDado")

container.textContent = "Hola, soy el contenedor"

container.classList.add("rojo")


container.addEventListener("click", () => {
    container.classList.toggle("azul")
})

let jugador

lanzarDado.addEventListener("click", () => {
    container.textContent = ''
    let resultado = Math.floor(Math.random() * 6) + 1
    if (jugador === "jugadorA") {
        jugador = "jugadorB"
        container.textContent = `Jugador A ha lanzado un ${resultado}`
    } else {
        jugador = "jugadorA"
        container.textContent = `Jugador B ha lanzado un ${resultado}`
    }
})

let agregarJugador = document.querySelector("#agregarJugador")

let jugadoresContainer = document.querySelector("#jugadoresContainer")

let nombreJugador = document.querySelector("#nombreJugador")

agregarJugador.addEventListener("click", (e) => {
    e.preventDefault()
    jugadoresContainer.textContent = `Jugador 1: ${nombreJugador.value}`
})