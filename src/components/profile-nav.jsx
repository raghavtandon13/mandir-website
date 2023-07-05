import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import "./profile-nav.css";

function ProfileNav() {
  return (
    <div className="menu-bar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
          {/* <h2>Services</h2> */}
          <MenuIcon />
      </label>
      <div className="menu-items">
        <button>Online services</button>
        <button>eBooks</button>
        <button>News</button>
        <button>Bhajan</button>
        <button>Accomodation</button>
        <button>Darshan</button>
        <button>Sr. Citizen</button>
        <button>Bhajan</button>
      </div>
    </div>
  );
}
export default ProfileNav;
