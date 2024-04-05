import React, { useState } from "react";
import { addBook } from "../service/api";
import { useNavigate } from "react-router-dom";

const BookForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    summary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const newBook = await addBook(formData);
      console.log("Book added successfully:", newBook);
      setFormData({ title: "", author: "", genre: "", summary: "" });
    } catch (error) {
      console.error("Error adding book:", error);
    }
    navigate("/book");
  };

  return (
    <div>
      <h1>Creation de livre</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre de livre</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
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
            value={formData.author}
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
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary">Résumé du livre</label>
          <textarea
            className="form-control"
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>
        <br />
        <center>
          <button type="submit" className="btn btn-primary">
            Valider
          </button>
        </center>
      </form>
    </div>
  );
};

export default BookForm;
