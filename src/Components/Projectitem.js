import React, { Component } from 'react';

class Projectitem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onclick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default Projectitem;
