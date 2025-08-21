const $user = document.querySelector("#user-active")

console.log($user.textContent)

const lastname = "Barroumeres"

$user.innerHTML = `Johanna <strong class='title-name' id='user'>${lastname}</strong>
<button>Cerrar Sesión</button>`



