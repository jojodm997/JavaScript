let text = "Hello world";
let length = text.length; // Counting length
let chars = text[0]; // this returns p

let char = text.charAt(0); // at what this returns p

let charr = text.charCodeAt(0); // doesn't matter

const name = "fauzan";
let letter = name.at(2); // get third of name

const namee = "dwi";
let letterr = namee[2]; // get third

let yexy = "Apple, Banana, Kiwi";
let part = yexy.slice(7, 13); // This only show banana, you can do (-7, -13) or (7)

let str = "Apple, Banana, Kiwi";
let parts = str.substring(-4); // Same as slice but second parameter specifies the length of the extracted part.

let yaxy = text.toUpperCase();
let yaxxy = text.toLowerCase();

let ty = "Hello";
let yt = "World";
let yty = ty.concat("", yt);
// or
let text1 = "Hello" + "" + "World";

let tex = "   Hello world   ";
let texx = tex.trim(); // trim remove whitepsace from both side of string
let tyt = tex.trimStart(); // Remove from start only
let ere = text.trimEnd(); // Remove from end only

let tyrex = "5";
let padded = tyrex.padStart(4, "0");
let paddedd = tyrex.padEnd(4, "x"); // padStart() and padEnd() to support padding at the beginning and at the end of a string.

let das = "Hello world";
let dasd = das.repeat(2); // Method returns a string with a number of copies of a string

let dsad = "Please buy a coffee";
let newText = dsad.replace("Coffee", "Tea"); // replace coffee to tea
let newText1 = dsad.replaceAll("Coffee", "Gogo"); // Replace regukar expression (idk what that is)

text.split(","); // Split commas

document.getElementById("demo").innerHTML = newText;
