import React, { useEffect, useState } from "react";
import { fetchBooks } from "../service/api";
import "./BookAvis.css";
import StarRating from "./StarRating";

const BookPage: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <div className="card-container">
        {books.map((book) => (
          <div className="card" key={book.id}>
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
              <p className="card-text">{book.summary}</p>
              <p className="card-genre">{book.genre}</p>
              <StarRating
                rating={book.rating} 
                onRatingChange={(rating) => handleRatingChange(index, rating)} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPage;
