import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = ({ buttonLabel, buttonLink }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
      <div className="navbar-brand">Jhandewalan Mandir</div>
      <div className="navbar-button">
        <Link to={buttonLink}>
          <button>{buttonLabel}</button>
        </Link>
        {/* <button>Sign Up</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
