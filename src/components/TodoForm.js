// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const getStoredTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return storedTodos;
  };

  const [text, setText] = useState('');
  const [todos, setTodos] = useState(getStoredTodos()); // Invoke the function here

  // Update todos and save to localStorage whenever they change
  const updateTodos = newTodos => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Check if the input text is non-empty before adding the todo
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
      const newTodo = { id: Date.now(), text, completed: false };
      const newTodos = [...todos, newTodo];
      updateTodos(newTodos);
    }
  };

  

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
