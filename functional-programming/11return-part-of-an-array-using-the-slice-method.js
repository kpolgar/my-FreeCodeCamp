/*Functional Programming: Return Part of an Array Using the slice Method

The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

Here's an example:

var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]

Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.*/

/*TESTS
Your code should use the slice method.
Passed
The inputAnim variable should not change.
Passed
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].
Passed
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].
Passed
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"]*/

function sliceArray(anim, beginSlice, endSlice) {
  
  let newArray = anim.slice(beginSlice, endSlice);
  return newArray;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));
