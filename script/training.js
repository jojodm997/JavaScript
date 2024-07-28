let names = prompt("What is the official name of JavaScript");

if (names == "ecmascript") {
  alert("right");
} else {
  alert("You dont know ecmascript?");
}

let numbers = prompt("Get a number", 0);
if (numbers > 0) {
  alert(1);
} else if (numbers < 0) {
  alert(-1);
} else {
  alert(0);
}

let result = a + b < 4 ? "Below" : "Over"; // Using ?

let results; // Using if else
if (a + b < 4) {
  results = "Below";
} else {
  results = "Over";
}

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Grettings"
    : login == ""
    ? "No login"
    : "";
