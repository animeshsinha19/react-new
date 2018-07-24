import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>From person {props.name}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;