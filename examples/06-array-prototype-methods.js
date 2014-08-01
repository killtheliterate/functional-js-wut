// Array.prototype.map();
var squared = [1, 2, 3, 4, 5].map(function(el) {
  return Math.pow(el, 2);
}); // [1, 4, 9, 16, 25]

// Array.prototype.filter();
var even = [1, 2, 3, 4, 5].filter(function(el) {
  return el % 2 === 0;
}); // [2, 4]

// Array.prototype.reduce();
var sum = [1, 2, 3, 4, 5].reduce(function(memo, curr) {
  return memo + curr;
}); // 15
