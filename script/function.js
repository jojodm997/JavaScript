function nameString(name) {
	var b = "Sucks";
	var result = name + ' ' + b;
	return result;
}

console.log(nameString("Fauzan"));

function ask(question, yes, no) {
  if (confirm(question)) yes ();
  else no();
}

const a = 5;
const b = 10;

function add() {
  return b;
}

console.log(add());

ask(
  "Do you agree?",
  () => alert("You agreed"),
  () => alert("You canceled the execution")
);

let asked = prompt("Are you javascript enjoyer")

function ask() {
  if (asked == "yes") {
    alert("You're right");
  } else {
    alert("No")
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i);
  }
}

function add7 (num, sev = 7) {
  return num + sev;

}

const result = add7(10);
console.log(result);

function multiply (num1, num2){
  return num1 * num2;
}

const results = multiply(2,2);
console.log(results)

function capitalize (text){
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const resultt = capitalize("HELLO WORLD");
console.log(resultt)

function lastLetter (text) {
  return text.charAt(text.length - 1);
}

const resulttt = lastLetter("Hello world");
console.log(resulttt);

function checkAge(age) {
  return age > 18 ? true : confirm('Did your parents allow you in?');
}

function checkAgee(agee) {
  return agee > 18 ||  confirm("Did your parents allow you in ?");
}

function ask() {
  let age = prompt("What age are you?", "18");
  age = parseInt(age, 10); // Convert the string to a number

  if (age < 18) {
    alert("Hello");
  } else {
    alert("Greetings");
  }
}

ask();


let ask = prompt("How old are you")

function asked () {
  if (ask >= 18) {
    alert("Come in");
  } else {
    alert("Get out");
  }
}

function ask() {
  let age = prompt(Number("What age are you", 18));

  if (age < 18) {
    alert("Hello");
  } else {
    alert("Greetings");
  }
}

ask();


function helloWorld(){
  console.log("Hello world");
}

console.log(helloWorld());

function min(a, b) {
  console.log(a + b);
}

min(5, 2) == 2;
min(3,-1) == -1;
min(1, 1) == 1;

function min(a,b) {
  if(a <  b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}

const str1 = "Hello";
const str2 = "World";
const message = str1.push(str2); // .push is a array method not string method

// so it doesn't work

const birthDay = 2006;
const thisYear = 2024;
const firstName = "Fauzan";
const lastName = "Mulyono";

const greetings = "Hello My name Is" + ' ' + firstName + ' ' + lastName + ' ' + "and I am" +  ' ' + (thisYear - birthDay) + ' ' + "Years old";

console.log(greetings)
