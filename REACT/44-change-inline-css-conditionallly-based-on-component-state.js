/*React: Change Inline CSS Conditionally Based on Component State
At this point, you've seen several applications of conditional rendering and the use of inline styles. Here's one more example that combines both of these topics. You can also render CSS conditionally based on the state of a React component. To do this, you check for a condition, and if that condition is met, you modify the styles object that's assigned to the JSX elements in the render method.

This paradigm is important to understand because it is a dramatic shift from the more traditional approach of applying styles by modifying DOM elements directly (which is very common with jQuery, for example). In that approach, you must keep track of when elements change and also handle the actual manipulation directly. It can become difficult to keep track of changes, potentially making your UI unpredictable. When you set a style object based on a condition, you describe how the UI should look as a function of the application's state. There is a clear flow of information that only moves in one direction. This is the preferred method when writing applications with React.


The code editor has a simple controlled input component with a styled border. You want to style this border red if the user types more than 15 characters of text in the input box. Add a condition to check for this and, if the condition is valid, set the input border style to 3px solid red. You can try it out by entering text in the input.*/


/*TESTS
The GateKeepercomponent should render a divelement.
Passed
The GateKeepercomponent should be initialized with a state key inputset to an empty string.
Passed
The GateKeepercomponent should render an h3tag and an inputtag.
Passed
The inputtag should initially have a style of 1px solid blackfor the borderproperty.
Passed
The inputtag should be styled with a border of 3px solid redif the input value in state is longer than 15 characters.
Passed*/

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
      if (this.state.input.length > 15) {
        return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={{border: '3px solid red'}}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    ); 
    }else {
      }
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
      
  }
};
