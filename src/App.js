import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'animesh' },
      { name: 'anila' }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("from handler");
    // this.state.persons[0].name  = "anu";
    this.setState({
      persons:[
        { name: newName },
        { name: 'anila' }
      ]
    });
  }

  nameChangedHandler  = (event) => {
    this.setState({
      persons:[
        { name: event.target.value },
        { name: 'anila' }
      ]
    });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
            <div>
              {
                this.state.persons.map(person => {
                  return <Person name={person.name} />
                })
              }
            </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>New text</p>
        <button style={style} onClick={this.togglePersonHandler}>Custom Button</button>
        {persons}
      </div>
      
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    );
  }
}

export default App;
