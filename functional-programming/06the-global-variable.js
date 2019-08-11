/*Functional Programming: Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.


Refactor (rewrite) the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of an array. The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.*/

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */

/*TESTS
bookList should not change and still equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
Passed
newBookList should equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
Passed
newerBookList should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
Passed
newestBookList should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].*/
// New parameters should come before the bookName one

// Add your code below this line
function add (argList, bookName) {
  let cloneList = [];
  for (let i = 0; i < argList.length; i++){
    cloneList.push(argList[i]);
  }
  cloneList.push(bookName);
  return cloneList
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (argList, bookName) {
  let cloneList2 = [];
  for (let i = 0; i < argList.length; i++){
    cloneList2.push(argList[i]);
  }
  console.log(argList)
  console.log(cloneList2)
  if (cloneList2.indexOf(bookName) >= 0) {
    
    cloneList2.splice(cloneList2.indexOf(bookName), 1);
    return cloneList2;
    
    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');

var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
    
    // Add your code above this line
    


var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
