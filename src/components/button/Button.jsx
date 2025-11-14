import React from "react";
import "./button.css";

const Button = ({ label, onClick, className = "", icon = null }) => {
  return (
    <div
      style={{ textAlign: "center" }}
      className="common-btn"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <button onClick={onClick} className={`btn-style ${className}`}>
        {label}
        {icon && <span className="icon">{icon}</span>}
      </button>
    </div>
  );
};

export default Button;
