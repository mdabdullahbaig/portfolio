import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./SideDrawer.css";

const navLink_details = [
  { name: " About", link: "/about" },
  { name: "Education", link: "/education" },
  { name: "Skills", link: "/skill" },
  { name: "Projects", link: "/project" },
  { name: "Interests", link: "/interest" },
  { name: "Contact", link: "/contact" }
];

function SideDrawer({ close }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -250 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="sideDrawer"
    >
      <span onClick={close} className="closeDrawer">
        &times;
      </span>
      {navLink_details.map(detail => (
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          key={detail.name}
          to={detail.link}
          onClick={close}
        >
          {detail.name}
        </NavLink>
      ))}
    </motion.div>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;
