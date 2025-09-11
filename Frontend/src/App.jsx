import "./App.css";
import { Routes, Route } from "react-router-dom";
import Features from "./components/Features/Features.jsx";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/features" element={<Features />} />
        <Route path="/login" element=""></Route>
        <Route path="/signup" element=""></Route>
        <Route path="/about-us" element=""></Route>
        <Route path="/privacy-policy" element=""></Route>
        <Route path="/terms-and-conditions" element=""></Route>
      </Routes>
    </>
  );
}

export default App;
