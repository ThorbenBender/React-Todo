import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoHeader from './components/TodoComponents/Todo';

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
    this.setState(st => ({ todoItems: st.todoItems.concat({name: itemName, completed: false, id: Date.now() }) }));
  }
  
  isCompleted = (id, event) => {
    let NewTodoItems = this.state.todoItems.map(item => {
      if (item.id === id){
        item.completed = !item.completed;
        event.target.classList.toggle('completed');
      }
      return item;
    })
    this.setState({
      todoItems: [...NewTodoItems],
    })
    
  }
  removeItem = () => {
    let NewArrayItems = this.state.todoItems.filter(item => {
      if (!item.completed){
        return item;
      }
    })
    this.setState({
      todoItems: [...NewArrayItems],
    })
  }
  addClass = event => {
    event.target.classList.toggle('completed');
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
        <TodoHeader />
        <div className="todo-list">
            <TodoList todoItems={todoItems} isCompleted={this.isCompleted}/>
          </div>
            <TodoForm addItem={this.addItem} removeItem={this.removeItem}/>
        </div>
    )
  }
}

export default App;
