import React, { useState } from 'react';
import { updateUser } from '../service/api';

interface UpdateUserFormProps {
  user: any;
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ user }) => {
  const [userData, setUserData] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(userData.id, userData);
      window.location.reload(); 
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h3>Modifier utilisateur</h3><br/>
      <div className="form-group">
        <label htmlFor="username">nom et prénom</label>
        <input type="text" className="form-control" id="username" name="username" value={userData.username} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">Modifier</button>
    </form>
  );
};

export default UpdateUserForm;
