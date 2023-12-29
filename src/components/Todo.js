// Todo.js
import React from 'react';


const iconStyle = {
    marginRight: '8px',
    cursor: 'pointer',
    float: 'right',
    padding: '5px' // Add padding to increase clickable area
  };

const Todo = ({ todo, onToggle, onDelete }) => {
      // Check if the text has whitespace
  const hasWhitespace = /\s/.test(todo.text);
  return (
    <div className={`individual-todo-container ${hasWhitespace ? 'whitespace' : 'no-whitespace'}`}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      {/* <button onClick={() => onDelete(todo.id)}>Delete</button> */}
      <img
        src='\icons\delete.png'
        alt='Delete Icon'
        style={iconStyle}
        onClick={() => onDelete(todo.id)}></img>
    </div>
  );
};

export default Todo;