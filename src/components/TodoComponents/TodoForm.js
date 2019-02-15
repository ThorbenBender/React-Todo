import React from 'react';
import './Todo.css';

export class TodoForm extends React.Component {
    state = {
        inputValue: '',
    }
    clearInput = () => {
        this.setState({ inputValue: ''});
    }

    changeHandler = event => {
        this.setState({
            inputValue: event.target.value,
        })
    }
    addButton = () => {
        this.props.addItem(this.state.inputValue);
        this.clearInput();
    }
    onRemove 
    render() {
        return (
            <div className="todo-form">
                <input type="text" value={this.state.inputValue} onChange={this.changeHandler} placeholder="What do you want to do"></input>
                <button onClick={this.addButton}>Add Item</button>
                <button onClick={this.props.removeItem}>Remove Item</button>
            </div>
        );
    }
}

export default TodoForm;