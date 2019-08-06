/*Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/
/*TESTS
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.*/
function titleCase(str) {
  //Splitting the sentence into an array of words; the array is stored in variable res
  str = str.split(" ");
  //Setting an empty string
  let newStr = [] 
  //Looping through the string one word at a time
  for (let i = 0; i < str.length; i++) {
    //Assigning the word to variable w
    let w = str[i];
    //Slicing off everything but the first letter and assigning it to r
    let r = w.slice(1);
    //Making everything but first letter lowercase
    r = r.toLowerCase();
    //Adding the first letter which we capitalize to the remaining letters, which are already lowercase
    let n = (str[i].charAt(0).toUpperCase()) + r;
    //Adding the completed word to a new string
    newStr.push(n); 
  }
  //joining together the words and assigning it to the original variable str
  str = newStr.join(" ")
  return str;
}

console.log(titleCase("I'M a little tea pot"));
