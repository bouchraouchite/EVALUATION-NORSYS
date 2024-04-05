import React, { useState, useEffect } from "react";
import { fetchBooks, fetchUsers, addEmpreinte } from "../service/api";

const EmpreinteForm: React.FC = () => {
  const [empreinteData, setEmpreinteData] = useState({
    bookId: "",
    userId: "",
    returned: true,
  });
  const [books, setBooks] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const fetchedBooks = await fetchBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    const fetchUsersData = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchBooksData();
    fetchUsersData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? !empreinteData.returned : value;
    setEmpreinteData({ ...empreinteData, [name]: newValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        book: { id: empreinteData.bookId },
        user: { id: empreinteData.userId },
        returned: empreinteData.returned,
      };
      console.log("Data to be submitted:", data);
      const response = await addEmpreinte(data);
      console.log("Empreinte ajoutée avec succès:", response);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'empreinte:", error);
    }
  };

  return (
    <div>
      <h1>Create Empreinte</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookId">Book</label>
          <select
            className="form-control"
            id="bookId"
            name="bookId"
            value={empreinteData.bookId}
            onChange={handleChange}
          >
            <option value="">Select a book</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="userId">Utilisateur</label>
          <select
            className="form-control"
            id="userId"
            name="userId"
            value={empreinteData.userId}
            onChange={handleChange}
          >
            <option value="">Selectionner Utilisateurs</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="returned"
            name="returned"
            checked={empreinteData.returned}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="returned">
            Returned
          </label>
        </div>
        <br /><center>
        <button type="submit" className="btn btn-primary">
          Valider
        </button>
        </center>
      </form>
    </div>
  );
};

export default EmpreinteForm;
