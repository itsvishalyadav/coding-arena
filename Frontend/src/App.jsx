import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/features" element=""></Route>
        <Route path="/login" element=""></Route>
        <Route path="/signup" element=""></Route>
      </Routes>
    </>
  );
}

export default App;
