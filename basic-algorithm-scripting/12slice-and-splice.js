/*Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

/*TESTS
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
Passed
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
Passed
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Passed
All elements from the first array should be added to the second array in their original order.
Passed
The first array should remain the same after the function runs.
Passed
The second array should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
  // here we are slicing or copying arr2 in its entirety; setting arr3 to arr2 still causes the array to be modified when we modify arr3
  let arr3 = arr2.slice(0, arr2.length);
  
  //looping through arr1
  for (let i = 0; i < arr1.length; i++) {
    //setting each member of array to z
    let z = arr1[i];
    //starting with position n, deleting 0 items, adding in z
    arr3.splice(n, 0, z);
    //console.log(arr3)
    //incrementing n so that during the next loop, the next item is added consecutively
    n++
  }  
  return arr3;

}


console.log(frankenSplice([1, 2, 3], [4, "cupcake", 6], 1));

