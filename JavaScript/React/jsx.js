// Basic JSX
const JSX = <h1>Hello JSX!</h1>;

//More complex JSX
const JSX =
<div>
  <h1>Header</h1>
  <p>Paragraph</p>
  <ul>
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
  </ul>
</div>
;

//Comments
const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
      {/* Comment*/}
    </div>
  );

  //render to DOM
  const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  ReactDOM.render(JSX, document.getElementById("challenge-node"));

  //className
  const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

  //Stateless functional component
  const MyComponent = function() {
    return (
        <div className='someDiv'>
        <p>'Hello there'</p>
        </div>
    )
  }

//Another example
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div>
      <h1>Hello React!</h1>
    </div>
    );
  }
};

//Parent & Child basic components
return (
  <App>
   <Navbar />
   <Dashboard />
   <Footer />
  </App>
 )

//Parent & Child Components
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
          <ChildComponent />
      </div>
    );
  }
};

//Render example
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))