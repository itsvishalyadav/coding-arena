import "./App.css";
import { Routes, Route } from "react-router-dom";
import Features from "./components/Features/Features.jsx";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/about-us" element=""></Route>
        <Route path="/privacy-policy" element=""></Route>
        <Route path="/terms-and-conditions" element=""></Route>
      </Routes>
    </>
  );
}

export default App;
