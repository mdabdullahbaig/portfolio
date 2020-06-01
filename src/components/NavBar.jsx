import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import SideDrawer from "./SideDrawer";
import NavCard from "./commonComponents/NavCard";

const navLink_details = [
  { name: " About", link: "/about" },
  { name: "Education", link: "/education" },
  { name: "Skills", link: "/skill" },
  { name: "Projects", link: "/project" },
  { name: "Interests", link: "/interest" },
  { name: "Contact", link: "/contact" }
];

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <div>
        {isDrawerOpen && <SideDrawer close={handleOpen} />}

        <nav
          className="navbar fixed-top navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#000033", boxShadow: "2px 2px 2px white" }}
        >
          <Link
            to="/"
            className="navbar-brand"
            style={{ textDecoration: "none", color: "white", padding:"7px 10px" }}
          >
            Portfolio
          </Link>
          <div className="navbar-toggler">
            <IoIosMenu size="35px" color="white" onClick={handleOpen} />
          </div>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {navLink_details.map(detail => (
                <NavCard
                  key={detail.name}
                  name={detail.name}
                  link={detail.link}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
