// src/UserUpdateForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserUpdateForm = ({ user, onUpdate }) => {
  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`http://localhost:5000/users/${user.id}`, { username: name, email });
    onUpdate(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit" className='btn btn-success'>Update User</button>
    </form>
  );
};

export default UserUpdateForm;
