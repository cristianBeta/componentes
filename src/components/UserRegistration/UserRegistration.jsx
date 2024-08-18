
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserRegistration.css'; 

function UserRegistration() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.some(user => user.email === form.email)) {
      alert('User already exists');
    } else {
      setUsers([...users, form]);
      setForm({
        name: '',
        username: '',
        email: '',
        phone: '',
        id: '',
      });
    }
  };

  return (
    <div className="user-registration">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="ID"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

export default UserRegistration;
