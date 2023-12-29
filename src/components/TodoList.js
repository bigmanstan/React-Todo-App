// TodoList.js
import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const TodoList = ({ todos: propTodos, onToggle, onDelete }) => {
  const getStoredTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return storedTodos;
  };

  const [todos, setTodos] = useState(getStoredTodos());

  useEffect(() => {
    // Use propTodos to update the local state when propTodos changes
    setTodos(propTodos);
  }, [propTodos]);

  useEffect(() => {
    // Save todos to localStorage whenever they change
    setTodos(getStoredTodos());
  }, []);

  return (
    <div>
      {/* Render the todos from the local state */}
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
