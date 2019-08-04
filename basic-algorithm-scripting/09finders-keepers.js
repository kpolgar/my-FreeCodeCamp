/*Basic Algorithm Scripting: Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

function findElement(arr, func) {
  let num = 9;
  
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      console.log(arr[i]);
      return arr[i]; 
    } 
  }
  console.log("undefined");
  return undefined; 
}

findElement([1, 2, 5, 9], num => num % 2 === 0);
