const PantallaDesaparecera =  document.querySelector("#PantallaQueDesaparecera")

const botonInciarEljuego = documen.querySelector("#botonInciarEljuego")

const PantallaQueVaApararecer = document.querySelector("#PantallaQueVaApararecer")

botonInciarEljuego.addEventListener("click", () => {
    PantallaDesaparecera.classList.remove("hidden")
    PantallaQueVaApararecer.classList.add("hidden")
})