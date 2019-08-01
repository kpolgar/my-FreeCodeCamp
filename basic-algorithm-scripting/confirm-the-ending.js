/*Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {
  //splitting string into array made of letters
  str = str.split("");
  
  //getting the length of the target and storing in variable
  let targetLength = target.length;
  
  //splicing off everything except the last few letters, #off letters left equals # of letters in target
  str.splice(0, str.length - targetLength);
  //joining letters back into a string
  str = str.join("");
  //comparing tring to target
  if (str == target) {
    return true;
  } else {
    return false;
  }
  
}

console.log(confirmEnding("Bastian", "stian"));
//Basic Algorithm Scripting: Confirm the Ending

function confirmEnding(str, target) {
  //splitting string into array made of letters
  str = str.split("");
  
  //getting the length of the target and storing in variable
  let targetLength = target.length;
  
  //splicing off everything except the last few letters, #off letters left equals # of letters in target
  str.splice(0, str.length - targetLength);
  //joining letters back into a string
  str = str.join("");
  //comparing tring to target
  if (str == target) {
    return true;
  } else {
    return false;
  }
  
}

console.log(confirmEnding("Bastian", "stian"));
