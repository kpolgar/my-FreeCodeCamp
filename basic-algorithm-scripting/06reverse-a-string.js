/* Basic Algorithm Scripting: Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Code by Kinga Polgar
kpolgar27@gmail.com
*/



function reverseString(str) {
  //setting an empty array called newString outside of loop
  let newString = []
  //decrementing i from one less than the length of str
  for (let i = str.length - 1; i >= 0; i--) {
    //adding the ith letter to new Array 
    newString.push(str[i]);  
  }
  //joining the elements of the newString array into one string with no commas
  newString = newString.join("");
  //setting str to newString and returning it
  str = newString;
  return str;
}
