let nomJugador;

let tablero = document.querySelector("#tablero");

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

let inputNumero = document.querySelector("#numero");
console.log(inputNumero);
inputNumero.addEventListener("change", () => {
  console.log("Holaaaaaaaaaaaaaaaaaaaaaa");
  tablaMultiplicar.innerHTML = "";
  if (inputNumero.value <= 0) {
    tablaMultiplicar.innerHTML = "El número debe ser mayor a 0";
  } else if (inputNumero.value >= 11) {
    tablaMultiplicar.innerHTML = "El número debe ser menor o igual a 10";
  } else {
    for (let i = 0; i <= 10; i++) {
      tablaMultiplicar.innerHTML += "<p>" + inputNumero.value + " x " + i + " = " + inputNumero.value * i + "</p>";
    }
  }
});

let estado = ['Inicio', 'turnoA', 'turnoB', 'fin']

switch (estado[1]) {
  case 'Inicio':
    console.log('Estamos en el inicio');
    break;
  case 'turnoA':
    console.log('Estamos en el turno del jugador A')
    break;
  case 'turnoB':
    console.log('Estamos en el turno del jugador B')
    break
  case 'fin':
    console.log('Estamos en el final del juego')
}