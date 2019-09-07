/*Intermediate Algorithm Scripting: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*smallestCommons([1, 5]) should return a number.
Passed
smallestCommons([1, 5]) should return 60.
Passed
smallestCommons([5, 1]) should return 60.
Passed
smallestCommons([2, 10]) should return 2520.
Passed
smallestCommons([1, 13]) should return 360360.
Passed
smallestCommons([23, 18]) should return 6056820.*/

function smallestCommons(arr) {
 //sorting the array
arr.sort(function(a, b) {
    return b - a;
  });
  // Create new array and add all values from greatest to smallest
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  //Setting variables outside of loop
  var n = 1;
  let k = newArr[0];
  let quot =k * n;
  //do this forever until a value is returned
  do {
    //checking if the quotient is divisible by array items; resetting array when not divisible
    for (let j = 1; j < newArr.length; j++) {
      if (quot % newArr[j] !== 0) {
        n++;
        j = 0;
        quot = k * n;
      }
    }
    //returning value after escaping loop
    return quot;
  }  while(true);
}
console.log(smallestCommons([1,13]));
