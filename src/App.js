import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        {
          name: 'learn setState()',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Style the todo list',
          id: 1528817084358,
          completed: false
        }
      ]
    };
}
  addItem = itemName => {
    this.setState(st => ({ todoItems: st.todoItems.concat({name: itemName }) }));
  }
  
  isCompleted = id => {
    console.log(id);
    // this.todoItems.map(item => {
    //   if (item === )
    // })
  }
  // addClass = i => {
  //   this.setState(st => ({ todoItems : st.todoItems[i]} ))
  // }

  // removeItem = () => {
  //   this.setState(st => ({ todoItems: st.todoItems.filter(todoItem, checkClass)} ));
  // }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const { todoItems } = this.state;
    return (
        <div className='todo'>
            <TodoList todoItems={todoItems} isCompleted={this.isCompleted}/>
            <TodoForm addItem={this.addItem} removeItem={this.removeItem}/>
        </div>
    )
  }
}

export default App;
