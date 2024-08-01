function capitalize (text){
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const result = capitalize("HELLO WORLD");
console.log(result)
