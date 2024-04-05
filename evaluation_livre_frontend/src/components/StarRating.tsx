import React, { useState } from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    onRatingChange(index);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <span
            key={index}
            className={"star" + (rating >= starRating || hoverRating >= starRating ? " filled" : "")}
            onMouseOver={() => handleMouseOver(starRating)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starRating)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
