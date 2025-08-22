import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu, clearMenu, setMenu } from "../../fitchers/menuSlice";
import { addToCart } from "../../fitchers/cartSlice";
import "./RestaurantMenu.css";

const STATIC_MENU_ID = "5uUs2b4bQdS3WS8z16LJKw";

const RestaurantMenuPage = () => {
  const dispatch = useDispatch();
  const {
    items: menuItems,
    loading,
    error,
  } = useSelector((state) => state.menu);

  useEffect(() => {
    const storedMenu = localStorage.getItem("static_menu");

    if (storedMenu) {
      dispatch(setMenu(JSON.parse(storedMenu)));
    } else {
      dispatch(fetchMenu(STATIC_MENU_ID)).then((action) => {
        if (action.payload) {
          localStorage.setItem("static_menu", JSON.stringify(action.payload));
        }
      });
    }

    return () => {
      dispatch(clearMenu());
    };
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  if (loading) return <p>Loading menu...</p>;
  if (error)
    return <p>{typeof error === "string" ? error : JSON.stringify(error)}</p>;

  return (
    <div className="menu-page">
      <h1>Restaurant Menu</h1>

      <div className="menu-list">
        {menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            <div key={index} className="menu-card">
              <img
                src={item.image_url?.replace("60s", "o") || "/placeholder.png"}
                alt={item.name || "Menu item"}
              />
              <h3>{item.name || "Unnamed item"}</h3>
              <p>{item.description || "No description available"}</p>
              <p>{item.price ? `$${item.price}` : "Price not available"}</p>
              <button
                onClick={() =>
                  handleAddToCart({
                    id: item.id || index,
                    name: item.name,
                    price: item.price,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </div>

      
    </div>
  );
};

export default RestaurantMenuPage;
