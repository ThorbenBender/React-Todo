// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

function TodoList(props) {
    return (
        props.todoItems.map((todoItem, idx) => (
            <div key={idx}>{todoItem.name}</div>
        ))
    );
}

export default TodoList;