// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

export default function TodoList(props) {
        return (
            props.todoItems.map((todoItem, idx) => (
                <div className="listItem" key={idx} onClick={(event) => props.isCompleted(todoItem.id, event)}>{todoItem.name}</div>
            ))
        );
}