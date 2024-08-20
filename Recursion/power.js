//y represents the number and n is the power the x value is raised
function powRise(y, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= y;
  }
  return result;
}

//test numbers with their power
console.log(powRise(14, 2));
console.log(powRise(8, 3));
console.log(powRise(4, 6));
