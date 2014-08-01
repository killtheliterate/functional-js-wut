 function stringCount(string) {
   return function(subString) {
     return string.match(new RegExp(subString, 'g')).length;
   };
 }

 var count = stringCount('sup sup sup');

 count('sup'); // 3
