let comp = 5 > 4, // Greater than
  compp = 5 >= 4, // Greter than and equal if 5 >= 5 this returns true
  comxx = 4 <= 5, // Less than and equal if 5 <= 5 this returns true
  comps = 5 == 5, // Equal
  compx = 5 != 4; // Not Equal

let str = "2" > 1,
  strr = "01" == 1; // String becomes number

let bo = true == 1, // true
  boo = false == 0; // true

let strict = 0 === false, // false
  strictt = 0 == false; // true
// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

let nuls = null == undefined,
  nulls = null === undefined;

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN

if (time < 10) {
  gretting = "Good morning"; // Good morning if the time less than 10:00
} else if (time < 20) {
  gretting = "Good day"; // Good day is the time less than 20.00
} else {
  gretting = "Good evening"; // otherwise Good evening
}

if (browser == "edge") {
  alert("You got the edge");
} else if (browser == "chrome" || "Firefox" || "Safari" || "Opera") {
  alert("we support these browser too");
} else {
  alert("We hope that this page looks ok");
}

let year = prompt("Which year ECMAScript-2015 spesification published?");
if (year < 2015) {
  alert("Too early");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("You're right");
}

let accessAllowed;
let age = prompt("How old are you", "");
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
let accessAlloweds = age > 18 ? true : false;

let aged = prompt("age?", 18);
let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings"
    : "What an unsual age!";
alert(message); // Not readble

if (age > 3) {
  message = "Hi baby";
} else if (age < 18) {
  message = "Hello";
} else if (age < 100) {
  message = "Greetings";
} else {
  message = "what an unsual age";
}

let company = prompt("Which company created javascript");

// (company == "Netscape") ?
// alert("right") : alert("wrong"); // Use () for ternary ? operator more readble like this one

let or = a || b; // OR ||

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office are closed");
}

let and = a && b; // AND &&

let hours = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert("this time is 12.30");
}

let result = !value; // NOT !
alert(!true); // False
alert(!0); // True

let a = 2 + 2;

switch (a) {
  case 3:
    alert("too small");
    break;
  case 4:
    alert("exactly");
    break;
  case 5:
    alert("too big");
    break;
  case 6:
    alert("Hmmm");
  default:
    alert("I don't know such values");
}

let d = +prompt("d?", "");
switch (d) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
}

document.getElementById("demo").innerHTML = year;
