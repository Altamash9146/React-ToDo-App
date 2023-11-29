import React, { useState } from 'react';

const TaskList = ({ tasks, onToggleComplete, onEditTask, onDeleteTask }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState('');

  const handleEditButtonClick = (taskId, currentTitle) => {
    setEditTaskId(taskId);
    setEditTaskTitle(currentTitle);
  };

  const handleEditInputChange = (e) => {
    setEditTaskTitle(e.target.value);
  };

  const handleEditSave = (taskId, currentTitle) => {
    if (editTaskTitle.trim() !== '' && editTaskTitle !== currentTitle) {
      onEditTask(taskId, editTaskTitle);
    }
    setEditTaskId(null);
    setEditTaskTitle('');
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditTaskTitle('');
  };

  return (
    <ul>
      {tasks && tasks.map(task => (
        <li key={task.id} style={{ backgroundColor: task.completed ? '#e6ffe6' : 'white', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#808080' : 'black' }}>
                {task.id === editTaskId ? (
                  <input
                    type="text"
                    value={editTaskTitle}
                    onChange={handleEditInputChange}
                  />
                ) : (
                  task.title
                )}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {task.id === editTaskId ? (
                <>
                  <button onClick={() => handleEditSave(task.id)}>
                    Save
                  </button>
                  <button onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </>
              ) : (
                <button onClick={() => handleEditButtonClick(task.id, task.title)}>
                  Edit
                </button>
              )}
              <button onClick={() => onDeleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
