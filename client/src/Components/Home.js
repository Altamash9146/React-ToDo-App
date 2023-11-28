
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskList from './Tasklist';
import AddTaskForm from './TaskForm';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

    const handleAddTask = newTask => {
    const newTaskObject = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObject]);
    toast.success('Task added successfully!');
  };

  const handleToggleComplete = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    toast.success('Task status updated successfully!');
  };

  const handleEditTask = (taskId, newTitle) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
    toast.success('Task edited successfully!');
  };

  const handleDeleteTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    toast.success('Task deleted successfully!');
  };

  const filteredTasks = filterCompleted
    ? tasks.filter(task => task.completed)
    : tasks;


  return (
    <div>
      <h1>Todo App</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <label>
        Show Completed:
        <input
          type="checkbox"
          checked={filterCompleted}
          onChange={() => setFilterCompleted(!filterCompleted)}
        />
      </label>
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
       <ToastContainer />
    </div>
    
  );
};

export default Home;
