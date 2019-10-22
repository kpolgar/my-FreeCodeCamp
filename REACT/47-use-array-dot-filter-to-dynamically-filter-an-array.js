ET/*
React: Use Array.filter() to Dynamically Filter an Array
The maparray method is a powerful tool that you will use often when working with React. Another method related to mapis filter, which filters the contents of an array based on a condition, then returns a new array. For example, if you have an array of users that all have a property onlinewhich can be set to trueor false, you can filter only those users that are online by writing:

let onlineUsers = users.filter(user => user.online);


In the code editor, MyComponent's stateis initialized with an array of users. Some users are online and some aren't. Filter the array so you see only the users who are online. To do this, first use filterto return a new array containing only the users whose onlineproperty is true. Then, in the renderOnlinevariable, map over the filtered array, and return a lielement for each user that contains the text of their username. Be sure to include a unique keyas well, like in the last challenges.*/

/*TESTS
MyComponentshould exist and render to the page.
Passed
MyComponent's state should be initialized to an array of six users.")
Passed
Each list item element should have a unique keyattribute.
Passed
MyComponentshould render lielements that contain the username of each online user.
Passed
MyComponentshould return a div, an h1, and then an unordered list containing lielements for every user whose online status is set to true.
Paased*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online);; 
    const renderOnline = usersOnline.map((user, key) => {
    return <li key={key}>{user.username}</li>
    
  });; // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};
