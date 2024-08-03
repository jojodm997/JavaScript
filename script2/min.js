function min(a,b) {
  console.log(a + b);
}

min(5, 2) == 2;
min(3,-1) == -1;
min(1, 1) == 1;

function min(a,b) {
  if(a <  b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}
