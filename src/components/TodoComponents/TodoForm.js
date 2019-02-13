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
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.changeHandler}></input>
                <button onClick={this.addButton}>Add Item</button>
                {/* <button onClick={}>Remove Item</button> */}
            </div>
        );
    }
}

export default TodoForm;