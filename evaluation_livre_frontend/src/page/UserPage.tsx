import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUserById } from "../service/api";
import { Link } from "react-router-dom";
import UpdateUserForm from "../form/UpdateUserForm";

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
      setLoading(false);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUserById(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
    }
  };

  const handleUpdateUser = (user: any) => {
    setSelectedUser(user);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Liste Utilisateurs </h1>

      <div>
        <center>
          <Link to="/userform">
            <button className="green-button">Crée un utilisateur</button>
          </Link>
        </center>
        <br />
        <br />
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nom et prénom</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Supprimer
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateUser(user)}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && <UpdateUserForm user={selectedUser} />}
    </div>
  );
};

export default UserPage;
