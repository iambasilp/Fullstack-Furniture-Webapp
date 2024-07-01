import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Footer.css";
import { RiSofaLine } from "react-icons/ri";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    // Initialize ScrollReveal for the footer elements
    ScrollReveal().reveal('.footer', {
      duration: 1000,
      origin: 'bottom',
      distance: '20px',
      delay: 300,
      easing: 'ease',
    });
  }, []);

  return (
    <div className="footer">
      <div className="footer-logo">
        <RiSofaLine className="footer-logo-icon" />
        <p>FURNIX</p>
      </div>
      <ul className="footer-links">
        <li>
          <a href="/company">Company</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/locations">Locations</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FaInstagram className="footer-icon" />
        </div>
        <div className="footer-icons-container">
          <FaWhatsapp className="footer-icon" />
        </div>
        <div className="footer-icons-container">
          <FaLinkedin className="footer-icon" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <div className="footer-copyright-content">
          <div className="footer-logo-bottom-icon">
            <RiSofaLine size={20} />
          </div>
          <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
