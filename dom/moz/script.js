const ul = document.querySelector("ul");

const input = document.getElementById("item");
input.value = '';
input.focus();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const inputValue = input.value;

const li = document.createElement("li");

const span = document.createElement("span");
span.textContent = inputValue;
li.appendChild(span);

const buttond = document.createElement("button");
buttond.textContent = "Delete";
  buttond.addEventListener("click", () => {
    li.remove();
  });
li.appendChild(buttond);

ul.appendChild(li);
});

