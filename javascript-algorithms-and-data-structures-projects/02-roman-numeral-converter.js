/*JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
convertToRoman(2) should return "II".
Passed
convertToRoman(3) should return "III".
Passed
convertToRoman(4) should return "IV".
Passed
convertToRoman(5) should return "V".
Passed
convertToRoman(9) should return "IX".
Passed
convertToRoman(12) should return "XII".
Passed
convertToRoman(16) should return "XVI".
Passed
convertToRoman(29) should return "XXIX".
Passed
convertToRoman(44) should return "XLIV".
Passed
convertToRoman(45) should return "XLV"
Passed
convertToRoman(68) should return "LXVIII"
Passed
convertToRoman(83) should return "LXXXIII"
Passed
convertToRoman(97) should return "XCVII"
Passed
convertToRoman(99) should return "XCIX"
Passed
convertToRoman(400) should return "CD"
Passed
convertToRoman(500) should return "D"
Passed
convertToRoman(501) should return "DI"
Passed
convertToRoman(649) should return "DCXLIX"
Passed
convertToRoman(798) should return "DCCXCVIII"
Passed
convertToRoman(891) should return "DCCCXCI"
Passed
convertToRoman(1000) should return "M"
Passed
convertToRoman(1004) should return "MIV"
Passed
convertToRoman(1006) should return "MVI"
Passed
convertToRoman(1023) should return "MXXIII"
Passed
convertToRoman(2014) should return "MMXIV"
Passed
convertToRoman(3999) should return "MMMCMXCIX"
Passed*/

function convertToRoman(num) {

var numeral = "";
let remainder = num;

    if (remainder >= 1000) {
        let k = Math.floor(remainder / 1000);
        numeral = numeral + "M".repeat(k);
        remainder = remainder % 1000;
    } 
    
    if (remainder >= 900) {
        let k = Math.floor(remainder / 900);
        numeral = numeral + "CM";
        remainder = remainder % 900;
    }

    if (remainder >= 500) {
        let k = Math.floor(remainder / 500);
        numeral = numeral + "D".repeat(k);
        remainder = remainder % 500;
    }

    if (remainder >= 400) {
        let k = Math.floor(remainder / 400);
        numeral = numeral + "CD";
        remainder = remainder % 400;
    }

    if (remainder >= 100) {
        let k = Math.floor(remainder / 100);
        numeral = numeral + "C".repeat(k);
        remainder = remainder % 100;
    }

    if (remainder >= 90) {
        let k = Math.floor(remainder / 90);
        numeral = numeral + "XC";
        remainder = remainder % 90;
    }

    if (remainder >= 50) {
        let k = Math.floor(remainder / 50);
        numeral = numeral + "L".repeat(k);
        remainder = remainder % 50;
    }
    if (remainder >= 40) {
        let k = Math.floor(remainder / 40);
        numeral = numeral + "XL";
        remainder = remainder % 40;
    }
    if (remainder >= 10) {
        let k = Math.floor(remainder / 10);
        numeral = numeral + "X".repeat(k);
        remainder = remainder % 10;
    }

    if (remainder >= 9) {
        let k = Math.floor(remainder / 9);
        numeral = numeral + "IX";
        remainder = remainder % 9;
    }

    if (remainder >= 5) {
        let k = Math.floor(remainder / 5);
        numeral = numeral + "V".repeat(k);
        remainder = remainder % 5;
    }
    
    if (remainder >= 4) {
        let k = Math.floor(remainder / 4);
        numeral = numeral + "IV";
        remainder = remainder % 4;
    }

    if (remainder >= 1) {
        let k = Math.floor(remainder / 1);
        numeral = numeral + "I".repeat(k);
        remainder = remainder % 1;
    }

    return numeral

}

console.log(convertToRoman(11));

