import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/imghero.png"; // replace with your image

const AboutUs = () => {
  return (
    <section className="about-section">
      <h1 className="restaurants-title">About US</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About FOODIE</h2>
          <p>
            Welcome to <strong>FOODIE</strong> – your ultimate destination for
            discovering the best restaurants and delicious meals around you. We
            are passionate about bringing food lovers together and making every
            dining experience unforgettable.
          </p>
          <p>
            Our team carefully selects restaurants, curates menus, and ensures
            that you get access to quality food from local favorites to gourmet
            delights. Join us in celebrating flavors from around the world!
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
