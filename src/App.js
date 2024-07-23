// src/App.js
import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [filterUserId, setFilterUserId] = useState('');
  const [filterTaskId, setFilterTaskId] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    };
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    };
    fetchUsers();
    fetchTasks();
  }, []);

  const handleUserAdded = (user) => {
    setUsers([...users, user]);
  };

  const handleUserUpdated = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const handleUserDeleted = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleTaskAdded = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleTaskDeleted = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredUsers = filterUserId ? users.filter(user => user.id.toString() === filterUserId) : users;
  const filteredTasks = filterTaskId ? tasks.filter(task => task.id.toString() === filterTaskId) : tasks;

  return (
    <div className="App">
      <div className="container-fluid">
      <div class="row">
      <div class="col-sm-6 border" >
        <UserForm onUserAdded={handleUserAdded} />       
          <label>Filter Users by ID:</label>
          <input type="text" value={filterUserId} onChange={(e) => setFilterUserId(e.target.value)} />
          <UserList users={filteredUsers} onUpdateUser={handleUserUpdated} onDeleteUser={handleUserDeleted} />
      </div>

        
        <div class="col-sm-6 border">
        <TaskForm onTaskAdded={handleTaskAdded} />
          <label>Filter Tasks by ID:</label>
          <input type="text" value={filterTaskId} onChange={(e) => setFilterTaskId(e.target.value)} />       
        <TaskList tasks={filteredTasks} onUpdateTask={handleTaskUpdated} onDeleteTask={handleTaskDeleted} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
