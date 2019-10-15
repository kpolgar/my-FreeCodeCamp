/*React: Render with an If/Else Condition
Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard if/elsestatement in the render()method of a React component.


MyComponent contains a booleanin its state which tracks whether you want to display some element in the UI or not. The buttontoggles the state of this value. Currently, it renders the same UI every time. Rewrite the render()method with an if/elsestatement so that if displayis true, you return the current markup. Otherwise, return the markup without the h1element.

Note: You must write an if/elseto pass the tests. Use of the ternary operator will not pass here.*/

/*TESTS
MyComponentshould exist and render.
Passed
The render method should use an if/elsestatement to check the condition of this.state.display.
Passed
When displayis set to true, a div, button, and h1should render.
Passed
When displayis set to false, only a divand buttonshould render.
Passed*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    if (this.state.display == true) {
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );

    } else {
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
      
       </div>
    );
    }
    
  }
};
