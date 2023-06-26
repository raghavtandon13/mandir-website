import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Login from "./pages/loginpage";
import SignUp from "./pages/signup";
import WelcomePage from "./pages/welcomepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="profile" element={<WelcomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
