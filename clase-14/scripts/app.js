const $inputMessage = document.querySelector(".text")
const $sendButton = document.querySelector(".send")
const $chatMessages = document.querySelector(".chat-messages")

$sendButton.addEventListener("click", sendMessage)


function sendMessage() {
  const message = $inputMessage.value

  $chatMessages.innerHTML += `
  <div class="message-sent"
  <p>${message}</p>
  <p class="timestamp">${new Date().toLocaleTimeString()}</p> 
  </div>
  `

  $inputMessage.value = ""

  // asincrono
  setTimeout(function () {
    $chatMessages.innerHTML += `
  <div class="message-received"
  <p>mensaje recibido 👍</p>
  <p class="timestamp">${new Date().toLocaleTimeString()}</p> 
  </div>
  `

  }, 5000)


}