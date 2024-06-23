let message = "Hello";
message = 1234567;

let number = 123;
number = 123.44;

let str = "Hello";
let hel = "Single quotes are ok too"; // this supposed to be single quotes but prettier change it to double quotes
let phrase = `can embed another ${str} ${1 + 2}`;
let joined = `${str} ${hel}`;

let greeting = "Hello";
let name = "fauzan";
// console.log(greeting + ", " + name)

let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1; // yes

let someUniverse = null; // Nothing

let atom = 100;
atom = undefined; // Undefined

typeof undefined; // Undefined
typeof "string"; // String
typeof 10n; // bigint
typeof true; // boolean
typeof Symbol("id"); // symbol
typeof Math; // Object
typeof alert;

const song = "DefJam Fight For NewYork";
const score = 9;
const higherScore = 10;
const output = `I like the song ${song}. i give it a sccore of ${
  (score / higherScore) * 100
}%.`;

const newline = `One day you will be 
a man that important to this word`; // Newline you can use \n in the middle if you want to

const goodQuotes = `Let the dogs bark, Sancho. It is a sign that we're “moving forward,” `; // question mark

document.getElementById("demo").innerHTML = goodQuotes;
