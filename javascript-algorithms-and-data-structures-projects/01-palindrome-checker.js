/*JavaScript Algorithms and Data Structures Projects: Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

/*TESTS
palindrome("eye") should return a boolean.
Passed
palindrome("eye") should return true.
Passed
palindrome("_eye") should return true.
Passed
palindrome("race car") should return true.
Passed
palindrome("not a palindrome") should return false.
Passed
palindrome("A man, a plan, a canal. Panama") should return true.
Passed
palindrome("never odd or even") should return true.
Passed
palindrome("nope") should return false.
Passed
palindrome("almostomla") should return false.
Passed
palindrome("My age is 0, 0 si ega ym.") should return true.
Passed
palindrome("1 eye for of 1 eye.") should return false.
Passed
palindrome("0_0 (: /-\ :) 0-0") should return true.
Passed
palindrome("five|\_/|four") should return false.
Passed*/

function palindrome(str) {
  // Good luck!
  //Pulling out letters and numbers
  str = str.match(/[A-Za-z0-9+]/gi);
  //creating new Array
  let newArr = [];
  //pushing the last element of the string to the beginning of the newArray, thus reversing the string
  for (let i = str.length-1; i >= 0; i--) {
    newArr.push(str[i]);
  }
  //joining the two arrays together for easy comparison
  str = str.join("").toLowerCase();
  console.log(str)
  newArr = newArr.join("").toLowerCase();
  //returning true if they match
  if (str == newArr) {
    return true
  } else {
    return false;
  }
}
console.log(palindrome("_Eye"));
