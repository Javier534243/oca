const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"]

let numero = Math.floor(Math.random() * 7)

let casilla = document.querySelector("#casella")

casilla.textContent = `Has caigut a: ${caselles[numero]}`

console.log(caselles[numero])

let pregunta = document.querySelector("#pregunta")

let btnRespuesta1 = document.querySelector("#btnRespuesta1")

let btnRespuesta2 = document.querySelector("#btnRespuesta2")

let btnRespuesta3 = document.querySelector("#btnRespuesta3")

const preguntas = [
    {pregunta: "¿Cuál es la capital de Francia?", respuesta: ["París","Madrid","Londres"], correcta: 0},
]

pregunta.textContent = preguntas[0].pregunta
btnRespuesta1.textContent = preguntas[0].respuesta[0]
btnRespuesta2.textContent = preguntas[0].respuesta[1]
btnRespuesta3.textContent = preguntas[0].respuesta[2]
