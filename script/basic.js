let nama = "Fauzan"
let tahunLahir = 2006
let alamat = "Nusaherang"
let tahunSekarang = 2024

const message = "Hi nama saya" + ' ' + nama + ' ' + "Umur saya" + ' ' + (tahunSekarang - tahunLahir) + ' ' + "Alamat saya berada di" + ' ' + alamat
console.log(message)

if (7 + 7 == 14) {
  console.log("true");
} else {
  console.log("false");
}

let name = "John",
  admin = name;

alert(admin);

// or

// let name, admin;
// (name = "john"), (admin = name), alert(admin);

// example
let ourPlanet = "Earth";
let currentUserName = "John";

function checkAge() {
  console.log("Hello world");
}

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
console.log(part);

function favAnimal(animal) {
	return animal + " Is my favorite animal"
}

console.log(favAnimal('Cat'))


function showMessage(from, text = "Hoolaaaaa") {
  from = "*" + from + "*";
  alert(from + ":" + text);
}
let from = "Ann";
showMessage(from, "Hello");

alert(from);

function checkAge(age) {
  return age > 18 ? true : confirm("Did your parents allow you?");
}

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join();
console.log(madeAString);

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John
console.log(message);


console.log("Hello");
console.log(4 + 6 + 9) / 77;

let message = "Hi",
  age = 17,
  user = "John",
  $ = 1,
  _ = 2,
  apple = 3,
  APPLE = 4,
  hello = message;

alert(user);
alert(message);
alert($ + _ + apple - APPLE); // We can calculate different things

const birthday = "18.09.2004";
birthday = "18.23.2004"; // you cannot reassign variable in const

let name = "John",
  admin = name;

alert(admin);


let userName = 'John';

function showMessage() {
  let userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

//console.log( userName ); // John before the function call

showMessage();

console.log( userName ); // Bob, the value was modified by the function

function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  console.log("text");
}

showMessage(); // empty message

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2 )); // 3

let message = "Aku kaya";

function msg() {
	let aku = "Aku pintar";
	console.log(aku);
}


console.log(message);
msg();
console.log(aku);


let = checkAge(age); {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

function ask() {
  let age = prompt()
  if (age < 18) {
    alert("Hello")
  } else {
    alert("Greetings")
  }
}

ask();

console.log("Hello world")

console.log(23 + 97 + 31 + 31 + 43 + 21);
console.log((4 + 6 + 9) / 77);

let a = 10;

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

let x = 100 + 50;
// alert(x);

a = 4;
b = 50;
let j = a + b;
// alert(j)

let g = 312 + 312 * a;

document.getElementById("demo").innerHTML = g;
