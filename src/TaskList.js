// src/TaskList.js
import React, { useState } from 'react';
import TaskUpdateForm from './TaskUpdateForm';
import axios from 'axios';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    onDeleteTask(id);
  };

  const handleUpdate = (task) => {
    setSelectedTask(task);
  };

  return (
    <div>
      <h2>Tasks</h2>
      {selectedTask && (
        <TaskUpdateForm
          task={selectedTask}
          onUpdate={(updatedTask) => {
            onUpdateTask(updatedTask);
            setSelectedTask(null);
          }}
        />
      )}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.description} (Due: {new Date(task.due_date).toLocaleDateString()})
            <button onClick={() => handleUpdate(task)} className='btn btn-primary'>Update</button>
            <button onClick={() => handleDelete(task.id)} className='btn btn-danger'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
