/*Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
sumFibs(1) should return a number.
Passed
sumFibs(1000) should return 1785.
Passed
sumFibs(4000000) should return 4613732.
Passed
sumFibs(4) should return 5.
Passed
sumFibs(75024) should return 60696.
Passed
sumFibs(75025) should return 135721.
Passed*/

function sumFibs(num) {
//setting the initial array
let arr = [0, 1];
//adding fibonacci nuimbers until our last array element is greater than num
while (arr[arr.length - 1] <= num) {
  arr.push(arr[arr.length-1] + arr[arr.length - 2]);
}
//last array item is over num so we pop it off
arr.pop();
console.log(arr);
arr = arr.filter(value => value % 2 === 1);
const sum = arr.reduce((total, amount) => total + amount); 
console.log(arr, "Sum = ", sum);
return sum;
}

sumFibs(8);
