import React, { useEffect, useState } from "react";
import './UserList.css';

const UserList = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAllUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const removeUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setAllUsers(allUsers.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div className="userlist">
      <h1>All Users List</h1>
      <div className="userlist-header">
        <p>Name</p> <p>Email</p> <p>Remove</p>
      </div>
      <div className="userlist-allusers">
        {allUsers.length ? (
          allUsers.map((user) => (
            <div key={user.id} className="userlist-item">
              <div className="userlist-content">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <button
                  className="userlist-remove-icon"
                  onClick={() => removeUser(user.id)}
                >
                  Remove
                </button>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
