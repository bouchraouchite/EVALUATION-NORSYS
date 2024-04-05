import React, { useEffect, useState } from "react";
import { fetchEmpreintes, deleteEmpreinteById } from "../service/api";
import { Link } from "react-router-dom";

const EmpreintesPage: React.FC = () => {
  const [empreintes, setEmpreintes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadEmpreintes();
  }, []);

  const loadEmpreintes = async () => {
    try {
      const fetchedEmpreintes = await fetchEmpreintes();
      setEmpreintes(fetchedEmpreintes);
      setLoading(false);
    } catch (error) {
      console.error("Error loading empreintes:", error);
    }
  };

  const handleDeleteEmpreinte = async (id: number) => {
    try {
      await deleteEmpreinteById(id);
      setEmpreintes(empreintes.filter((empreinte) => empreinte.id !== id));
    } catch (error) {
      console.error(`Error deleting empreinte with id ${id}:`, error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Empreintes </h1>
      <div>
        <center>
          <Link to="/empform">
            <button className="green-button">Crée Une Empreintes</button>
          </Link>
        </center>
        <br />
        <br />
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Titre de livre</th>
            <th scope="col">Utilisateur</th>
            <th scope="col">Returned</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {empreintes.map((empreinte) => (
            <tr key={empreinte.id}>
              <td>{empreinte.book.title}</td>
              <td>{empreinte.user.username}</td>
              <td>{empreinte.returned ? "Yes" : "No"}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteEmpreinte(empreinte.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpreintesPage;
