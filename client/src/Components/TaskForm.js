import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 45) {
      toast.warning('Task name should not exceed 45 characters!');
    } else {
      setNewTask(inputValue);
    }
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    } else {
      toast.warning('Please enter a task name before adding!');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        maxLength={45}
        placeholder="Enter task name (max 45 characters)"
      />
      <button onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
