let message =
  login == "Emplyee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

if (browser == "edge") {
  alert("You.ve got the Edge!");
} else if (
  browser == "chrome" ||
  browser == "firefox" ||
  browser == "Safari" ||
  browser == "opera"
) {
  alert("Okay we suporrt these browser to");
} else {
  alert("We dont support that browser");
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
