import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="footer_section">
          <div className="social-media">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
          </div>
          <div className="footer-text">
            <p>Lorem Ipsum Lorem Ipsum</p>
          </div>
          <div className="copy-right">
            <p>© TechwareLab copyrights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
