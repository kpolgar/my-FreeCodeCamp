/*React: Add Inline Styles in React

You may have noticed in the last challenge that there were several other syntax differences from HTML inline styles in addition to the style attribute set to a JavaScript object. First, the names of certain CSS style properties use camel case. For example, the last challenge set the size of the font with fontSize instead of font-size. Hyphenated words like font-size are invalid syntax for JavaScript object properties, so React uses camel case. As a rule, any hyphenated style properties are written using camel case in JSX.

All property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified. If you want to use em, for example, you wrap the value and the units in quotes, like {fontSize: "4em"}. Other than the length values that default to px, all other property values should be wrapped in quotes.


If you have a large set of styles, you can assign a style object to a constant to keep your code organized. Uncomment the styles constant and declare an object with three style properties and their values. Give the div a color of "purple", a font-size of 40, and a border of "2px solid purple". Then set the style attribute equal to the styles constant.*/

/*TESTS
The styles variable should be an object with three properties.
Passed
The styles variable should have a color property set to a value of purple.
Passed
The styles variable should have a fontSize property set to a value of 40.
Passed
The styles variable should have a border property set to a value of 2px solid purple.
Passed
The component should render a div element.
Passed
The div element should have its styles defined by the styles object.
Passed*/

const styles = {color: "purple", fontSize: 40, border: '2px solid purple'}
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};