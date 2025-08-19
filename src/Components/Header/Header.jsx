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
        {/* Logo */}
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
              <NavLink to="/offers" className="special-offer">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">Our Restaurants</NavLink>
            </li>
            <li>
              <NavLink to="/contact">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/track">Contact</NavLink>
            </li>
          </ul>

          <div className="search-box mobile-only">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
            <CiShoppingCart className="cart-icon" />
          </div>
        </nav>

        {/* Search + Cart for desktop only */}
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
