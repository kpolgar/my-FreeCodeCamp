/*React: Use a Ternary Expression for Conditional Rendering
Before moving on to dynamic rendering techniques, there's one last way to use built-in JavaScript conditionals to render what you want: the ternary operator. The ternary operator is often utilized as a shortcut for if/elsestatements in JavaScript. They're not quite as robust as traditional if/elsestatements, but they are very popular among React developers. One reason for this is because of how JSX is compiled, if/elsestatements can't be inserted directly into JSX code. You might have noticed this a couple challenges ago — when an if/elsestatement was required, it was always outside the returnstatement. Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:

condition ? expressionIfTrue : expressionIfFalse

The code editor has three constants defined within the CheckUserAgecomponent's render()method. They are called buttonOne, buttonTwo, and buttonThree. Each of these is assigned a simple JSX expression representing a button element. First, initialize the state of CheckUserAgewith inputand userAgeboth set to values of an empty string.

Once the component is rendering information to the page, users should have a way to interact with it. Within the component's returnstatement, set up a ternary expression that implements the following logic: when the page first loads, render the submit button, buttonOne, to the page. Then, when a user enters their age and clicks the button, render a different button based on the age. If a user enters a number less than 18, render buttonThree. If a user enters a number greater than or equal to 18, render buttonTwo.*/


/*TESTS
The CheckUserAgecomponent should render with a single inputelement and a single buttonelement.
Passed
The CheckUserAgecomponent's state should be initialized with a property of userAgeand a property of input, both set to a value of an empty string.
Passed
When the CheckUserAgecomponent is first rendered to the DOM, the button's inner text should be Submit.
Passed
Your code should not contain any if/elsestatements.
Passed
When a number of less than 18 is entered into the inputelement and the buttonis clicked, the button's inner text should read You Shall Not Pass.
Passed
When a number greater than or equal to 18 is entered into the inputelement and the buttonis clicked, the button's inner text should read You May Enter.
Passed
Once a number has been submitted, and the value of the inputis once again changed, the buttonshould return to reading Submit.
Passed*/

const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        
        {this.state.userAge == ''? buttonOne: this.state.userAge  >= 18 ? buttonTwo : buttonThree}
      
      </div>
    );
  }
};
