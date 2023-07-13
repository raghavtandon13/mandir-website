import React, { useContext } from "react";
import LanguageContext from "../LanguageContext";
import "./banner.css";

function Banner() {
  const translations = useContext(LanguageContext);

  const handleClick = () => {
    {
      var targetElement = document.getElementById("targetElement");
      targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
      targetElement.classList.add("blink");
      setTimeout(function () {
        targetElement.classList.remove("blink");
      }, 2000);
    }
  };

  return (
    <div className="first-banner">
      <h1 className="heading">{translations.heading}</h1>
      <p className="heading-desc">{translations.paragraph}</p>
      <button id="scrollButton" onClick={handleClick}>
        Contact Us
      </button>
    </div>
  );
}
export default Banner;
