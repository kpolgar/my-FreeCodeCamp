/*Intermediate Algorithm Scripting: Make a Person

Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
Object.keys(bob).length should return 6.
Passed
bob instanceof Person should return true.
Passed
bob.firstName should return undefined.
Passed
bob.lastName should return undefined.
Passed
bob.getFirstName() should return "Bob".
Passed
bob.getLastName() should return "Ross".
Passed
bob.getFullName() should return "Bob Ross".
Passed
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
Passed
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
Passed
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
Passed
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
Passed
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
Passed*/

var Person = function(firstAndLast) {
  //Name that is inputted saved as variable
  var name = firstAndLast;
  // Complete the method below and implement the others similarly
  //getFullName returns name
  this.getFullName = function() {
    return name;
  };
  //Extracts firt name from name
  this.getFirstName = function() {
    let first = name.split(" ");
    first = first[0]
    return first;
  }
  //Extracts last name from name
  this.getLastName = function() {
    let last = name.split(" ");
    last = last[1]
    return last;
  }
  //Overides original name
  this.setFullName = function(newFullName) {
    name = newFullName;
    return name;
  };
  //Overrides the first name and updates name variable
  this.setFirstName = function(newFirst) {
    let last = name.split(" ");
    last = last[1]
    name = newFirst.concat(' ', last)
    return newFirst;
    
}
//Overrides last name and updates name variable
this.setLastName = function(newLast) {
    let first = name.split(" ");
    first = first[0]
    name = first.concat(' ', newLast)
    return newLast;
    
}
  
};

var bob = new Person('Bob Ross');
