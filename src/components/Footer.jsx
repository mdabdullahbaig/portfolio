import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerCard">
      <h5>
        &copy; 2020 Copyright:{" "}
        <b>
          <Link to="/" style={{ textDecoration:"none", color: "#000033", padding: "3px 10px" }}>
            Portfolio
          </Link>
        </b>
      </h5>
    </div>
  );
}

export default Footer;
