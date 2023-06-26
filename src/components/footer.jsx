import React from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>Jhandewalan Mandir</h1>
        {/* <h1>© Copyright 2023 Jhandewala Mandir. All Rights Reserved.</h1> */}
      </div>
      <div className="footer-right">
        <div className="social-links">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
}
export default Footer;
