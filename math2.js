let x = "100",
  y = "200";

let z = y + x; // this doesn't work why? because of the +, the other will work - * /

let p = 100 / "popo"; // It'wasnt accepted in javascriptaka NaN - Not a Number

let o = 1 / 0; // Infinity

let d = 0xff; // Hexadecimal

let u = 123;
let t = new Number(123); // Number as an object
// == are equal
// === are not equal

// document.getElementById("demo").innerHTML = u == t;

let n = (4 + 6 + 9) / 77;

document.getElementById("demo").innerHTML = n;
