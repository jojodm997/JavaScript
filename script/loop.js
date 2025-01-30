let i = 0;
while(i < 3) { // 0 1 2 (counts from zero)
  console.log(i);
  i++;
} 

let a = 0;
do {
  console.log(a);
  i++;
} while (i < 3); // 0 1 2

for (let i = 0; i < 3; i++) // 0 1 2 let are inline variable
console.log(i);

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if(!value) break; // if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely console.log
  sum += value;
}
console.log('Sum: ' + sum);

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
function toUpper(string) {
  return string.toUpperCase();
}
const upperCats = cats.map(toUpper);// all of them will be uppercase LEOPARD AND SO ON

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered); // ["Leopard", "Lion"]

for (const cat of cats) {
  console.log(cat); // will print Leopard, Serval and so on
}

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  console.log(i); // 1, then 3, 5, 7, 9
}

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 4));

let o = 0;
while (i < 3) {
  console.log(`number ${o}!`);
  o++;
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}

for (let i = 0; i < 100; i++) {
  let io = prompt("Input a number");
  if (io > 100) break;
  console.log(io);
}

for (let i = 2; i <= 10; i++) {
  if(i % 2 == 0) {
    console.log(i);
  } 
}
