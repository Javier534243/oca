let nomJugador;

let tablero = document.querySelector("#tablero");

let numero = document.querySelector("#numero");

let tableroAlternativo = document.querySelector("#tableroAlternativo");

let tablaMultiplicar = document.querySelector("#tablaMultiplicar");

const boton = document.querySelector("#boton");

console.log("Hola!");

const MAX_TIRADES = 5;

nomJugador = "Javier";

// MAX_TIRADES = 3

alert("Jugador: " + nomJugador);

alert(MAX_TIRADES);

function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

boton.addEventListener("click", () => {
  tablero.innerHTML = sumar(2, 3);
  tableroAlternativo.innerHTML = multiplicar(2, 3);
});

numero.addEventListener("change", () => {
  tablaMultiplicar.innerHTML = "";
  if (numero.value <= 0) {
    tablaMultiplicar.innerHTML = "El número debe ser mayor a 0";
  } else if (numero.value >= 11) {
    tablaMultiplicar.innerHTML = "El número debe ser menor o igual a 10";
  } else {
    for (let i = 0; i <= 10; i++) {
      tablaMultiplicar.innerHTML += "<p>" + numero.value + " x " + i + " = " + numero.value * i + "</p>";
    }
  }
});
