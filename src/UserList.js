// src/UserList.js
import React, { useState } from 'react';
import UserUpdateForm from './UserUpdateForm';
import axios from 'axios';

const UserList = ({ users, onUpdateUser, onDeleteUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    onDeleteUser(id);
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>

      {selectedUser && (
        <UserUpdateForm
          user={selectedUser}
          onUpdate={(updatedUser) => {
            onUpdateUser(updatedUser);
            setSelectedUser(null);
          }}
        />
      )}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.email})
            <button onClick={() => handleUpdate(user)} className='btn btn-primary'>Update</button>
            <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
