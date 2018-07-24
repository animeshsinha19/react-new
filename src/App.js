import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'animesh' },
      { name: 'anila' }
    ]
  }

  switchNameHandler = () => {
    console.log("from handler");
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>New text</p>
        <button onClick={this.switchNameHandler}>Custom Button</button>
        <Person name={this.state.persons[0].name}/>
        <Person name={this.state.persons[1].name}/>
        <Person>No args</Person>
      </div>
      
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    );
  }
}

export default App;
