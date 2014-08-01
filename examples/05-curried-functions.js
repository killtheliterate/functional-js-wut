var foo = function (x) {
 return function (y) {
   return function (z) {
     return x + y + z;
   };
 };
};

var bar = foo(1); // partially applied function
bar(2)(3); // 6
