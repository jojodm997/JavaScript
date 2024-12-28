const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

const button = document.querySelector("button");

function great() {
  const name = prompt("what is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you`;
}

button.addEventListener("click", great);

// Manipulated string
const myText = "I am a string";
const newString = myText.replace("String", "Sausage");
console.log(newString);

// Manipulated array
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join("");
console.log(madeAString);

// Generate randomm number
const myNumber = Math.random(); // It doesn't need any parameter

function favoriteAnimal(animal) {
  return animal + " is my favorite animal";
}

console.log(favoriteAnimal("Goat"));

favoriteAnimal(); // You can call function without "function"

const myArrayy = ["I", "love", "chocolate", "frogs"];
const madeAStrings = myArrayy.join("");
console.log(madeAStrings);

function hello(name = "ojan") {
  console.log(`Hi ${name}!`);
}

hello("Ari"); // Hello Ari
hello(); //Hello ojan

function logKey(event) {
  console.log(`You pressed "${event.key}"`);
}

textBox.addEventListener("keydown", logKey); // When the user presses a key the browser will call the function you provided

const originals = [1, 2, 3];
const doubled = originals.map((item) => item * 2);
console.log(doubled); // Double every value using original array

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}"`;
}); // Arrow function instead of function(event) you write (event) =>

document.getElementById("demo").innerHTML = madeAStrings;
