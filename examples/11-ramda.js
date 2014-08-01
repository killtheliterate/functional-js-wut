var evens = ramda.filter(function(num){ return num % 2 === 0; });
evens([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
