import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Green;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);  // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi I am react app</h1>
            <p className={assignedClasses.join(' ')}>New text</p>
            {/* <button style={style} onClick={this.togglePersonHandler}>Custom Button</button> */}
            <button className={btnClass} onClick={props.clicked}>Custom Button</button>
        </div>
    );
};

export default cockpit;