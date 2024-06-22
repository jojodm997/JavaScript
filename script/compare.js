let comp = 5 > 4, // Greater than you can use >=
  compp = 4 < 5, // Less than tou can use <=
  comps = 5 == 5, // Equal
  compx = 5 != 4; // Not Equal

let str = "2" > 1,
  strr = "01" == 1; // String becomes number

let bo = true == 1, // true
  boo = false == 0; // true

let strict = 0 === false, // false
  strictt = 0 == false; // true
// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

let nuls = null == undefined,
  nulls = null === undefined;

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN

if (time < 10) {
  gretting = "Good morning"; // Good morning if the time less than 10:00
} else if (time < 20) {
  gretting = "Good day"; // Good day is the time less than 20.00
} else {
  greeting = "Good evening"; // otherwise Good evening
}

document.getElementById("demo").innerHTML = word;
