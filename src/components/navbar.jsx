import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = ({ buttonLabel, buttonLink }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={"http://facebook.com"}>
          <Facebook />
        </Link>
        <Link to={"http://twitter.com"}>
          <Twitter />
        </Link>
        <Link to={"http://instagram.com"}>
          <Instagram />
        </Link>
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
