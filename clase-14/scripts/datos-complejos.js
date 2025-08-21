// datos primitivos
// unidades singulares de informacion y son inmutables

const name = "Gabriel"
const age = 31
const isAdult = false

// datos complejos -> estructura de datos
// datos colectivos -> conjunto de datos
// son mutables


// un array sirve para listar elementos
const listOfContacts = ["Luciana", "Ana", "Federico"] //esp argentina //array
const contactOne = {} // object

listOfContacts.push("johanna")

// un object sirve para describir un elemento
// un objeto tiene propiedades y metodos (funciones)

// const contact = {
//  name: "Gabriel"
//  state: true,
//  lastConection: "left 7 mins ago"
//  greet: function () {

//}



// ------------------------


const contacts = [
  { name: "Vincent Porter", status: "offline", lastConnection: "7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "now" },
  { name: "Monica Ward", status: "online", lastConnection: "now" }
];

// callback -> una funcion que se ejecuta despues de que pasa algo
// el callback se ejecuta en cada iteracion
// EL ARRAY SIEMPRE TENDRA UN NOMBRE EN PLURAL Y EL ELEMENTO QUE ITERA EN SINGULAR

contacts.forEach(function (contact) {
  console.log("vuelta nueva")
  console.log(contact)
  console.log(contact.name)

})

// voy a ejecutar un bucle tantas veces como elementos haya en el array contacts
// en cada elemento ejecutare un console.log que dice "hola"