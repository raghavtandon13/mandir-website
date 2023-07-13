import React, { useContext } from 'react';
import LanguageContext from '../LanguageContext';
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
      <h1 className="heading">
        {/* Experience <br></br>Jhandewalan Mandir:<br></br> Divine Blessings Await */}
        {translations.heading}
      </h1>
      <p className="heading-desc">
        {/* Experience the beauty and grace of Jhandewalan Mandir, a Hindu Mandir
        temple located in the heart of Delhi. Feel the sacred energy as you
        connect with the divine through its beautiful architecture, stunning
        sculptures and captivating spiritual atmosphere. Embrace the blessings
        of the divine as you explore the many offerings of this historic temple,
        including traditional prayers, rituals and ceremonies. For a truly
        transformative experience, visit Jhandewalan Mandir and enjoy the
        blessings of the divine/ */}
        {translations.paragraph}
      </p>
      <button id="scrollButton" onClick={handleClick}>
        Contact Us
      </button>
    </div>
  );
}
export default Banner;
