const inputMessage = document.querySelector(".text")
const sendbutton = document.querySelector(".send")
const chatMessages = document.querySelector(".chat-messages")

sendbutton.addEventListener("click", sendMessage)


function sendMessage() {
  const message = inputMessage.value

  const divMessage = documentcreateElement("div")

  divMessage.classList.add("message-sent")

  const text = document.createElement("p")
  text.textContent = message

  divMessage.appendChild(text)
  chatMessages.appendChild(divMessage)

  inputMessage.value = ""
}