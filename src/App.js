import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        todoItems: [
            {name: 'Learn setState'},
            {name: 'Style my todo list'}
        ]
    };
}
  addItem = itemName => {
    this.setState(st => ({ todoItems: st.todoItems.concat({name: itemName }) }));
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const { todoItems } = this.state;
    return (
        <div className='todo'>
            <TodoList todoItems={todoItems}/>
            <TodoForm addItem={this.addItem} removeItem={this.removeItem}/>
        </div>
    )
  }
}

export default App;
