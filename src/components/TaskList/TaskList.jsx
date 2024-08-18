
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TaskList.css'; 

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ name: '', description: '' });

  const handleAddTask = () => {
    if (task.name && task.description) {
      setTasks([...tasks, task]);
      setTask({ name: '', description: '' });
    }
  };

  return (
    <div className="task-list">
      <h1>Task List</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Task Name"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <strong>{t.name}</strong>: {t.description}
          </li>
        ))}
      </ul>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

export default TaskList;
