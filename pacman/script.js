const PantallaDesaparecera = document.querySelector("#PantallaQueDesaparecera");

const botonInciarEljuego = document.querySelector("#botonInciarEljuego");

const PantallaQueVaApararecer = document.querySelector(
  "#PantallaQueVaApararecer",
);

botonInciarEljuego.addEventListener("click", () => {
  PantallaDesaparecera.classList.remove("hidden");
  PantallaQueVaApararecer.classList.add("hidden");
});
