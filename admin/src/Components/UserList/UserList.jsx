import React, { useEffect, useState } from "react";
import './UserList.css'

const UserList = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users`);
      const data = await response.json();
      setAllUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const removeUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      });
      fetchUsers();
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div className="userlist">
      <h1>All Users List</h1>
      <div className="userlist-format-main">
        <p>Name</p> <p>Email</p> <p>Password</p> <p>Remove</p>
      </div>
      <div className="userlist-allusers">
        <hr />
        {allUsers.map((user) => (
          <div key={user.id}>
            <div className="userlist-format-main userlist-format">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
              <button
                className="userlist-remove-icon"
                onClick={() => removeUser(user.id)}
              >
                Remove
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
