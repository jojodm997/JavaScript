let name = "John",
  admin = name;

alert(admin);

// or

// let name, admin;
// (name = "john"), (admin = name), alert(admin);

// example
let ourPlanet = "Earth";
let currentUserName = "John";

// Manipulated string
const myText = "I am a string";
const newString = myText.replace("String", "Sausage");
console.log(newString);

// Manipulated array
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join("");
console.log(madeAString);

// Generate randomm number
const myNumber = Math.random();
document.getElementById("demo").innerHTML = myNumber;
