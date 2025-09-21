import "./App.css";
import { Routes, Route } from "react-router-dom";
import Features from "./components/Features/Features.jsx";
import LandingPage from "./pages/Home/LandingPage";
import Signup from "./pages/User/Signup.jsx";
import Login from "./pages/User/Login.jsx";
import AboutUs from "./pages/Footer/AboutUs.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/privacy-policy" element=""></Route>
        <Route path="/terms-and-conditions" element=""></Route>
      </Routes>
    </>
  );
}

export default App;
