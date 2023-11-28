import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testing = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <div>
              <strong>Title:</strong> {todo.title}
            </div>
            <div>
              <strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testing;
