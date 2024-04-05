import React, { useEffect, useState } from "react";
import { fetchBooks, deleteBookById } from "../service/api";
import { Link } from "react-router-dom";
import UpdateBookForm from "../form/UpdateBookForm";

const BookPage: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedBook, setSelectedBook] = useState<any | null>(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
      setLoading(false);
    } catch (error) {
      console.error("Error loading books:", error);
    }
  };

  const handleDeleteBook = async (id: number) => {
    try {
      await deleteBookById(id);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error(`Error deleting book with id ${id}:`, error);
    }
  };

  const handleUpdateBook = (book: any) => {
    setSelectedBook(book);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Liste des livres</h1>
      <div>
        <center>
          <Link to="/bookform">
            <button className="green-button">Ajouté un Livre</button>
          </Link>
        </center>
        <br />
        <br />
      </div>{" "}
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Genre</th>
            <th scope="col">Résumé</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.summary}</td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteBook(book.id)}
                >
                  Supprimer
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateBook(book)}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBook && <UpdateBookForm book={selectedBook} />}
    </div>
  );
};

export default BookPage;
