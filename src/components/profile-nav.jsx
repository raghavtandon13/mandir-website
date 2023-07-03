import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import "./profile-nav.css";

function ProfileNav() {
  return (
    <div className="menu-bar">
        <button>Online services</button>
        <button>eBooks</button>
        <button>News</button>
        <button>Bhajan</button>
    </div>
  );
}
export default ProfileNav;
