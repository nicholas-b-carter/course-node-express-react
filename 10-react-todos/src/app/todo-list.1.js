import React from 'react';

export class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map( 
          todo => (<li key={todo.id}>{todo.text}</li>) 
        )}
      </ul>
    );
  }
}