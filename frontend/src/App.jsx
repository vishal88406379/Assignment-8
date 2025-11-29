import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE_URL = '/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch all todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}?search=${searchTerm}`);
      setTodos(response.data.todos);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create a new todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    try {
      const response = await axios.post(API_BASE_URL, {
        title,
        description,
        priority
      });
      
      setTodos([response.data, ...todos]);
      setTitle('');
      setDescription('');
      setPriority('medium');
      setError('');
    } catch (err) {
      setError('Failed to create todo');
      console.error('Error creating todo:', err);
    }
  };

  // Toggle todo completion status
  const toggleTodoStatus = async (id, currentStatus) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/${id}/toggle`);
      setTodos(todos.map(todo => 
        todo._id === id ? { ...todo, completed: response.data.completed } : todo
      ));
    } catch (err) {
      setError('Failed to update todo status');
      console.error('Error updating todo status:', err);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter todos based on search term
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchTodos();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>To-Do List App</h1>
      </header>

      <main className="app-main">
        {/* Add Todo Form */}
        <section className="add-todo-section">
          <h2>Add New Task</h2>
          <form onSubmit={createTodo} className="add-todo-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
            
            <button type="submit">Add Task</button>
          </form>
        </section>

        {/* Search Bar */}
        <section className="search-section">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </section>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Loading Indicator */}
        {loading && <div className="loading">Loading...</div>}

        {/* Todo List */}
        <section className="todo-list-section">
          <h2>Your Tasks ({todos.length})</h2>
          
          {todos.length === 0 && !loading ? (
            <p className="no-todos">No tasks found. Add a new task or try a different search.</p>
          ) : (
            <ul className="todo-list">
              {todos.map(todo => (
                <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}>
                  <div className="todo-content">
                    <h3>{todo.title}</h3>
                    {todo.description && <p>{todo.description}</p>}
                    <div className="todo-meta">
                      <span className="priority">Priority: {todo.priority}</span>
                      <span className="date">
                        Created: {new Date(todo.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="todo-actions">
                    <button 
                      onClick={() => toggleTodoStatus(todo._id, todo.completed)}
                      className={todo.completed ? 'btn-uncomplete' : 'btn-complete'}
                    >
                      {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                    </button>
                    
                    <button 
                      onClick={() => deleteTodo(todo._id)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;