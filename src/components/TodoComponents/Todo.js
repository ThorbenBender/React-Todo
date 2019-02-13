import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state {
            todoItems = [
                {name: 'Learn setState'},
                {name: 'Style my todo list'}
            ]
        };
    }
    render() {
        return (
            <div className='todo'>
                <TodoList />
                <TodoForm addItem={this.addItem} removeItem={this.removeItem}/>
            </div>
        )
    }
}