/*Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

/*TESTS
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
Passed
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
Passed
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
Passed
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
Passed
convertHTML("Schindler's List") should return Schindler&​apos;s List.
Passed
convertHTML("<>") should return &​lt;&​gt;.
Passed
convertHTML("abc") should return abc.
Passed*/

function convertHTML(str) {
  //replace each character with its html entity
    str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;"); 
  return str;
}

convertHTML("Dolce & <> >Gabbana");
