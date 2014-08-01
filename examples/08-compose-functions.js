 var compose = function(a, b) {
   return function (c) {
     return a(b(c));
   };
 };

 var addOne = function(number) { return number + 1 };
 var double = function(number) { return number * 2 };
 var addOneAndDouble = compose(double, addOne); // right to left

 addOneAndDouble(2); // 6
