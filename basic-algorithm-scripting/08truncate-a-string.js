/*Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  console.log(str.length);
  //if the string is longer than the number
  if (str.length > num) {
    //slplitting the string into an array of letters
    str = str.split("");
    //splice out everything after the max num to the end of the string
    str.splice((num), (str.length - num));
    //putting it back together and adding...
    str = str.join("");
    str = str + "...";
    console.log(str);

  }
  return str;
}

truncateString("Hell cat scales the abyss", 21);



console.log(repeatStringNumTimes("abc", 3));
