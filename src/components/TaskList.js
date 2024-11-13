import React, { useState } from 'react';

function TaskList({ tasks, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');
  const [filterPriority, setFilterPriority] = useState('');

  const filteredTasks = tasks
    .filter((task) => task.title.includes(search))
    .filter((task) => (filterPriority ? task.priority === filterPriority : true));

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tasks" />
      <select onChange={(e) => setFilterPriority(e.target.value)} value={filterPriority}>
        <option value="">All Priorities</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => onUpdate({ ...task, completed: !task.completed })}>
              {task.completed ? 'Undo Complete' : 'Complete'}
            </button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
