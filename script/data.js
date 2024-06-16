let message = "Hello";
message = 1234567;

let number = 123;
number = 123.44;

let str = "Hello";
let hel = "Single quotes are ok too"; // this supposed to be single quotes but prettier change it to double quotes
let phrase = `can embed another ${str} ${1 + 2}`;
let joined = `${str} ${hel}`;

let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1; // yes

let universe = null; // Nothing

let atom = 100;
atom = undefined; // Undefined

typeof undefined; // Undefined
typeof "string"; // String
typeof 10n; // bigint
typeof true; // boolean
typeof Symbol("id"); // symbol
typeof Math; // Object
typeof alert;

let name = "fauzan";

document.getElementById("demo").innerHTML = joined;
