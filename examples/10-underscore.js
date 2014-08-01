var numbers = _.filter([1, 'foo', 3, 'bar', 5, 6], _.isNumber); // [1, 3, 5, 6]

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) {
  return num % 2 == 0;
}); // [2, 4, 6]
