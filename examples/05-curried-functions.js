// Partial application with Function.prototype.bind()
// [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
// 
// You can use Function.prototype.bind() in a similar way to a curried function 
// that you'd like to partially apply. It won't yield a value until all 
// arguments are assigned.
var foo = function(a, b, c) {
  return a + b + c;
};

var bar = foo.bind(null, 1);
var baz = bar(1, 1);
console.log(baz);

var anotherBar = foo.bind(null, 1);
var anotherBaz = anotherBar.bind(null, 1);
var anotherFin = anotherBaz(1);
console.log(anotherFin);
