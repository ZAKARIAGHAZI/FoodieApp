import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2>
            <span className="logo-green">Foodie</span> site
          </h2>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>+1 86 852 826 000</p>
          <p>Info@Freshfest.Com</p>
          <p>1959 Pinnasavlvia,</p>
          <p>Culver City, CA, 93230</p>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h4>Never Miss a Recipe</h4>
          <div className="subscribe-box">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
          <p className="subscribe-note">
            Join our subscribers and get best recipe delivered each week!
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2024 Designed </p>
        <div className="footer-socials">
          <FaInstagram />
          <FaTwitter />
          <FaFacebookF />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
