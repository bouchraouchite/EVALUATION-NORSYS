import React, { useState } from 'react';
import { addUser } from '../service/api';

const UserForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = { username, email };
      await addUser(newUser);
      setUsername('');
      setEmail('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nom et prénom</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div><br />
        <center>
        <button type="submit" className="btn btn-primary">Valider</button>
        </center>
      </form>
    </div>
  );
};

export default UserForm;
