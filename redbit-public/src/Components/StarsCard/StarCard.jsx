import React from 'react';

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const className = i <= rating ? 'star filled' : 'star';
      stars.push(
        <span key={i} className={className}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div className="stars">{renderStars()}</div>;
};

export default StarRating;