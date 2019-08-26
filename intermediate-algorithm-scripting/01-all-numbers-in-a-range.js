/*Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*sumAll([1, 4]) should return a number.
Passed
sumAll([1, 4]) should return 10.
Passed
sumAll([4, 1]) should return 10.
Passed
sumAll([5, 10]) should return 45.
Passed
sumAll([10, 5]) should return 45.
Passed*/

function sumAll(arr) {
  arr.sort(function(a, b){return a-b});
  let counter = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
  counter += i
  console.log(counter);
  }
  return counter;
}

sumAll([5, 10]);
