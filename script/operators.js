let x = "100",
  y = "200";

let z = y + x; // this doesn't work why? because of the +, the other will work - * /

let p = 100 / "popo"; // It'wasnt accepted in javascript aka NaN - Not a Number

let o = 1 / 0; // Infinity

let d = 0xff; // Hexadecimal

let u = 123;
let t = new Number(123); // Number as an object
// == are equal
// === are not equal

// document.getElementById("demo").innerHTML = u == t;

let n = (4 + 6 + 9) / 77;

let apples = "7";
let orange = "5";
alert(+apples + +orange); // 5, Why 5 because binary numbers(+) convert string into number

let a, b, c;
a = b = c = 2 + 2;
alert(a); // 4
alert(b); // 4
alert(c); // 4
// Chaining asigment right to left 2 + 2, c,b,a

// or

c = 2 + 2;
b = c;
a = c; // More readable

let g = 2;
g += 5; // now n = 7 (same as g = n + 5)
g += 2; // now n = 14 (same as g = n * 2)

let counter = 2;
counter++;
// or (it has difference)
++counter;
alert(counter);

let count = 2;
counter--;
alert(count);

let i = (1 + 2, 3 + 4);
alert(i); // 7 (the result of 3+4)

let counterr = 1;
let koko = ++counterr;

let counterrr = 1;
let dod = 2 * counterrr++; // 2

let counterrrr = 1;
let dodd = 2 * ++counterrrr; // 4

let counters = 1;
alert(2 * counters);
counters++; // "more readble" "one style, one action"

document.getElementById("demo").innerHTML = dod;
