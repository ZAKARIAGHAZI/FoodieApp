import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <span className="logo-bold">FOODIE</span> site
        </div>

        {/* Hamburger for mobile */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Restaurants">Our Restaurants</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>

          <div className="search-box mobile-only">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
            <CiShoppingCart className="cart-icon" />
          </div>
        </nav>

        <div className="search-box desktop-only">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
          <CiShoppingCart className="cart-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
