import React from 'react';
// import Radium from  'radium';

import classes from './Person.css';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>From person {props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
// export default Radium(person);