/*Intermediate Algorithm Scripting: Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Passed
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Passed
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Passed
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Passed*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  do {
    for (let i = 0; i < arr.length; i++) {
      
      if (typeof arr[i] == "object") {
        console.log(arr[i], "object")
        arr = arr.flat();
        i--;
      }
    }

  } while (true);
 
  return arr;
  
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
