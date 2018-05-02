import React, { Component } from 'react';
import TodosItem from './TodosItem';

class Todos extends Component {

  render() {
    let todosItem;
    if (this.props.todos) {
      todosItem = this.props.todos.map(todo => {
        return(
          <TodosItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        {todosItem}
      </div>
    );
  }
}

export default Todos;
