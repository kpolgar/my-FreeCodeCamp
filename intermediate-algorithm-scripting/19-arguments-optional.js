/*christmasjoggergap velvet joggergap velvet joggerebaposhgap velvet joggefunction addTogether(num1, num2) {
  
  for (let i = 0; i < arguments.length; i++) {
    
    if (typeof arguments[i] !=='number') {
      console.log(typeof(arguments[i]), arguments[i])
      return undefined
    } 
  }
  if (arguments.length == 2) {
    let sum = num1 + num2;
    return sum;
  } else {
    return function sumTwoAnd(num2) {
    if (typeof num2 !=='number') {
      return undefined
    } else {
    return num1 + num2;
    }
  }
}   
  }
  

console.log(addTogether(4, 3)/*TESTSaddTogether(2, 3) should return 5.
Passed
addTogether(2)(3) should return 5.
Passed
addTogether("http://bit.ly/IqT6zt") should return undefined.
Passed
addTogether(2, "3") should return undefined.
Passed
addTogether(2)([3]) should return undefined.Passed*/function addTogether(num1, num2) {
  
  for (let i = 0; i < arguments.length; i++) {
    
    if (typeof arguments[i] !=='number') {
      console.log(typeof(arguments[i]), arguments[i])
      return undefined
    } 
  }
  if (arguments.length == 2) {
    let sum = num1 + num2;
    return sum;
  } else {
    return function sumTwoAnd(num2) {
    if (typeof num2 !=='number') {
      return undefined
    } else {
    return num1 + num2;
    }
  }
}   
  }
  

console.log(addTogether(4, arguments-optional.js19-arguments-optional.js
