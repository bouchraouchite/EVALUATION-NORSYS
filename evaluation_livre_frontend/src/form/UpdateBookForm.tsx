import React, { useState } from "react";
import { updateBook } from "../service/api";

interface UpdateBookFormProps {
  book: any;
}

const UpdateBookForm: React.FC<UpdateBookFormProps> = ({ book }) => {
  const [bookData, setBookData] = useState(book);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateBook(bookData.id, bookData);
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du livre :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h3>Modifier utilisateur</h3>
      <br />
      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={bookData.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Auteur</label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value={bookData.author}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          className="form-control"
          id="genre"
          name="genre"
          value={bookData.genre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="summary">Résumé</label>
        <textarea
          className="form-control"
          id="summary"
          name="summary"
          value={bookData.summary}
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Modifier
      </button>
    </form>
  );
};

export default UpdateBookForm;
