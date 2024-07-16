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
