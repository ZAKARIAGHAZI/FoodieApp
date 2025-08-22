import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../../fitchers/restaurantsSlice";
import RestaurantCard from "./RestaurantCard";
import RestaurantMenu from "./RestaurantMenu";
import "./RestaurantList.css";

const RestaurantList = () => {
  const dispatch = useDispatch();
  const {
    list = [],
    loading,
    error,
  } = useSelector((state) => state.restaurants);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div className="restaurants-section">
      <h1 className="restaurants-title">Our Restaurants</h1>
      {loading && <p>Loading restaurants...</p>}
      {error && <p>{error}</p>}

      <div className="restaurants-list">
        {list.length > 0
          ? list.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onClick={setSelected}
              />
            ))
          : !loading && <p>No restaurants available.</p>}
      </div>

      {selected && (
        <RestaurantMenu
          restaurantId={selected.id}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default RestaurantList;
