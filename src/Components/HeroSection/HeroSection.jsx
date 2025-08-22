import React from "react";
import "./HeroSection.css";
import { FaPlay } from "react-icons/fa";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import heroimage  from '../../assets/imghero.png'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="tag">🍲 Happy Healthy Eating</span>
        <h1>
          Kick the Diet, <br />
          Embrace <span className="highlight">Healthy</span> Food
        </h1>
        <p>
          Hot Tasty Food Will Reach You In 60 Minutes. <br />
          Who Needs A Diet When You Can Enjoy Tasty, Nutritious Meals?
        </p>
        <div className="hero-buttons">
          <button className="btn-order">ORDER NOW</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-image">
        <img
          src={heroimage}
          alt="Healthy Food"
          className="main-food"
        />
      </div>
    </section>
  );
};

export default HeroSection;
