import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <div className="restaurant-card" onClick={handleClick}>
      <img src={restaurant.photo_url} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.categories.map((c) => c.category_filter).join(", ")}</p>
      <p>⭐ {restaurant.avg_rating}</p>
    </div>
  );
};

export default RestaurantCard;
