import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from  './App.css';
// import Radium, { StyleRoot } from 'radium';

import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a', name: 'animesh' },
      { id: 'b', name: 'anila' },
      { id: 'c', name: 'anila' }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("from handler");
    // this.state.persons[0].name  = "anu";
    this.setState({
      persons: [
        { name: newName },
        { name: 'anila' }
      ]
    });
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {

    /* const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'/* ,
      ':hover': {
        backgroundColor: 'cyan',
        color: 'black'
      } 
    };*/

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      // style.backgroundColor = 'green';
      /* style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      } */
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      );
      btnClass = classes.Green;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);  // classes = ['red', 'bold']
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>Hi I am react app</h1>
          <p className={assignedClasses.join(' ')}>New text</p>
          {/* <button style={style} onClick={this.togglePersonHandler}>Custom Button</button> */}
          <button className={btnClass} onClick={this.togglePersonHandler}>Custom Button</button>
          {persons}
        </div>
      // </ StyleRoot>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    );
  }
}

// export default Radium(App);
export default App;
