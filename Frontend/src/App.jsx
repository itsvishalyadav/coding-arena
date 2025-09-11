import "./App.css";
import { Routes, Route} from "react-router-dom";
import Features from "./pages/Features.jsx";
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/features" element={<Features />} />
    </Routes>
  )
}

export default App;  
