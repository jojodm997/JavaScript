const button = document.querySelector("button");

function great() {
  const name = prompt("what is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you`;
}

button.addEventListener("click", great);
