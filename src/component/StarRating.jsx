import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "../styles/MultipleItems.css";

const StarRating = ({ rating }) => {
  const numericRating = parseFloat(rating);

  if (isNaN(numericRating) || numericRating < 0 || numericRating > 5) {
    return <div className="starRating invalid">Invalid Rating</div>;
  }

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(numericRating);
    const hasHalfStar = numericRating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star" />);
    }

    const emptyStarsCount = 5 - Math.ceil(numericRating);
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  return <div className="starRating">{renderStars()}</div>;
};

export default StarRating;