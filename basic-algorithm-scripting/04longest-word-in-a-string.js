/*Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

function findLongestWordLength(str) {
//Splitting the sentence into an array of words; the array is stored in variable res
let res = str.split(" ");
//defining longest variable outside of loop
let longest = 0;
//looping through each word in res
for (let i = 0; i < res.length; i++) {
  //resetting longest variable if a longer word is found
  if (res[i].length > longest) {
    longest = res[i].length; 
  }
}
//returning length of the longes word
return longest;
  
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
