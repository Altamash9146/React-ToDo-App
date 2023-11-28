import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onEditTask, onDeleteTask }) => {
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
                {task.title}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={() => onEditTask(task.id, prompt('Edit task:', task.title))}>
                Edit
              </button>
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
