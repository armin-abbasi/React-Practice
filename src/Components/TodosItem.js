import React, { Component } from 'react';

class TodosItem extends Component {
  render() {
    return (
      <li className="Todos">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

export default TodosItem;
