// function
// forEach

// palabra reservada | condicion | scope -> zona privada

const name = "johanna"

if (name.includes("b")) {
  console.log("contiene!")
} else {
  console.log("no contiene")
}

// const ladoDeLaMoneda = prompt("elige: cara o seca")

//const opcionHumano = prompt("Elige: cara o seca")
//const opcionesPc = ["cara", "seca"]
//const opcionPc = opcionesPc[Math.floor(Math.random() * opcionesPc.length)]

//if (opcionHumano === opcionPc) {
//  console.log("ganaste")
//} else {
//  console.log("perdiste")
//}

//const color = prompt("¿De qué color está el semaforo?")

//if (color === "verde") {
//  console.log("puedes pasar")
//} else if (color === "rojo") {
//  console.log("no puedes pasar")
//} else if (color === "amarillo") {
// console.log("ten cuidado...")
//} else {
//  console.log("no es un color valido")
//}

//operadores >= gugleano

// const nota = 7

// if (nota === 10) {
//   console.log("excelente")
// } else if (nota >= 8 && nota < 10) {
//   console.log("muy bueno")
// } else if (nota >= 6 && nota < 8) {
//   console.log("aprobado")
// } else if (nota < 6 && nota >= 0) {
//   console.log("desaprobado")
// } else {
//   console.log("no existe")
// }

// operador ternario
// const carnet = true

// if (carnet === true) {
//   console.log("podes conducir")
// } else {
//   console.log("no podes conducir")
// }
const carnet = true

carnet === true ? console.log("puedes conducir") : "no puedes conducir"