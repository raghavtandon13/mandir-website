import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageContext from "./LanguageContext";
import EnglishTranslations from "./translations/en.json";
import HindiTranslations from "./translations/hi.json";
import Home from "./pages/homepage";
import Login from "./pages/loginpage";
import SignUp from "./pages/signup";
import WelcomePage from "./pages/welcomepage";
import "./App.css";

function App() {
  const [language, setLanguage] = React.useState("en");
  const translations =
    language === "en" ? EnglishTranslations : HindiTranslations;

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "hi" : "en"));
  };
  const buttonLabel = language === "en" ? "हिंदी" : "Eng";
  return (
    <LanguageContext.Provider value={translations}>
      <button className="lang-btn" onClick={toggleLanguage}>
        {buttonLabel}
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="profile" element={<WelcomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
