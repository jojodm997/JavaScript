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
