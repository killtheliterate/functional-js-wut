// Code examples borrowed from 
// http://stephen-young.me.uk/2013/01/20/functional-programming-with-javascript.html

// A stateless loop
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
