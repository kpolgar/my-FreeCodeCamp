/*Intermediate Algorithm Scripting: Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
translatePigLatin("california") should return "aliforniacay".
Passed
translatePigLatin("paragraphs") should return "aragraphspay".
Passed
translatePigLatin("glove") should return "oveglay".
Passed
translatePigLatin("algorithm") should return "algorithmway".
Passed
translatePigLatin("eight") should return "eightway".
Passed
Should handle words where the first vowel comes in the end of the word.
Passed
Should handle words without vowels.
Passed*/

function translatePigLatin(str) { 
//regex for consonants at the beginning of a string
var consonant = /^[bcdfghjklmnpqrstvwxyz]+/i
//regex for vowel at the beginning of a string
var vowel = /^[aeiou]/i
//if first letters are consonants
if (consonant.test(str) == true) {
  //storing consonants in beginWord
  let beginWord = str.match(consonant)
  //getting length of beginword
  let l = beginWord[0].length;
  //splitting the word
  str = str.split("");
  //looping through to remove the first letter and put it on the end of the word
  for (let i = 0; i < l; i++) {
    let z = str.shift();
    str.push(z)
  }
  //joining, adding 'ay', and returning
  str = str.join("");
  str = str + "ay"
}
else {
  //if we have a vowel, we just add 'way
  str = str + "way"
  console.log(str);
}
return str;
}

console.log(translatePigLatin("consonant"));
