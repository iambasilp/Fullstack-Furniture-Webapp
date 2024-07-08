import React from "react";
import { RiSofaLine } from "react-icons/ri";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-copyright-content">
        <div className="footer-logo-bottom-icon">
          <RiSofaLine size={30} />
        </div>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
