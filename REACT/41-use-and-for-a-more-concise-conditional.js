/*React: Use && for a More Concise Conditional
The if/else statements worked in the last challenge, but there's a more concise way to achieve the same result. Imagine that you are tracking several conditions in a component and you want different elements to render depending on each of these conditions. If you write a lot of else ifstatements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the &&logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, return some markup. Here's an example:

{condition && <p>markup</p>}

If the conditionis true, the markup will be returned. If the condition is false, the operation will immediately return falseafter evaluating the conditionand return nothing. You can include these statements directly in your JSX and string multiple conditions together by writing &&after each one. This allows you to handle more complex conditional logic in your render()method without repeating a lot of code.


Solve the previous example again, so the h1only renders if displayis true, but use the &&logical operator instead of an if/elsestatement.*/

/*TESTS
MyComponentshould exist and render.
Passed
The render method should use the && logical operator to check the condition of this.state.display.
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
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {(this.state.display == true) && <h1>Displayed!</h1>}
       </div>
    );
  }
};
