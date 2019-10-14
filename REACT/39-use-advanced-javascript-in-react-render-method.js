/*React: Use Advanced JavaScript in React Render Method
In previous challenges, you learned how to inject JavaScript code into JSX code using curly braces, { }, for tasks like accessing props, passing props, accessing state, inserting comments into your code, and most recently, styling your components. These are all common use cases to put JavaScript in JSX, but they aren't the only way that you can utilize JavaScript code in your React components.

You can also write JavaScript directly in your rendermethods, before the returnstatement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the returnstatement, you place the variable name inside curly braces.


In the code provided, the rendermethod has an array that contains 20 phrases to represent the answers found in the classic 1980's Magic Eight Ball toy. The button click event is bound to the askmethod, so each time the button is clicked a random number will be generated and stored as the randomIndexin state. On line 52, delete the string "change me!"and reassign the answerconst so your code randomly accesses a different index of the possibleAnswersarray each time the component updates. Finally, insert the answerconst inside the ptags.*/


/*TESTS
he MagicEightBallcomponent should exist and should render to the page.
Passed
MagicEightBall's first child should be an inputelement.
Passed
MagicEightBall's third child should be a buttonelement.
Passed
MagicEightBall's state should be initialized with a property of userInputand a property of randomIndexboth set to a value of an empty string.
Passed
When MagicEightBallis first mounted to the DOM, it should return an empty pelement.
Passed
When text is entered into the inputelement and the button is clicked, the MagicEightBallcomponent should return a pelement that contains a random element from the possibleAnswersarray.
Passed*/


const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt', 
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it', 
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = this.state.randomIndex // << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }
            {possibleAnswers[answer]}
          { /* change code above this line */ }
        </p>
      </div>
    );
  }
};
