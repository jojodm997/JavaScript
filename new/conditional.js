let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

function browser {
 if (browser == "edge") {
    alert("You.ve got the Edge!");
 } else if (
    browser == "chrome" 
    browser == "firefox" ||
    browser == "Safari" ||
    browser == "opera"
 ) {
    alert("Okay we suporrt these browser to");
 } else {
    alert("We dont support that browser");
 }
}

let a = +prompt("a", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case "2,3":
    alert("2,3");
    break;
}

function getComputerChoice() {
   const random = Math.floor(Math.random() * 3)
  switch(random) {
    case 0:
      console.log("Rock");
      break;
    case 1:
      console.log("Scissors");
      break;
    case 2:
      console.log("Paper");
      break;
  }
  return;
}

console.log(getComputerChoice());

let ecma = prompt("What's the official name of javascript");
if (ecma == "ECMAScript") {
  alert("True");
} else {
  alert("Wrong");
}

let numb = prompt("Input a number");
if (numb > 0) {
  alert("1");
} else if (numb < 0) {
  alert("-1");
} else {
  alert("0");
}

let hour = 12;
let minute = 30;

if ((hour == 13 && minute == 31) || (hour == 12 && minute == 30)) {
  console.log(`The time is ${hour} and ${minute}`);
}

// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)

let result = a + b < 4 ? "Below" : "over";

let numb = Number(prompt("Type a number"));
switch (numb) {
  case 1:
    alert("Too small");
    break;
  case 2:
    alert("Exactly");
    break;
  case 3:
    alert("Too big");
    break;
  default:
    alert("IDK WHAT NUMBER IS !");
}
