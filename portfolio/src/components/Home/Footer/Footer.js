import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-parent">
          <img
            src={require("../../../assets/img/shape-bg.png")}
            alt="no internet connection"
          />
        </div>
      </div>
    </div>
  );
}
