/*Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Passed
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Passed
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
Passed*/

function pairElement(str) {
 
  str = str.split("");
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") 
    {
      newArray.push(["G", "C"]);
      
    }
    else if (str[i] == "C") 
    {
      newArray.push(["C", "G"]);
    }
    else if (str[i] == "A") 
    {
      newArray.push(["A", "T"]);
    }
    else if (str[i] == "T") 
    {
      newArray.push(["T", "A"]);
    }
    
  }
 return newArray;
}

console.log(pairElement("CGGG"));


