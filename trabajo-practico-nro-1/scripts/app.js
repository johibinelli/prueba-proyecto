const $inputMessage = document.querySelector(".text")
const $sendButton = document.querySelector(".send")
const $chatMessages = document.querySelector(".chat-messages")

$sendButton.addEventListener("click", sendMessage)


function sendMessage() {
  const message = $inputMessage.value

  const $divMessage = document.createElement("div")

  $divMessage.classList.add("message-sent")

  const $text = document.createElement("p")
  $text.textContent = message

  $divMessage.appendChild($text)

  //timestamp

  const $timestamp = document.createElement("p")
  $timestamp.classList.add("timestamp")
  $timestamp.textContent = new Date().toLocaleTimeString()

  $divMessage.appendChild($timestamp)

  $chatMessages.appendChild($divMessage)

  $inputMessage.value = ""

  // asincrono
  setTimeout(function () {
    const $divMessage = document.createElement("div")
    $divMessage.classList.add("message-received")

    const $response = document.createElement("p")
    $response.textContent = `Recibido ${message}`

    $divMessage.appendChild($response)
    $chatMessages.appendChild($divMessage)

  }, 5000)


}



