/*React: Give Sibling Elements a Unique Key Attribute
The last challenge showed how the mapmethod is used to dynamically render a number of elements based on user input. However, there was an important piece missing from that example. When you create an array of elements, each one needs a keyattribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way. Note that keys only need to be unique between sibling elements, they don't need to be globally unique in your application.


The code editor has an array with some front end frameworks and a stateless functional component named Frameworks(). Frameworks()needs to map the array to an unordered list, much like in the last challenge. Finish writing the mapcallback to return an lielement for each framework in the frontEndFrameworksarray. This time, make sure to give each lia keyattribute, set to a unique value.

Normally, you want to make the key something that uniquely identifies the element being rendered. As a last resort the array index may be used, but typically you should try to use a unique identification.*/

/*TESTS
The Frameworkscomponent should exist and render to the page.
Passed
Frameworksshould render an h1element.
Passed
Frameworksshould render a ulelement.
Passed
The ultag should render 6 child lielements.
Passed
Each list item element should have a unique keyattribute.
Passed*/


const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item, key) => {
    
    return <li key={key}>{item}</li>
    
  }); 
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
