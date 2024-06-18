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

document.getElementById("demo").innerHTML = yaxy;
