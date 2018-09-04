import React, {Component} from 'react';

import classes from './Cockpit.css';

class Cockpit extends Component {
    constructor(props) {
        super(props);
        console.log('[Cockpit.js] constructor()');
    };

    componentWillMount() {
        console.log('[Cockpit.js] componentWillMount()');
    };

    componentDidMount() {
        console.log('[Cockpit.js] componentDidMount()');
    };

    render() {
        console.log('[Cockpit.js] render()');
        const assignedClasses = [];
        let btnClass = '';
        if(this.props.showPersons) {
            btnClass = classes.Green;
        }
        if (this.props.persons.length <= 2) {
            assignedClasses.push(classes.red); // classes = ['red']
        }
        if (this.props.persons.length <= 1) {
            assignedClasses.push(classes.bold);  // classes = ['red', 'bold']
        }
        return (
            <div className={classes.Cockpit}>
                <h1>{this.props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}>New text</p>
                {/* <button style={style} onClick={this.togglePersonHandler}>Custom Button</button> */}
                <button className={btnClass} onClick={this.props.clicked}>Custom Button</button>
            </div>
        );
    };
}

export default Cockpit;