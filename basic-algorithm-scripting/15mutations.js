/*Basic Algorithm Scripting: Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

/*TESTS
mutation(["hello", "hey"]) should return false.
Passed
mutation(["hello", "Hello"]) should return true.
Passed
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
Passed
mutation(["Mary", "Army"]) should return true.
Passed
mutation(["Mary", "Aarmy"]) should return true.
Passed
mutation(["Alien", "line"]) should return true.
Passed
mutation(["floor", "for"]) should return true.
Passed
mutation(["hello", "neo"]) should return false.
Passed
mutation(["voodoo", "no"]) should return false.*/
function mutation(arr) {
  //setting the first and seBasic Algorithm Scripting: Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.cond elements of the arry as first and second respectively
  let first = arr[0];
  let second = arr[1]
  //Making variables lowercase for comparison
  first = first.toLowerCase();
  second = second.toLowerCase();
//looping through the letters of the second word
 for (let i = 0, n = second.length; i < n; i++) {
    //setting the regex of the ith letter of the second word as patt
    var patt = new RegExp(second[i]);
    //testing the first word for patt
    var res = patt.test(first); 
    
    if (res == false) {
      return false;
    }
    

  } return true;
  
}

console.log(mutation(["Floor", "foir"]));
