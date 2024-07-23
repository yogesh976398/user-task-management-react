// src/TaskUpdateForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskUpdateForm = ({ task, onUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.due_date);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`http://localhost:5000/tasks/${task.id}`, { title, description, due_date: dueDate });
    onUpdate(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div>
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      </div>
      <button type="submit" className='btn btn-success'>Update Task</button>
    </form>
  );
};

export default TaskUpdateForm;
