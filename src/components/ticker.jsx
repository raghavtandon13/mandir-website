import React from "react";
import "./ticker.css";

function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-title">Updates</div>
      <div className="ticker-content">
        <marquee behavior="slow" direction="">
          <p>
            Special Event on 32nd June 2023 🛐🛐🙏🙏🥳🥳 Experience the beauty and grace of Jhandewalan Mandir, a Hindu
            Mandir temple located in the heart of 🛐🛐🙏🙏🥳🥳 Delhi. Feel the sacred energy
            as you connect with the divine through its beautiful architecture🛐🛐🙏🙏🥳🥳 
          </p>
        </marquee>
      </div>
    </div>
  );
}
export default Ticker;
