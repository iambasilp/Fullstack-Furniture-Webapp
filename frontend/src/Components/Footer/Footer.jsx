import React from "react";
import "./Footer.css";
import { RiSofaLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <RiSofaLine className="footer-logo-icon" />
        <p>SHOPPER</p>
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
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
