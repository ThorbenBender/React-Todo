// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

export default function TodoList() {
    return (
        props.friends.map((friend, idx) => (
            <div key={idx}>{todoName}</div>
        ))
    );
}