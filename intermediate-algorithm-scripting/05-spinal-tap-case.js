/*Intermediate Algorithm Scripting: Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
Passed
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
Passed
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
Passed
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
Passed
spinalCase("AllThe-small Things") should return "all-the-small-things".*/

function spinalCase(str) {
 //slice into a new array to avoid mutating original, trim white space
  let s = str.slice().trim();
  //finding a lowercase immediately followed by an uppercase and putting in a space between them
   s = s.replace(/([a-z])([A-Z])/g, '$1 $2')
   //splitting where there is a space or underscore
   s = s.split(/\s+|_+/);
   //joining with a dash
   s = s.join("-").toLowerCase();
 
    console.log(s)
  return s;
}

spinalCase('This Is-SpinalTap');
