import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../fitchers/cartSlice";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // toggle cart dropdown
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.totalQuantity;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <span className="logo-bold">FOODIE</span> site
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Restaurants">Our Restaurants</NavLink>
            </li>
            <li>
              <NavLink to="/restaurant/5uUs2b4bQdS3WS8z16LJKw">Menus</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="search-box desktop-only">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
          <div className="cart-wrapper" onClick={() => setCartOpen(!cartOpen)}>
            <CiShoppingCart className="cart-icon" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </div>
          {cartOpen && (
            <div className="cart-dropdown">
              {cart.items.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="cart-items">
                    {cart.items.map((item) => (
                      <li key={item.id} className="cart-item">
                        <span>
                          {item.name} x {item.quantity}
                        </span>
                        <span>
                          $
                          {(
                            parseFloat(item.price.replace("$", "")) *
                            item.quantity
                          ).toFixed(2)}
                        </span>

                        <button onClick={() => handleRemove(item.id)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="cart-total">
                    <strong>
                      Total: $
                      {cart.items
                        .reduce(
                          (sum, item) =>
                            sum +
                            parseFloat(item.price.replace("$", "")) *
                              item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </strong>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
