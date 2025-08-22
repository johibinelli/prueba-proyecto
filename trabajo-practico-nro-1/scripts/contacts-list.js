const $contactsList = document.querySelector(".contact-list")

const contacts = [
  { name: "Vincent Porter", status: "offline", lastConnection: "7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "now" },
  { name: "Monica Ward", status: "online", lastConnection: "now" },
  { name: "Micaela Coleman", status: "offline", lastConnection: "7 mins ago" },
  { name: "Edu Bayon", status: "online", lastConnection: "now" },
  { name: "Johanna Binelli", status: "online", lastConnection: "now" },
];


contacts.forEach(function (contact) {
  let className = ""
  if (contact.status === "online") {
    className = "status-online"
  } else {
    className = "status-offline"
  }

  $contactsList.innerHTML += `
  <li class="contact">
  <img src="./assets/avatar.jpeg" alt="imagen de perfil">
  <div>
  <h4>${contact.name}</h4>
  <p class="${contact.status === "offline" ? "status-offline" : "status-online"}">${contact.lastConnection}</p>
  </div>
  </li>
  `

})



