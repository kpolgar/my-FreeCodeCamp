/*Intermediate Algorithm Scripting: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

/*destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
Passed
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
Passed
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
Passed
destroyer([2, 3, 2, 3], 2, 3) should return [].
Passed
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
Passed
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].*/

function destroyer(arr) {
  // Remove all the values
  //looping through the first argument, which is an array
  for (let i = 0; i < arr.length; i++) {
    //looping through additional arguments, starting with position 1
    for (let j = 1; j < arguments.length; j++){
      //checking if the array elements are the same as the arguments
      if (arr[i] == arguments[j]) {
        //removing array elements specified in arguments
        arr.splice(i, 1);
        //since we removed a value, the i counter would be in the wrong place, need to decrement
        i--;
      }
    } 
  }
console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
