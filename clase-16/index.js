
// < 10 = frio
// entre 10 y 25 = templado
// > 45 caluroso


// function clasificarTemperatura(temperatura) {
//   if (temperatura < 10) {
//     console.log("frio")
//   } else if (temperatura >= 10 && temperatura <= 25) {
//     console.log("templado")
//   } else if (temperatura >= 25 && temperatura <= 45) {
//     console.log("caluroso")
//   } else {
//     console.log("temperatura incorrecta")
//   }
// } let temp = 45

// clasificarTemperatura(temp)

// Verificar Par e Impar

// Solución literal
// Mostrar si un número es Par o Impar

// Solución algoritmica
// 1- Declarar la funcion -> verificarparOImpar()
// 2- Declarar el nombre del parámetro -> número
// 3-Declara el condicional
// 4- Mostrar el mensaje referente

// Cuanto me resta al dividir X número por 2 ? 2 / 2 = 0, pero 3 / 2 = 1 me queda, 12 / 2 = 6 caramelos para cada 1 de los 2

function verificarParOImpar(numero) {
  //   if (numero % 2 === 0) {
  //     console.log("es par")
  //   } else {
  //     console.log("es impar")
  //   }

  // Operador ternario ? , es la pregunta : o es la segunda opción. Para opción binaria ideal.

  numero % 2 === 0 ? console.log("es par") : console.log("es impar")
}

verificarParOImpar(6)

// Determinar el mayor de dos numeros. Se definen los parametros. Se pasan los argumentos.

function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log("El número uno es mayor")
  } else if (numero1 < numero2) {
    console.log("el número dos es mayor")
  } else {
    console.log("los números son iguales")
  }
}
compararNumeros(2, 2)

// Validar contraseña. Escribe una función que reciba una contraseña y valide si es correcta. Elige una palabra como contaraseña valida (abracadabra)



// function validarContrasenia(contrasenia) {
//   const contraseniaSecreta = "abracadabra"
//   if (contrasenia === contraseniaSecreta) {
//     console.log("usuario valido")
//   } else ("usuario no validado")
// }

// validarContrasenia("abracadabra")

// Verificar acceso a descuento
// > 60 o < 12 años
// || o

function verificarDescuento(edad) {
  edad > 60 || < 12 ? console.log("Tienes descuento") : console.log("No tienes descuento")
}
verificarDescuento("30")