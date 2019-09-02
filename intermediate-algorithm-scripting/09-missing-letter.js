/*Intermediate Algorithm Scripting: Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
fearNotLetter("abce") should return "d".
Passed
fearNotLetter("abcdefghjklmno") should return "i".
Passed
fearNotLetter("stvwx") should return "u".
Passed
fearNotLetter("bcdf") should return "e".
Passed
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
Passed*/

function fearNotLetter(str) {
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    newArray.push(str.charCodeAt(i));
  }
  for (let j = 1; j < newArray.length; j++) {
    if (newArray[j] !== (newArray[j - 1]+1)) {
      let missingL = (newArray[j-1] + 1);
      missingL = String.fromCharCode(missingL);
      return missingL; 
    }
  }
  return undefined;
}

fearNotLetter("abce");
