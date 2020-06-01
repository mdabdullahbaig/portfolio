import React from "react";
import { NavLink } from "react-router-dom";

function NavCard(props) {
  return (
    <NavLink
      to={props.link}
      className="nav-item nav-link"
      style={{ textDecoration: "none", color: "white" }}
    >
      {props.name}
    </NavLink>
  );
}

export default NavCard;
