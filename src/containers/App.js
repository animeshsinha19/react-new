import React, { Component } from 'react';
// import logo from './logo.svg';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor()');
    }

    componentWillMount() {
        console.log('[App.js] componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount()');
    }

    state = {
        persons: [
            { id: 'a', name: 'animesh' },
            { id: 'b', name: 'anila' },
            { id: 'c', name: 'anila' }
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName },
                { name: 'anila' }
            ]
        });
    };

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
    };

    togglePersonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        });
    };

    render() {
        console.log('[App.js] render()');
        let persons = null;
        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />;
        }
        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler} />
                {persons}
            </div>
        );
    }
}

export default App;
