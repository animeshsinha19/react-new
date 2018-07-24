import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>New text</p>
        <Person />
      </div>
      
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    );
  }
}

export default App;
