function ask() {
  let age = prompt(Number("What age are you", 18));

  if (age < 18) {
    alert("Hello");
  } else {
    alert("Greetings");
  }
}

ask();
