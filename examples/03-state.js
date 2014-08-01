// Code examples borrowed from 
// http://stephen-young.me.uk/2013/01/20/functional-programming-with-javascript.html

// Stateful
var number = 1;
var increment = function() {
    return number += 1;
};
increment();

// Stateless
var number = 1;
var increment = function(n) {
  return n + 1;
};
increment(number);

// Stateful
var loop = function() {
  for (var x = 0; x < 10; x += 1) {
    console.log(x);
  }
};
loop();

// Stateless
var loop = function(n) {
  if (n > 9) {
    console.log(n);
    return;
  } else {
    console.log(n);
    loop(n + 1);
  }
};
loop(0);
