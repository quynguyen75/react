import React, { useState } from "react";

export default function StateExample() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const addUser = (name) =>
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name,
      },
    ]);
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  const addButtonClickHandler = () => {
    if (!newUser) {
      return;
    }
    addUser(newUser.trim());
    setNewUser("");
  };

  const newUserChangeHandler = (e) => setNewUser(e.target.value);

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onDelete={deleteUser} />
      ))}
      <div>
        <input
          type="text"
          placeholder="name"
          value={newUser}
          onChange={newUserChangeHandler}
        />
        <button onClick={addButtonClickHandler}>Add</button>
      </div>
    </div>
  );
}

function User({ user, onDelete }) {
  const deleteUser = (e) => onDelete(user.id);

  return (
    <div>
      <b>{user.name}</b>
      <button onClick={deleteUser}>Delete</button>
    </div>
  );
}
