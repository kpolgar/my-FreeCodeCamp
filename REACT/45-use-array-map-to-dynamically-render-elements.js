/*React: Use Array.map() to Dynamically Render Elements
Conditional rendering is useful, but you may need your components to render an unknown number of elements. Often in reactive programming, a programmer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with that program. Programmers need to write their code to correctly handle that unknown state ahead of time. Using Array.map()in React illustrates this concept.

For example, you create a simple "To Do List" app. As the programmer, you have no way of knowing how many items a user might have on their list. You need to set up your component to dynamically render the correct number of list elements long before someone using the program decides that today is laundry day.


The code editor has most of the MyToDoListcomponent set up. Some of this code should look familiar if you completed the controlled form challenge. You'll notice a textareaand a button, along with a couple of methods that track their states, but nothing is rendered to the page yet.

Inside the constructor, create a this.stateobject and define two states: userInputshould be initialized as an empty string, and toDoListshould be initialized as an empty array. Next, delete the comment in the render()method next to the itemsvariable. In its place, map over the toDoListarray stored in the component's internal state and dynamically render a lifor each item. Try entering the string eat, code, sleep, repeatinto the textarea, then click the button and see what happens.

Note: You may know that all sibling child elements created by a mapping operation like this do need to be supplied with a unique keyattribute. Don't worry, this is the topic of the next challenge.*/

/*TESTS
The MyToDoList component should exist and render to the page.
Passed
The first child of MyToDoListshould be a textareaelement.
Passed
The third child of MyToDoListshould be a buttonelement.
Passed
The state of MyToDoListshould be initialized with toDoListas an empty array.
Passed
The state of MyToDoListshould be initialized with userInputas an empty string.
Passed
When the Create Listbutton is clicked, the MyToDoListcomponent should dynamically return an unordered list that contains a list item element for every item of a comma-separated list entered into the textareaelement.
Passed*/


const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput: '',
      toDoList: [],
    }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map (item => {
      return <li>{item}</li>      
    })
	
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};
