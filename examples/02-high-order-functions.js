// Uses functions as its params, and returns a function
var bar = function(func) {
  return function() {
    return func();
  };
};
