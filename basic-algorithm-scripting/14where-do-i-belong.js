/*Basic Algorithm Scripting: Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/
/*getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
Passed
getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
Passed
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
Passed
getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
Passed
getIndexToIns([40, 60], 50) should return 1.
Passed
getIndexToIns([40, 60], 50) should return a number.
Passed
getIndexToIns([3, 10, 5], 3) should return 0.
Passed
getIndexToIns([3, 10, 5], 3) should return a number.
Passed
getIndexToIns([5, 3, 20, 3], 5) should return 2.
Passed
getIndexToIns([5, 3, 20, 3], 5) should return a number.
Passed
getIndexToIns([2, 20, 10], 19) should return 2.
Passed
getIndexToIns([2, 20, 10], 19) should return a number.
Passed
getIndexToIns([2, 5, 10], 15) should return 3.
Passed
getIndexToIns([2, 5, 10], 15) should return a number.
Passed
getIndexToIns([], 1) should return 0.
Passed
getIndexToIns([], 1) should return a number.*/

function getIndexToIns(arr, num) {
  arr.sort(function(a, b){return a-b});
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      console.log("bigger", arr[i]);
      arr.splice((i), 0, num);
      console.log(i)
      return i;  
    }
  } 
    console.log(arr); 
    arr.push(num);
    console.log(arr);
    console.log(i);
    let i = arr.length - 1;
    return i;
  
}

console.log(getIndexToIns([3, 10, 5], 3));
