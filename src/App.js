import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'; // Import the CSS file


function App() {
  const [todos, setTodos] = useState([]);

  const handleToggle = id => {
    // Update the completed status of a Todo item
    setTodos(prevTodos =>{
      const updatedTodos1 = prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
      localStorage.setItem('todos', JSON.stringify(updatedTodos1));
  
      return updatedTodos1;
    });
  };

  const handleDelete = id => {
    // Remove a Todo item from state
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.id !== id);
  
      // Update local storage
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
  
      return updatedTodos;
    });
  };

  const handleAdd = text => {
    const newTodo = { id: Date.now(), text, completed: false };
    // Add a new Todo item
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <div className='todo-form'>
        <TodoForm onAdd={handleAdd} />
      </div>
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
