/*React: Add Comments in JSX

JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.

To put comments inside JSX, you use the syntax to wrap around the comment text.


The code editor has a JSX element similar to what you created in the last challenge. Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.*/

/*TESTS
The constant JSX should return a div element.
Passed
The div should contain an h1 tag as the first element.
Passed
The div should contain a p tag as the second element.
Passed
The JSX should include a comment.
Passed*/

const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    {/*So, this is how react happens*/}
    <p>Here's a subtitle</p>
  </div>
);
